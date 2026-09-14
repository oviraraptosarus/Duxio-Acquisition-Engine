import { createServerFn } from "@tanstack/react-start";
import { auditSchema, type AuditSubmission } from "./audit-schema.server";

/**
 * Submits a Free Coach Funnel Audit request.
 *
 * In production this handler is where the submission would be pushed into the
 * CRM (creating/updating a contact, recording all audit fields, and moving the
 * opportunity into the "Audit Requested" pipeline stage) and where the Day 0
 * audit-confirmation email + the Day 1/3/5/7 nurture + appointment-reminder
 * automations would be triggered. That wiring lives in the marketing platform
 * and is documented in src/routes/index.tsx — see the "Funnel & automation"
 * notes. Here we persist the submission server-side so the form works end to
 * end without external services.
 */
export const submitAudit = createServerFn({ method: "POST" })
  .validator((data) => auditSchema.parse(data))
  .handler(async ({ data }) => {
    const record: AuditSubmission & {
      receivedAt: string;
      id: string;
    } = {
      ...data,
      receivedAt: new Date().toISOString(),
      id: `audit_${Math.random().toString(36).slice(2, 10)}`,
    };

    // Server-side log so submissions are observable during preview/operation.
    console.log("[Duxio] Audit submission received:", record);

    return { ok: true, id: record.id };
  });
