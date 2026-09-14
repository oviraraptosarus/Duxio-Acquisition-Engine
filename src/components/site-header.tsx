"use client";

import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Free Training", href: "#vsl" },
  { label: "The System", href: "#system" },
  { label: "FAQ", href: "#faq" },
  { label: "Audit", href: "#audit" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-3 z-50 px-4 sm:top-5 sm:px-8">
      <div
        className={`mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border px-4 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "border-line bg-background/65 shadow-2xl backdrop-blur-xl"
            : "border-transparent bg-background/0"
        }`}
      >
        <Link to="/coach-client-acquisition" className="flex items-center gap-3" aria-label="Duxio home">
          {/* Icon with gradient mask */}
          <div className="relative flex items-center justify-center">
            <img src="/logo-icon.png" alt="" className="h-8 w-auto opacity-0" />
            <div 
              className="absolute inset-0 bg-brand-gradient"
              style={{ 
                WebkitMaskImage: 'url(/logo-icon.png)', 
                WebkitMaskSize: 'contain', 
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center' 
              }} 
            />
          </div>
          {/* Text with gradient mask */}
          <div className="relative flex items-center justify-center">
            <img src="/logo-text.png" alt="" className="h-6 w-auto opacity-0" />
            <div 
              className="absolute inset-0 bg-brand-gradient"
              style={{ 
                WebkitMaskImage: 'url(/logo-text.png)', 
                WebkitMaskSize: 'contain', 
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center' 
              }} 
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-all hover:text-brand-gradient hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#audit"
            className="inline-flex items-center rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all hover:scale-105 hover:opacity-90 hover:shadow-[0_0_20px_rgba(var(--accent),0.5)]"
          >
            Get Your Custom Breakdown
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {open && (
        <div className="absolute left-4 right-4 top-[4.5rem] overflow-hidden rounded-2xl border border-line bg-background/95 shadow-2xl backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col gap-1 p-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface hover:text-brand-gradient"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#audit"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-brand-gradient px-5 py-3 text-sm font-semibold text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:opacity-90"
            >
              Get Your Custom Breakdown
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
