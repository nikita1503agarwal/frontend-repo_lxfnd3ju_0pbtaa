import { PenTool, Palette, Code2, Rocket, Gauge } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Brand Strategy",
    desc: "Positioning, messaging and visual systems that scale with your business.",
  },
  {
    icon: Palette,
    title: "Identity Design",
    desc: "Logos, typography, color and guidelines to keep everything consistent.",
  },
  {
    icon: Code2,
    title: "Web Design & Dev",
    desc: "Modern, accessible sites built with performance and SEO best practices.",
  },
  {
    icon: Rocket,
    title: "Launch & Growth",
    desc: "Analytics, A/B tests and ongoing optimization to improve conversions.",
  },
  {
    icon: Gauge,
    title: "Speed & SEO",
    desc: "Lighthouse‑friendly, fast experiences tuned for Core Web Vitals.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Capabilities</h2>
          <p className="mt-3 text-slate-300">From naming to launch. Everything you need to go to market with confidence.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur hover:border-white/20 transition">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-yellow-400 via-amber-300 to-orange-400 ring-1 ring-white/20 flex items-center justify-center mb-4 shadow-[0_10px_30px_rgba(234,179,8,0.2)]">
                <Icon className="h-5 w-5 text-slate-900" />
              </div>
              <h3 className="text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
