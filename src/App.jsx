import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Work from './components/Work';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="fixed inset-0 -z-0 pointer-events-none bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(234,179,8,0.12),transparent_60%)]" />
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Work />
      <CTA />
      <footer className="py-10 text-center text-sm text-slate-400">© {new Date().getFullYear()} Luxit. All rights reserved.</footer>
    </div>
  )
}

export default App
