import { Menu, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-yellow-400 via-amber-300 to-orange-400 ring-1 ring-white/10 shadow-[0_0_30px_rgba(234,179,8,0.35)] flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-slate-900" />
          </div>
          <div className="leading-tight">
            <div className="text-white font-semibold tracking-wide group-hover:opacity-90">Luxit</div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-amber-200/80">Brand & Web Studio</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <button className="md:hidden text-slate-200/80" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>

        <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-yellow-400 via-amber-300 to-orange-400 text-slate-900 font-medium px-4 py-2 ring-1 ring-white/20 shadow-[0_10px_30px_rgba(234,179,8,0.25)] hover:brightness-95 transition">
          Start a project
        </a>
      </div>
    </header>
  );
}
