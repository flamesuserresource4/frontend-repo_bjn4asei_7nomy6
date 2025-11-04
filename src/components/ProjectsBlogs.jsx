import React from 'react';
import { ExternalLink, Github, BookOpen, FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: 'Neon UI Kit',
    desc: 'A sleek component library for building modern dashboards.',
    tags: ['React', 'Tailwind', 'Radix'],
    link: '#',
    repo: '#'
  },
  {
    title: 'Realtime Chat',
    desc: 'End‑to‑end encrypted chat app with typing indicators and presence.',
    tags: ['FastAPI', 'WebSockets', 'MongoDB'],
    link: '#',
    repo: '#'
  },
  {
    title: 'AI Code Helper',
    desc: 'Inline coding assistant that suggests refactors and tests.',
    tags: ['TypeScript', 'LLM', 'Vite'],
    link: '#',
    repo: '#'
  }
];

const posts = [
  {
    title: '10 Tips for Lightning‑Fast React Apps',
    date: 'Aug 2024',
    link: '#'
  },
  {
    title: 'Design Systems that Scale with Your Team',
    date: 'May 2024',
    link: '#'
  },
  {
    title: 'From Idea to MVP in a Weekend',
    date: 'Jan 2024',
    link: '#'
  }
];

export default function ProjectsBlogs() {
  return (
    <section id="projects" className="w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Projects</h2>
            <p className="mt-2 max-w-2xl text-slate-400">Selected work that balances craft, performance, and user delight.</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-900">
            <FolderGit2 className="h-4 w-4" /> See all
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-emerald-500/40 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.2)]">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <div className="flex items-center gap-2">
                  <a href={p.repo} aria-label="GitHub" className="rounded-md p-1 text-slate-400 transition hover:text-white">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href={p.link} aria-label="Live" className="rounded-md p-1 text-slate-400 transition hover:text-white">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <p className="mb-4 text-sm text-slate-300">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md bg-slate-800/80 px-2.5 py-1 text-xs text-slate-300">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div id="blogs" className="mt-16 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Blog</h2>
          <a href="#" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white">
            <BookOpen className="h-4 w-4" /> Read more
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <a key={post.title} href={post.link} className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-cyan-400/40">
              <p className="text-xs text-slate-400">{post.date}</p>
              <h3 className="mt-1 text-base font-semibold text-white group-hover:text-cyan-300">{post.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
