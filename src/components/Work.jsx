export default function Work() {
  const items = [
    {
      logo: 'https://assets.vibeui.xyz/logos/stripe.svg',
      title: 'Stripe‑style SaaS redesign',
      tags: ['Identity', 'Web Design', 'Build']
    },
    {
      logo: 'https://assets.vibeui.xyz/logos/wise.svg',
      title: 'Fintech onboarding flow',
      tags: ['UX', 'Design System']
    },
    {
      logo: 'https://assets.vibeui.xyz/logos/linear.svg',
      title: 'Docs & marketing system',
      tags: ['Web', 'Docs', 'SEO']
    },
  ];

  return (
    <section id="work" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Selected work</h2>
          <p className="mt-3 text-slate-300">A glimpse at what we build. More available on request.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur hover:border-white/20 transition">
              <div className="flex items-center gap-3">
                <img src={it.logo} alt="logo" className="h-8 w-8 object-contain" />
                <h3 className="text-white font-medium">{it.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {it.tags.map(t => (
                  <span key={t} className="text-xs rounded-full px-2 py-1 bg-white/10 text-slate-200 ring-1 ring-white/10">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
