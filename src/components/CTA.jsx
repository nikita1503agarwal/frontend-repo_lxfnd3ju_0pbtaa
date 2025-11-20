export default function CTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-10 sm:p-14 backdrop-blur">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Tell us about your project</h2>
            <p className="mt-3 text-slate-300">Two minutes is all it takes. We’ll follow up within one business day.</p>

            <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="col-span-1 rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 ring-1 ring-white/10 focus:ring-amber-300/50 outline-none" placeholder="Your name" />
              <input className="col-span-1 rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 ring-1 ring-white/10 focus:ring-amber-300/50 outline-none" placeholder="Work email" />
              <input className="sm:col-span-2 rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 ring-1 ring-white/10 focus:ring-amber-300/50 outline-none" placeholder="Company / Website" />
              <textarea rows={4} className="sm:col-span-2 rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 ring-1 ring-white/10 focus:ring-amber-300/50 outline-none" placeholder="What are you looking to build?" />
              <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
                <p className="text-xs text-slate-400">By submitting, you agree to our privacy policy.</p>
                <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 via-amber-300 to-orange-400 text-slate-900 font-medium px-5 py-3 ring-1 ring-white/20 shadow-[0_10px_30px_rgba(234,179,8,0.25)] hover:brightness-95 transition">
                  Request proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
