import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="intro" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-6 pt-28 md:pt-36">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-700/70 bg-slate-800/40 px-4 py-1 text-xs text-slate-300 backdrop-blur">
          <Rocket className="h-3.5 w-3.5 text-emerald-400" />
          Interactive 3D Portfolio
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl leading-tight">
          Hi, I’m <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Your Name</span>
        </h1>
        <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
          A developer focused on crafting delightful digital experiences. I build polished web apps, delightful interactions, and scalable systems.
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60">
            View Projects
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/40 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-slate-800">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
