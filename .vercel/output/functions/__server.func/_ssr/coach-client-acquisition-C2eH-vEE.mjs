import { r as __toESM } from "../_runtime.mjs";
import { E as isRedirect, g as useRouter, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { n as biggestChallenges, t as auditSchema } from "./audit-schema-CKZqmAPl.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-R87o2wE2.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { S as ArrowRight, _ as Circle, a as Square, b as ChevronDown, c as Play, d as LoaderCircle, f as Hexagon, g as Clock, h as Download, i as Star, l as Menu, m as Funnel, n as UserPlus, o as Sprout, p as Handshake, r as Triangle, s as ShieldCheck, t as X, u as Magnet, v as CircleCheck, x as CalendarCheck, y as CircleAlert } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coach-client-acquisition-C2eH-vEE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var navLinks = [
	{
		label: "Free Training",
		href: "#vsl"
	},
	{
		label: "The System",
		href: "#system"
	},
	{
		label: "FAQ",
		href: "#faq"
	},
	{
		label: "Audit",
		href: "#audit"
	}
];
function SiteHeader() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed left-0 right-0 top-3 z-50 px-4 sm:top-5 sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border px-4 transition-all duration-300 sm:px-6 ${scrolled ? "border-line bg-background/65 shadow-2xl backdrop-blur-xl" : "border-transparent bg-background/0"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/coach-client-acquisition",
					className: "flex items-center gap-3",
					"aria-label": "Duxio home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex items-center justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo-icon.png",
							alt: "",
							className: "h-8 w-auto opacity-0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 bg-brand-gradient",
							style: {
								WebkitMaskImage: "url(/logo-icon.png)",
								WebkitMaskSize: "contain",
								WebkitMaskRepeat: "no-repeat",
								WebkitMaskPosition: "center"
							}
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex items-center justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo-text.png",
							alt: "",
							className: "h-6 w-auto opacity-0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 bg-brand-gradient",
							style: {
								WebkitMaskImage: "url(/logo-text.png)",
								WebkitMaskSize: "contain",
								WebkitMaskRepeat: "no-repeat",
								WebkitMaskPosition: "center"
							}
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-sm font-medium text-muted-foreground transition-all hover:text-brand-gradient hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#audit",
						className: "inline-flex items-center rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all hover:scale-105 hover:opacity-90 hover:shadow-[0_0_20px_rgba(var(--accent),0.5)]",
						children: "Map My Revenue Leaks"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "md:hidden",
					onClick: () => setOpen((v) => !v),
					"aria-label": "Toggle menu",
					"aria-expanded": open,
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6 text-foreground" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6 text-foreground" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute left-4 right-4 top-[4.5rem] overflow-hidden rounded-2xl border border-line bg-background/95 shadow-2xl backdrop-blur-2xl md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-1 p-4",
				children: [navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface hover:text-brand-gradient",
					children: l.label
				}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#audit",
					onClick: () => setOpen(false),
					className: "mt-3 inline-flex items-center justify-center rounded-full bg-brand-gradient px-5 py-3 text-sm font-semibold text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:opacity-90",
					children: "Map My Revenue Leaks"
				})]
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-line bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-14 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-10 md:flex-row md:items-start md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/coach-client-acquisition",
						className: "flex items-center gap-3",
						"aria-label": "Duxio home",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/logo-icon.png",
								alt: "",
								className: "h-8 w-auto opacity-0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 bg-brand-gradient",
								style: {
									WebkitMaskImage: "url(/logo-icon.png)",
									WebkitMaskSize: "contain",
									WebkitMaskRepeat: "no-repeat",
									WebkitMaskPosition: "center"
								}
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/logo-text.png",
								alt: "",
								className: "h-6 w-auto opacity-0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 bg-brand-gradient",
								style: {
									WebkitMaskImage: "url(/logo-text.png)",
									WebkitMaskSize: "contain",
									WebkitMaskRepeat: "no-repeat",
									WebkitMaskPosition: "center"
								}
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm leading-relaxed text-muted-foreground",
						children: "We engineer end-to-end client acquisition ecosystems that turn cold traffic and passive lurkers into booked high-ticket sales conversations."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Explore",
						links: [
							{
								label: "Free 8-Min Training",
								href: "#vsl"
							},
							{
								label: "The 7-Part System",
								href: "#system"
							},
							{
								label: "FAQ",
								href: "#faq"
							}
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Get Started",
						links: [{
							label: "Map My Revenue Leaks",
							href: "#audit"
						}]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Duxio. Client acquisition systems for coaches."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "No guaranteed results. We build the system around the business."
				})]
			})]
		})
	});
}
function FooterCol({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "text-xs font-semibold uppercase tracking-wider text-foreground",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-4 space-y-3",
		children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: l.href,
			className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
			children: l.label
		}) }, l.label))
	})] });
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
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
var submitAudit = createServerFn({ method: "POST" }).validator((data) => auditSchema.parse(data)).handler(createSsrRpc("52a5396c5d2944e5c1fe128fd1674a451fc86a9329305a259a54a82f8004b8d9"));
function AuditForm() {
	const submit = useServerFn(submitAudit);
	const [step, setStep] = (0, import_react.useState)(1);
	const [done, setDone] = (0, import_react.useState)(false);
	const [serverError, setServerError] = (0, import_react.useState)(null);
	const { register, handleSubmit, trigger, formState: { errors, isSubmitting } } = useForm({ resolver: u(auditSchema) });
	const onSubmit = handleSubmit(async (values) => {
		setServerError(null);
		try {
			await submit({ data: values });
			setDone(true);
		} catch {
			setServerError("Something went wrong submitting your audit. Please try again.");
		}
	});
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessCard, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "relative z-10 w-full overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-2xl transition-all sm:p-9",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-primary/5 opacity-50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-px -z-10 rounded-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]" }),
			step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "What is the biggest bottleneck in your coaching business right now?",
						required: true,
						error: errors.biggestChallenge?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: inputCls(!!errors.biggestChallenge),
							defaultValue: "",
							...register("biggestChallenge"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Select your biggest challenge"
							}), biggestChallenges.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: c,
								children: c
							}, c))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: async () => {
							if (await trigger("biggestChallenge")) setStep(2);
						},
						className: "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background transition-all hover:opacity-90",
						children: "Continue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-green-500/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Step 1 of 2" })]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "First Name",
							required: true,
							error: errors.firstName?.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								autoComplete: "given-name",
								className: inputCls(!!errors.firstName),
								...register("firstName")
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							required: true,
							error: errors.email?.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								autoComplete: "email",
								className: inputCls(!!errors.email),
								...register("email")
							})
						})]
					}),
					serverError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-start gap-2.5 rounded-lg border border-destructive/30 bg-destructive/5 p-3.5 text-sm text-destructive",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mt-0.5 h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: serverError })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: isSubmitting,
						className: "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-4 text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100",
						children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Submitting…"] }) : "Map My Revenue Leaks"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-col items-center justify-center gap-2 text-xs text-muted-foreground sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-green-500/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "100% secure. No spam." })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setStep(1),
							className: "underline decoration-muted-foreground/30 underline-offset-2 hover:text-foreground",
							children: "Back to Step 1"
						})]
					})
				]
			})
		]
	});
}
function SuccessCard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-elevated p-8 text-center sm:p-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-7 w-7" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-6 text-2xl font-semibold text-foreground",
				children: "Your audit request is in."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-3 max-w-md text-base leading-relaxed text-muted-foreground",
				children: "We'll review your client acquisition journey and send your breakdown shortly. Check your inbox, and keep an eye out for the next steps."
			})
		]
	});
}
function Field({ label, required, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mb-1.5 block text-sm font-medium text-foreground",
				children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-0.5 text-accent",
					children: "*"
				})]
			}),
			children,
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1.5 block text-xs text-destructive",
				children: error
			})
		]
	});
}
function inputCls(hasError) {
	return [
		"w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground transition-colors",
		"placeholder:text-muted-foreground/70",
		"focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent",
		hasError ? "border-destructive" : "border-input"
	].join(" ");
}
var vslTeasers = [
	"The 5 hidden revenue leaks in your coaching funnel",
	"How to ethically capture \"lurking\" prospects",
	"The exact follow-up sequence that doubles show-up rates"
];
function HeroSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[20%] top-[10%] -z-10 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[100px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-[20%] top-[20%] -z-10 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-5 pb-12 pt-16 sm:px-8 sm:pt-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow-chip",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-1.5 w-1.5 rounded-full bg-accent",
								"aria-hidden": true
							}), "Free Training for Coaches"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-7 text-4xl leading-[1.05] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]",
							children: "Add 3-5 High-Ticket Coaching Clients This Month (Without Buying Generic Leads)."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl",
							children: "90% of your audience is consuming your content but never booking a call. Discover the 7-part architecture that captures lost traffic and turns passive followers into pre-sold calendar appointments."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#vsl",
								className: "group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(var(--accent),0.5)] sm:w-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4 fill-current" }), "Watch the Free Training"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "group inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-surface px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground/30 sm:w-auto",
									children: ["Map My Revenue Leaks", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
								className: "max-w-xl border-none bg-transparent p-0 shadow-none",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
										className: "sr-only",
										children: "Free Coach Funnel Audit"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
										className: "sr-only",
										children: "Submit your details to get a free funnel audit."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditForm, {})
								]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "inline-flex items-center gap-1.5 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-accent" }), "No hard pitch. We just find the leaks."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden h-3 w-px bg-line sm:block",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative flex h-2 w-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-accent" })]
									}), "The exact framework used to scale high-ticket programs"]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VslPlayer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-24 border-t border-line/50 pt-10 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium uppercase tracking-wider text-muted-foreground",
						children: "Trusted by coaches scaling past $50k/mo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale sm:gap-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xl font-bold text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Triangle, { className: "h-6 w-6 fill-foreground" }), "VERTEX"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xl font-bold text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hexagon, { className: "h-6 w-6 fill-foreground" }), "NEXUS"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xl font-bold text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-6 w-6 fill-foreground" }), "LUMEN"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xl font-bold text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "h-6 w-6 fill-foreground" }), "QUARTZ"]
							})
						]
					})]
				})
			]
		})]
	});
}
function VslPlayer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "vsl",
		className: "mt-14 scroll-mt-20 sm:mt-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mb-5 max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "section-label",
						children: "Free Training"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl",
						children: "Where Are You Losing Potential Clients?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground sm:text-base",
						children: "Watch this free 8-minute training to discover the 5 biggest leaks in a coach's client acquisition journey."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "card-elevated group relative mx-auto max-w-4xl overflow-hidden p-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex aspect-video items-center justify-center overflow-hidden rounded-xl",
					style: { background: "linear-gradient(150deg, oklch(0.18 0.004 264) 0%, oklch(0.14 0.004 264) 60%, oklch(0.24 0.03 256) 130%)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "absolute inset-0 opacity-[0.08]",
							style: {
								backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
								backgroundSize: "48px 48px"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							"aria-label": "Play free training",
							className: "group/play relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-2xl transition-transform hover:scale-105",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute inset-0 -z-10 rounded-full",
								style: { background: "radial-gradient(circle, color-mix(in oklab, var(--accent) 50%, transparent), transparent 70%)" }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-8 w-8 translate-x-0.5 fill-foreground text-foreground" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-3 left-3 rounded-md bg-black/55 px-2.5 py-1 text-xs font-medium text-white backdrop-blur",
							children: "Free Training · 7–10 min"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-5 grid max-w-2xl gap-2.5 sm:grid-cols-3",
				children: vslTeasers.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-lg border border-line bg-surface px-3.5 py-2.5 text-xs font-medium text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-1.5 w-1.5 shrink-0 rounded-full bg-accent",
						"aria-hidden": true
					}), t]
				}, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-8 max-w-2xl rounded-2xl border border-line bg-surface px-5 py-5 text-center sm:px-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-foreground sm:text-base",
					children: "After watching, get your free Coach Funnel Audit."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:opacity-90 hover:shadow-[0_0_30px_rgba(var(--accent),0.5)]",
						children: ["Map My Revenue Leaks", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-xl border-none bg-transparent p-0 shadow-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "sr-only",
							children: "Free Coach Funnel Audit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							className: "sr-only",
							children: "Submit your details to get a free funnel audit."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditForm, {})
					]
				})] })]
			})
		]
	});
}
var systemParts = [
	"Strategy",
	"Lead Capture",
	"Funnels",
	"CRM",
	"Automation",
	"Lead Nurturing",
	"Booking",
	"Follow-Up",
	"Conversion Optimization",
	"Tracking"
];
function ReframeSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-2 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-soft p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "section-label",
						children: "An Important Reframe"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]",
						children: "A Pretty Funnel Will Not Save You."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A standalone funnel is just one small, isolated piece of the puzzle." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Stop building disconnected landing pages. Start engineering a",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: "frictionless journey"
								}),
								" that pulls cold traffic straight into high-ticket sales conversations."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We map, build, and optimize the entire end-to-end client journey—so you never have to worry about \"where your next client is coming from\" again." })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-soft p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
					children: "That connected journey can include"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex flex-wrap gap-2.5",
					children: systemParts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-lg border border-line bg-surface-2 px-3.5 py-2 text-sm font-medium text-foreground",
						children: p
					}, p))
				})]
			})]
		})
	}) });
}
var steps$1 = [
	{
		n: "01",
		title: "ATTRACT",
		body: "Turn strangers into an audience that actually pays attention to your message.",
		icon: Magnet,
		span: "col-span-1 sm:col-span-2 lg:col-span-2"
	},
	{
		n: "02",
		title: "CAPTURE",
		body: "Give interested prospects an irresistible reason to hand over their contact info, so you own the audience instead of renting it from an algorithm.",
		icon: UserPlus,
		span: "col-span-1 lg:col-span-1"
	},
	{
		n: "03",
		title: "QUALIFY",
		body: "Filter out the tire-kickers so you only spend your time speaking with prospects who have the budget and urgency to buy today.",
		icon: Funnel,
		span: "col-span-1 lg:col-span-1"
	},
	{
		n: "04",
		title: "BOOK",
		body: "Eliminate the email back-and-forth and inject qualified prospects directly onto your calendar while you sleep.",
		icon: CalendarCheck,
		span: "col-span-1 sm:col-span-2 lg:col-span-2"
	},
	{
		n: "05",
		title: "FOLLOW UP",
		body: "Automate reminders so your show-up rates skyrocket.",
		icon: Clock,
		span: "col-span-1 lg:col-span-1"
	},
	{
		n: "06",
		title: "CONVERT",
		body: "Step into sales conversations with prospects who are already pre-sold, making the close a natural conclusion rather than a hard pitch.",
		icon: Handshake,
		span: "col-span-1 lg:col-span-1"
	},
	{
		n: "07",
		title: "NURTURE",
		body: "Stay top-of-mind with prospects who aren't ready to buy today, until they are.",
		icon: Sprout,
		span: "col-span-1 lg:col-span-1"
	}
];
function SystemSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "system",
		className: "scroll-mt-20 border-t border-line bg-surface transition-colors",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "section-label",
						children: "The Mechanism"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]",
						children: "The 7-Part Client Acquisition System"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg leading-relaxed text-muted-foreground",
						children: "You don't have a traffic problem; you have a capture problem. Most coaches have fragmented funnels that leak prospects at every step. Here is the exact end-to-end architecture that patches those leaks and guides premium prospects directly to a sales conversation."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: [steps$1.map((s) => {
					const Icon = s.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `card-soft border-accent/15 bg-card group relative overflow-hidden p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-accent/40 ${s.span}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 flex h-full flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-sm transition-transform duration-300 group-hover:scale-110",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-5xl font-bold text-accent/20 transition-colors group-hover:text-accent/40",
									children: s.n
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-auto pt-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold tracking-wide text-foreground",
									children: s.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: s.body
								})]
							})]
						})]
					}, s.n);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col justify-center rounded-2xl p-8 sm:p-12 transition-all hover:scale-[1.01]",
					style: { background: "linear-gradient(135deg, var(--accent), color-mix(in oklab, var(--accent) 40%, black))" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl font-semibold leading-snug text-white sm:text-2xl",
							children: "We don't sell technology."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xl font-semibold leading-snug text-white/80 sm:text-2xl",
							children: "We engineer this exact ecosystem around your coaching business."
						})]
					})
				})]
			})]
		})
	});
}
var steps = [
	{
		n: "1",
		title: "Tell us about your business",
		body: "Share your offer, audience, and current numbers through the form."
	},
	{
		n: "2",
		title: "We analyze your client journey",
		body: "We identify potential leaks across traffic, capture, nurturing, and booking."
	},
	{
		n: "3",
		title: "Receive your key opportunities",
		body: "Get a clear breakdown. If there's a fit, we can review the recommended system together."
	}
];
function AuditCtaSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "audit",
		className: "scroll-mt-20 border-t border-line bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-16 lg:grid-cols-5 lg:gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "section-label",
							children: "Free Coach Funnel Audit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl",
							children: "Stop Guessing. Let Us Find Your Revenue Leaks."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg",
							children: "Submit your current funnel details below. We will map out your exact acquisition flow, pinpoint where high-ticket clients are dropping off, and show you exactly how to fix it—zero obligations."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-semibold uppercase tracking-wider text-foreground",
								children: "How It Works"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-6",
								children: steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-xs font-bold text-white",
										children: s.n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-base font-semibold text-foreground",
										children: s.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: s.body
									})] })]
								}, s.n))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-10 text-xs leading-relaxed text-muted-foreground",
							children: "We do not promise guaranteed revenue or guaranteed client results. The audit is designed to give you useful, honest insight before any sales conversation."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditForm, {})
				})]
			})
		})
	});
}
var faqs = [
	{
		q: "Do I need a massive audience for this to work?",
		a: "No. This system is designed to monetize the attention you already have, turning passive lurkers into booked calls without spending a dime on ads."
	},
	{
		q: "Do I need a complicated funnel?",
		a: "No. Complexity kills conversions. We build lean, high-performing architectures tailored specifically to patch the exact revenue leaks in your current client journey."
	},
	{
		q: "Is this just a website or landing page?",
		a: "No. A standalone website won't save your business. We engineer the complete end-to-end acquisition ecosystem—from lead capture to calendar injection."
	},
	{
		q: "What happens after the free audit?",
		a: "We'll map out your exact acquisition flow and pinpoint where high-ticket clients are dropping off. If there's a fit, we'll show you the exact architecture needed to fix it."
	},
	{
		q: "Is the audit really free?",
		a: "Yes. We lead with value. The audit provides you with an actionable breakdown of your funnel leaks before you ever commit to a sales conversation."
	},
	{
		q: "Do you guarantee clients or revenue?",
		a: "No. We guarantee a world-class acquisition ecosystem designed for high-ticket conversion. Your offer and sales ability ultimately close the deal."
	}
];
function FaqSection() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "scroll-mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "section-label",
					children: "FAQ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]",
					children: "Frequently Asked Questions"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 divide-y divide-line rounded-2xl border border-line bg-background",
				children: faqs.map((f, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen(isOpen ? null : i),
						className: "flex w-full items-center justify-between gap-4 px-6 py-5 text-left",
						"aria-expanded": isOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base font-semibold text-foreground",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-5 w-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}` })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-6 pb-5 text-sm leading-relaxed text-muted-foreground",
								children: f.a
							})
						})
					})] }, i);
				})
			})]
		})
	});
}
var testimonials = [
	{
		quote: "Duxio mapped our funnel and found $12k in MRR we were literally leaving on the table. The audit alone was worth more than most paid courses.",
		author: "Sarah J.",
		role: "Fitness Business Coach"
	},
	{
		quote: "We were driving thousands of views but getting zero calls. We implemented the Duxio architecture and added 4 high-ticket clients the next month.",
		author: "Marcus T.",
		role: "B2B Sales Consultant"
	},
	{
		quote: "The progressive profiling form strategy instantly doubled our lead capture rate. It's the most frictionless system we've ever used.",
		author: "Elena R.",
		role: "Leadership Coach"
	}
];
function TestimonialSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line bg-surface-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "section-label",
						children: "Real Results"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl",
						children: "Don't Just Take Our Word For It."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg text-muted-foreground",
						children: "See how coaches are plugging their revenue leaks."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
				children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-soft flex flex-col p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1",
							children: [...Array(5)].map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-accent text-accent" }, idx))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "mt-6 flex-1 text-base leading-relaxed text-foreground",
							children: [
								"\"",
								t.quote,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 font-bold text-accent",
								children: t.author.charAt(0)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold text-foreground",
								children: t.author
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-muted-foreground",
								children: t.role
							})] })]
						})
					]
				}, i))
			})]
		})
	});
}
function ExitIntentPopup() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleMouseLeave = (e) => {
			if (e.clientY <= 0) {
				if (!sessionStorage.getItem("exit_intent_shown")) {
					setOpen(true);
					sessionStorage.setItem("exit_intent_shown", "true");
				}
			}
		};
		document.addEventListener("mouseleave", handleMouseLeave);
		return () => document.removeEventListener("mouseleave", handleMouseLeave);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-md border-none bg-transparent p-0 shadow-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "sr-only",
					children: "Exit Intent Offer"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "sr-only",
					children: "Get the free 1-Page Funnel Checklist before you leave."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 w-full overflow-hidden rounded-2xl border border-line bg-surface p-8 shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-primary/5 opacity-50" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-7 w-7 text-accent" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 text-2xl font-bold tracking-tight text-foreground",
									children: "Leaving so soon?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: [
										"Before you go, download the ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "1-Page Funnel Checklist" }),
										". It reveals the exact architecture we use to patch 90% of revenue leaks in high-ticket coaching businesses."
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-8 space-y-4",
							onSubmit: (e) => {
								e.preventDefault();
								setOpen(false);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								required: true,
								placeholder: "Enter your best email...",
								className: "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-gradient px-4 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:opacity-90",
								children: ["Send Me The Checklist", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center justify-center gap-1.5 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-green-500/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "100% free. No spam." })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen(false),
							className: "mt-6 block w-full text-center text-xs text-muted-foreground hover:text-foreground hover:underline",
							children: "No thanks, I'll figure it out myself"
						})
					]
				})
			]
		})
	});
}
function CoachClientAcquisition() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReframeSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditCtaSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExitIntentPopup, {})
		]
	});
}
//#endregion
export { CoachClientAcquisition as component };
