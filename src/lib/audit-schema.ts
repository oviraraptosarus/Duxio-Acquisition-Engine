import { z } from "zod";

export const biggestChallenges = [
  "Getting enough qualified leads",
  "Turning leads into conversations",
  "Getting people to book calls",
  "Follow-up",
  "No-shows",
  "Sales conversion",
  "I don't know where the problem is",
] as const;

export const auditSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name."),
  email: z.string().email("Please enter a valid email."),
  website: z.string().optional().or(z.literal("")),
  biggestChallenge: z.string().min(1, "Please select your biggest challenge."),
});

export type AuditFormValues = z.input<typeof auditSchema>;
export type AuditSubmission = z.output<typeof auditSchema>;

export const leadSources = [
  "Instagram",
  "LinkedIn",
  "Referrals",
  "Organic content",
  "Cold outreach",
  "Paid ads",
  "Other",
] as const;
