import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/audit-schema-CKZqmAPl.js
var biggestChallenges = [
	"Getting enough qualified leads",
	"Turning leads into conversations",
	"Getting people to book calls",
	"Follow-up",
	"No-shows",
	"Sales conversion",
	"I don't know where the problem is"
];
var auditSchema = objectType({
	firstName: stringType().min(1, "Please enter your first name."),
	email: stringType().email("Please enter a valid email."),
	website: stringType().optional().or(literalType("")),
	biggestChallenge: stringType().min(1, "Please select your biggest challenge.")
});
//#endregion
export { biggestChallenges as n, auditSchema as t };
