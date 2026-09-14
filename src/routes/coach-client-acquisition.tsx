import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ReframeSection } from "@/components/sections/reframe-section";
import { SystemSection } from "@/components/sections/system-section";
import { AuditCtaSection } from "@/components/sections/audit-cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { ExitIntentPopup } from "@/components/exit-intent-popup";

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
              name: "Do I need a massive audience for this to work?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. This system is designed to monetize the attention you already have, turning passive lurkers into booked calls without spending a dime on ads.",
              },
            },
            {
              "@type": "Question",
              name: "Do I need a complicated funnel?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. Complexity kills conversions. We build lean, high-performing architectures tailored specifically to patch the exact revenue leaks in your current client journey.",
              },
            },
            {
              "@type": "Question",
              name: "Is this just a website or landing page?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. A standalone website won't save your business. We engineer the complete end-to-end acquisition ecosystem—from lead capture to calendar injection.",
              },
            },
            {
              "@type": "Question",
              name: "What happens after the free audit?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We'll map out your exact acquisition flow and pinpoint where high-ticket clients are dropping off. If there's a fit, we'll show you the exact architecture needed to fix it.",
              },
            },
            {
              "@type": "Question",
              name: "Is the audit really free?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We lead with value. The audit provides you with an actionable breakdown of your funnel leaks before you ever commit to a sales conversation.",
              },
            },
            {
              "@type": "Question",
              name: "Do you guarantee clients or revenue?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. We guarantee a world-class acquisition ecosystem designed for high-ticket conversion. Your offer and sales ability ultimately close the deal.",
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
        <TestimonialSection />
        <AuditCtaSection />
        <FaqSection />
      </main>
      <SiteFooter />
      <ExitIntentPopup />
    </div>
  );
}
