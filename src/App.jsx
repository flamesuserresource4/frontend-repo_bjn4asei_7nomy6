import React from 'react';
import Hero from './components/Hero';
import SkillsAchievements from './components/SkillsAchievements';
import Timeline from './components/Timeline';
import ProjectsBlogs from './components/ProjectsBlogs';

function Navbar() {
  const links = [
    { href: '#intro', label: 'Intro' },
    { href: '#skills', label: 'Skills' },
    { href: '#journey', label: 'Journey' },
    { href: '#projects', label: 'Projects' },
    { href: '#blogs', label: 'Blogs' },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-800/70 bg-slate-900/60 p-2 backdrop-blur">
          <a href="#intro" className="flex items-center gap-2 text-sm font-semibold text-white">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400" />
            My Portfolio
          </a>
          <nav className="hidden items-center gap-5 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-slate-300 transition hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="rounded-lg bg-emerald-500 px-3 py-1.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-emerald-400">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-slate-400">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <SkillsAchievements />
        <Timeline />
        <ProjectsBlogs />
      </main>
      <Footer />
    </div>
  );
}
