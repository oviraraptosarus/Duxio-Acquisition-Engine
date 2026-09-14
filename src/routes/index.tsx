import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * The Duxio VSL landing page lives at /coach-client-acquisition (the canonical
 * SEO slug). The root path "/" redirects there so any legacy/home traffic lands
 * on the correct page.
 */
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/coach-client-acquisition" });
  },
});
