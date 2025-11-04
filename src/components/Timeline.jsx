import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const timeline = [
  {
    year: '2021 — Present',
    role: 'Senior Frontend Engineer',
    place: 'TechCorp',
    desc: 'Leading UI architecture, building design systems, and mentoring developers.'
  },
  {
    year: '2019 — 2021',
    role: 'Full‑Stack Developer',
    place: 'Startup X',
    desc: 'Shipped multiple products from MVP to scale with a small, fast team.'
  },
  {
    year: '2016 — 2019',
    role: 'Computer Science B.Sc.',
    place: 'University Y',
    desc: 'Focused on human‑computer interaction and distributed systems.'
  }
];

export default function Timeline() {
  return (
    <section id="journey" className="w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Journey</h2>
          <p className="mt-2 max-w-2xl text-slate-400">A snapshot of my path so far — learning, building, and shipping.</p>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-emerald-500/60 via-slate-700 to-cyan-500/60 md:left-1/2" />
          <ul className="space-y-8">
            {timeline.map((t, i) => (
              <li key={t.year} className="relative grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className={`md:col-start-1 ${i % 2 === 0 ? 'md:pr-10' : 'md:col-start-2 md:pl-10'}`}>
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                    <div className="mb-1 flex items-center gap-2 text-sm text-slate-400">
                      <Calendar className="h-4 w-4 text-emerald-400" /> {t.year}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{t.role}</h3>
                    <div className="mb-2 flex items-center gap-2 text-sm text-slate-400">
                      <MapPin className="h-4 w-4 text-cyan-300" /> {t.place}
                    </div>
                    <p className="text-slate-300">{t.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
