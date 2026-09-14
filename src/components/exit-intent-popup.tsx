import { useState, useEffect } from "react";
import { ArrowRight, ShieldCheck, Download } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse moves out of the top of the viewport
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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md border-none bg-transparent p-0 shadow-none">
        <DialogTitle className="sr-only">Exit Intent Offer</DialogTitle>
        <DialogDescription className="sr-only">Get the free 1-Page Funnel Checklist before you leave.</DialogDescription>
        
        <div className="relative z-10 w-full overflow-hidden rounded-2xl border border-line bg-surface p-8 shadow-2xl">
          <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-primary/5 opacity-50" />
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
              <Download className="h-7 w-7 text-accent" />
            </div>
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground">
              Leaving so soon?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Before you go, download the <strong>1-Page Funnel Checklist</strong>. It reveals the exact architecture we use to patch 90% of revenue leaks in high-ticket coaching businesses.
            </p>
          </div>

          <form className="mt-8 space-y-4" onSubmit={(e) => {
             e.preventDefault();
             setOpen(false); 
          }}>
            <div>
              <input
                type="email"
                required
                placeholder="Enter your best email..."
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-gradient px-4 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:opacity-90"
            >
              Send Me The Checklist
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-5 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-green-500/80" />
            <span>100% free. No spam.</span>
          </div>
          
          <button 
            type="button"
            onClick={() => setOpen(false)}
            className="mt-6 block w-full text-center text-xs text-muted-foreground hover:text-foreground hover:underline"
          >
            No thanks, I'll figure it out myself
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
