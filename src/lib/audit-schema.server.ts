/**
 * Server-safe re-export of the audit schema.
 *
 * The canonical schema lives in `./audit-schema` (client-safe). Server functions
 * import from this `.server.ts` module so the server-only import guard is
 * satisfied, without duplicating the schema definition.
 */
export {
  auditSchema,
  biggestChallenges,
  leadSources,
  type AuditFormValues,
  type AuditSubmission,
} from "./audit-schema";
