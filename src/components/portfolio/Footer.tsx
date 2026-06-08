import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 border-t border-white/5">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-display font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </span>
          <span className="text-gradient">Jehanzeb Ali</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Jehanzeb Ali — Senior Full Stack Developer & AI Solutions Architect.
        </p>
      </div>
    </footer>
  );
}
