import { WithPgClient } from "../interfaces";
import { CompiledSharedOptions } from "../lib";

export async function resetLockedAt(
  compiledSharedOptions: CompiledSharedOptions,
  withPgClient: WithPgClient,
): Promise<void> {
  const {
    escapedWorkerSchema,
    workerSchema,
    options: { noPreparedStatements },
    useNodeTime,
  } = compiledSharedOptions;

  const now = useNodeTime ? "$1::timestamptz" : "now()";

  await withPgClient((client) =>
    client.query({
      text: `\
with j as (
update ${escapedWorkerSchema}._private_jobs as jobs
set locked_at = null, locked_by = null, run_at = greatest(run_at, now())
where locked_at < ${now} - interval '4 hours'
)
update ${escapedWorkerSchema}._private_job_queues as job_queues
set locked_at = null, locked_by = null
where locked_at < ${now} - interval '4 hours'`,
      values: useNodeTime ? [new Date().toISOString()] : [],
      name: noPreparedStatements
        ? undefined
        : `clear_stale_locks${useNodeTime ? "N" : ""}/${workerSchema}`,
    }),
  );
}
