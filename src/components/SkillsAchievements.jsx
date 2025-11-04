import React from 'react';
import { Code2, Sparkles, Star, Cpu, Boxes, Wrench } from 'lucide-react';

const skills = [
  { icon: <Code2 className="h-5 w-5 text-emerald-400" />, title: 'Frontend', items: ['React', 'TypeScript', 'Tailwind', 'Vite'] },
  { icon: <Cpu className="h-5 w-5 text-emerald-400" />, title: 'Backend', items: ['Node.js', 'FastAPI', 'PostgreSQL', 'MongoDB'] },
  { icon: <Boxes className="h-5 w-5 text-emerald-400" />, title: 'Cloud & DevOps', items: ['Docker', 'CI/CD', 'Vercel', 'AWS'] },
  { icon: <Wrench className="h-5 w-5 text-emerald-400" />, title: 'Tooling', items: ['Git', 'Playwright', 'Vitest', 'ESLint'] },
];

const achievements = [
  { icon: <Star className="h-5 w-5 text-yellow-400" />, title: 'Open Source', desc: 'Contributor to popular OSS projects with thousands of downloads.' },
  { icon: <Sparkles className="h-5 w-5 text-cyan-300" />, title: 'Hackathon Winner', desc: 'Won 1st place for building an AI-powered web app in 24 hours.' },
  { icon: <Star className="h-5 w-5 text-yellow-400" />, title: 'Speaker', desc: 'Spoke at local meetups on React performance and UX.' },
];

export default function SkillsAchievements() {
  return (
    <section id="skills" className="relative w-full bg-slate-950 py-20 text-slate-200">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(6,182,212,0.08),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Skills & Achievements</h2>
          <p className="mt-2 max-w-2xl text-slate-400">A blend of engineering fundamentals and product sense — here’s where I’m most effective.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-xl">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
              <Code2 className="h-5 w-5 text-emerald-400" /> Core Skills
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {skills.map((s) => (
                <div key={s.title} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                  <div className="mb-2 flex items-center gap-2 font-semibold text-white">
                    {s.icon}
                    {s.title}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <span key={item} className="rounded-md bg-slate-800/80 px-2.5 py-1 text-xs text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-xl">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
              <Sparkles className="h-5 w-5 text-cyan-300" /> Achievements
            </h3>
            <ul className="space-y-4">
              {achievements.map((a) => (
                <li key={a.title} className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                  {a.icon}
                  <div>
                    <p className="font-semibold text-white">{a.title}</p>
                    <p className="text-sm text-slate-400">{a.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
