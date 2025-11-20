import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/40 to-slate-950/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20 backdrop-blur">
            <div className="h-1.5 w-1.5 rounded-full bg-amber-300 animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-slate-100">New: Brand & Web Design by Luxit</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold text-white tracking-tight">
            Polished brands and high‑performing websites
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            We craft timeless identities and fast, conversion‑focused websites for fintech, SaaS and modern digital companies.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 via-amber-300 to-orange-400 text-slate-900 font-medium px-5 py-3 ring-1 ring-white/20 shadow-[0_10px_30px_rgba(234,179,8,0.25)] hover:brightness-95 transition">
              Start a project
            </a>
            <a href="#work" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-white/10 text-white font-medium px-5 py-3 ring-1 ring-white/20 backdrop-blur hover:bg-white/15 transition">
              See our work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
