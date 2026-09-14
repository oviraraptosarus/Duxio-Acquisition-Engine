import { r as __toESM } from "../_runtime.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, k as redirect, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CmaD0reL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CtIrZbST.css";
function reportVibeError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__vibeEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__vibeReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/coach-client-acquisition",
						className: "inline-flex items-center justify-center rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-medium text-white transition-colors hover:opacity-90 hover:scale-[1.02]",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportVibeError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-medium text-white transition-colors hover:opacity-90 hover:scale-[1.02]",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/coach-client-acquisition",
						className: "inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$2 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "author",
				content: "Duxio"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/png",
				href: "/logo-icon.png"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$2.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
/**
* The Duxio VSL landing page lives at /coach-client-acquisition (the canonical
* SEO slug). The root path "/" redirects there so any legacy/home traffic lands
* on the correct page.
*/
var Route$1 = createFileRoute("/")({ beforeLoad: () => {
	throw redirect({ to: "/coach-client-acquisition" });
} });
var $$splitComponentImporter = () => import("./coach-client-acquisition-C2eH-vEE.mjs");
var PAGE_URL = "https://duxio.com/coach-client-acquisition";
var Route = createFileRoute("/coach-client-acquisition")({
	head: () => ({
		meta: [
			{ title: "Duxio | Client Acquisition Systems for Coaches" },
			{
				name: "description",
				content: "Duxio helps coaches turn existing attention and leads into qualified conversations, booked calls, and clients through client acquisition systems, funnels, automation, nurturing, and follow-up."
			},
			{
				property: "og:title",
				content: "Duxio | Client Acquisition Systems for Coaches"
			},
			{
				property: "og:description",
				content: "Turn your existing attention and leads into more conversations, qualified appointments, and clients. Get your free coach funnel audit."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: PAGE_URL
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: PAGE_URL
		}],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Organization",
					name: "Duxio",
					url: "https://duxio.com",
					description: "Duxio helps coaches turn existing attention and leads into qualified conversations, booked calls, and clients through client acquisition systems.",
					slogan: "We build the system around the business."
				})
			},
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "VideoObject",
					name: "The 5-Part Client Acquisition System for Coaches",
					description: "Free training: learn the 5 places coaches lose potential clients and how to build a simple system that turns attention and leads into qualified conversations and booked calls.",
					thumbnailUrl: `${PAGE_URL}/vsl-thumbnail.jpg`,
					uploadDate: "2026-01-01",
					duration: "PT8M",
					contentUrl: PAGE_URL
				})
			},
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "FAQPage",
					mainEntity: [
						{
							"@type": "Question",
							name: "Do I need a massive audience for this to work?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "No. This system is designed to monetize the attention you already have, turning passive lurkers into booked calls without spending a dime on ads."
							}
						},
						{
							"@type": "Question",
							name: "Do I need a complicated funnel?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "No. Complexity kills conversions. We build lean, high-performing architectures tailored specifically to patch the exact revenue leaks in your current client journey."
							}
						},
						{
							"@type": "Question",
							name: "Is this just a website or landing page?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "No. A standalone website won't save your business. We engineer the complete end-to-end acquisition ecosystem—from lead capture to calendar injection."
							}
						},
						{
							"@type": "Question",
							name: "What happens after the free audit?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "We'll map out your exact acquisition flow and pinpoint where high-ticket clients are dropping off. If there's a fit, we'll show you the exact architecture needed to fix it."
							}
						},
						{
							"@type": "Question",
							name: "Is the audit really free?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "Yes. We lead with value. The audit provides you with an actionable breakdown of your funnel leaks before you ever commit to a sales conversation."
							}
						},
						{
							"@type": "Question",
							name: "Do you guarantee clients or revenue?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "No. We guarantee a world-class acquisition ecosystem designed for high-ticket conversion. Your offer and sales ability ultimately close the deal."
							}
						}
					]
				})
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$1.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$2
	}),
	CoachClientAcquisitionRoute: Route.update({
		id: "/coach-client-acquisition",
		path: "/coach-client-acquisition",
		getParentRoute: () => Route$2
	})
};
var routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
