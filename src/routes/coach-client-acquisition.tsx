import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ReframeSection } from "@/components/sections/reframe-section";
import { SystemSection } from "@/components/sections/system-section";
import { AuditCtaSection } from "@/components/sections/audit-cta-section";
import { FaqSection } from "@/components/sections/faq-section";

const PAGE_URL = "https://duxio.com/coach-client-acquisition";

export const Route = createFileRoute("/coach-client-acquisition")({
  head: () => ({
    meta: [
      { title: "Duxio | Client Acquisition Systems for Coaches" },
      {
        name: "description",
        content:
          "Duxio helps coaches turn existing attention and leads into qualified conversations, booked calls, and clients through client acquisition systems, funnels, automation, nurturing, and follow-up.",
      },
      { property: "og:title", content: "Duxio | Client Acquisition Systems for Coaches" },
      {
        property: "og:description",
        content:
          "Turn your existing attention and leads into more conversations, qualified appointments, and clients. Get your free coach funnel audit.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Duxio",
          url: "https://duxio.com",
          description:
            "Duxio helps coaches turn existing attention and leads into qualified conversations, booked calls, and clients through client acquisition systems.",
          slogan: "We build the system around the business.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: "The 5-Part Client Acquisition System for Coaches",
          description:
            "Free training: learn the 5 places coaches lose potential clients and how to build a simple system that turns attention and leads into qualified conversations and booked calls.",
          thumbnailUrl: `${PAGE_URL}/vsl-thumbnail.jpg`,
          uploadDate: "2026-01-01",
          duration: "PT8M",
          contentUrl: PAGE_URL,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Do I need more followers before this works?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Not necessarily. The system is designed to help coaches make better use of existing attention and leads.",
              },
            },
            {
              "@type": "Question",
              name: "Do I need a complicated funnel?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. The system should match the actual gap in your client journey.",
              },
            },
            {
              "@type": "Question",
              name: "Is this just a website or funnel?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. Duxio looks at the entire client acquisition journey.",
              },
            },
            {
              "@type": "Question",
              name: "What happens after the audit?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You receive an analysis of potential gaps. If there is a fit, you can review the recommended system with Duxio.",
              },
            },
            {
              "@type": "Question",
              name: "Is the audit really free?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The audit is designed to provide useful information before any sales conversation.",
              },
            },
            {
              "@type": "Question",
              name: "Do you guarantee clients or revenue?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. We never make guaranteed-result claims. We can explain potential economic value, but we do not promise outcomes.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: CoachClientAcquisition,
});

function CoachClientAcquisition() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ReframeSection />
        <SystemSection />
        <AuditCtaSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  );
}
