const steps = [
  {
    k: 'discover',
    title: 'Discover',
    desc: 'Workshops to clarify goals, audience and success metrics.'
  },
  {
    k: 'design',
    title: 'Design',
    desc: 'Exploration → systems → detailed screens and responsive states.'
  },
  {
    k: 'build',
    title: 'Build',
    desc: 'Accessible, component‑driven development with strong foundations.'
  },
  {
    k: 'launch',
    title: 'Launch',
    desc: 'QA, analytics and monitoring to ensure a smooth go‑live.'
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Process</h2>
          <p className="mt-3 text-slate-300">A collaborative approach, from idea to impact.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={s.k} className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur">
              <div className="text-6xl font-bold text-white/10 leading-none">{String(idx+1).padStart(2,'0')}</div>
              <h3 className="mt-6 text-white font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
