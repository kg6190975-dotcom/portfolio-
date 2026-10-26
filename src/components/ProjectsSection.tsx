import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project, Language, ThemeMode } from '../types/portfolio';
import { uiTranslations } from '../data/portfolioData';
import { Building2, Factory, TrendingUp, ArrowRight, Eye } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  lang: Language;
  theme: ThemeMode;
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  lang,
  theme,
  onSelectProject,
}) => {
  const [filter, setFilter] = useState<string>('all');
  const t = uiTranslations[lang].projects;

  const iconMap: Record<string, React.ElementType> = {
    Building2,
    Factory,
    TrendingUp,
  };

  const projectColorThemes: Record<
    string,
    { gradient: string; accentColor: string; badge: string; iconBg: string; buttonColor: string }
  > = {
    'nexora-future-workplace': {
      gradient: 'from-red-950/80 via-[#0F172A] to-red-600/30',
      accentColor: 'text-red-400',
      badge: 'border-red-500/40 text-red-400',
      iconBg: 'bg-red-500/20 text-red-400 border-red-500/30',
      buttonColor: 'text-red-400 hover:text-red-300',
    },
    'amul-dairy-operations': {
      gradient: 'from-blue-950/80 via-[#0F172A] to-blue-600/30',
      accentColor: 'text-blue-400',
      badge: 'border-blue-500/40 text-blue-400',
      iconBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      buttonColor: 'text-blue-400 hover:text-blue-300',
    },
    'case-o-mania-analysis': {
      gradient: 'from-yellow-950/80 via-[#0F172A] to-yellow-600/30',
      accentColor: 'text-yellow-400',
      badge: 'border-yellow-400/40 text-yellow-400',
      iconBg: 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30',
      buttonColor: 'text-yellow-400 hover:text-yellow-300',
    },
  };

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800/60">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left"
      >
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-red-400">
              {t.kicker}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A] mt-2 leading-tight">
            {t.title}
          </h2>
          <p className="mt-2 text-sm text-slate-400 font-sans max-w-xl">
            {t.subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-lg transition-all ${
              filter === 'all'
                ? 'bg-gradient-to-r from-red-600 to-blue-600 text-white font-semibold shadow-md'
                : theme === 'dark'
                ? 'bg-[#111827] text-slate-400 hover:text-white border border-slate-800'
                : 'bg-slate-100 text-slate-700 hover:text-black border border-slate-200'
            }`}
          >
            {t.filterAll}
          </button>
          <button
            onClick={() => setFilter('workplace')}
            className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-lg transition-all ${
              filter === 'workplace'
                ? 'bg-red-600 text-white font-semibold shadow-md'
                : theme === 'dark'
                ? 'bg-[#111827] text-slate-400 hover:text-white border border-slate-800'
                : 'bg-slate-100 text-slate-700 hover:text-black border border-slate-200'
            }`}
          >
            {t.filterWorkplace}
          </button>
          <button
            onClick={() => setFilter('operations')}
            className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-lg transition-all ${
              filter === 'operations'
                ? 'bg-blue-600 text-white font-semibold shadow-md'
                : theme === 'dark'
                ? 'bg-[#111827] text-slate-400 hover:text-white border border-slate-800'
                : 'bg-slate-100 text-slate-700 hover:text-black border border-slate-200'
            }`}
          >
            {t.filterOperations}
          </button>
          <button
            onClick={() => setFilter('analytics')}
            className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-lg transition-all ${
              filter === 'analytics'
                ? 'bg-yellow-500 text-black font-semibold shadow-md'
                : theme === 'dark'
                ? 'bg-[#111827] text-slate-400 hover:text-white border border-slate-800'
                : 'bg-slate-100 text-slate-700 hover:text-black border border-slate-200'
            }`}
          >
            {t.filterAnalytics}
          </button>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        <AnimatePresence>
          {filteredProjects.map((project, pIdx) => {
            const Icon = iconMap[project.iconName] || Building2;
            const themeCfg = projectColorThemes[project.id] || {
              gradient: 'from-blue-950 via-[#0F172A] to-blue-600/30',
              accentColor: 'text-blue-400',
              badge: 'border-blue-500/40 text-blue-400',
              iconBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
              buttonColor: 'text-blue-400 hover:text-blue-300',
            };

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: pIdx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 group ${
                  theme === 'dark'
                    ? 'border-slate-800/80 bg-[#111827]/80 hover:border-slate-600 hover:shadow-2xl hover:shadow-black/60'
                    : 'border-slate-200 bg-white hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10'
                }`}
              >
                {/* Card visual banner */}
                <div
                  className={`relative h-44 w-full bg-gradient-to-br ${themeCfg.gradient} p-6 flex flex-col justify-between border-b border-slate-800/60 overflow-hidden`}
                >
                  <div
                    className="absolute inset-0 opacity-15 pointer-events-none"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)',
                      backgroundSize: '18px 18px',
                    }}
                  />

                  <div className="z-10 flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl ${themeCfg.iconBg} border flex items-center justify-center backdrop-blur-md group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-300 bg-black/60 px-2.5 py-1 rounded-full border border-slate-700/60">
                      {project.date}
                    </span>
                  </div>

                  <div className="z-10">
                    <span className={`text-xs font-mono uppercase tracking-wider font-semibold ${themeCfg.accentColor}`}>
                      {project.organization}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A] group-hover:text-blue-400 transition-colors">
                      {project.title[lang]}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-400 dark:text-slate-400 text-slate-600 line-clamp-3 font-sans leading-relaxed">
                      {project.description[lang]}
                    </p>
                  </div>

                  {/* Tags & Action Button */}
                  <div className="mt-6 pt-4 border-t border-slate-800/60">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800/40 border border-slate-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectProject(project)}
                      className={`w-full flex items-center justify-between text-xs font-mono uppercase tracking-wider ${themeCfg.buttonColor} py-2 border-t border-slate-800/50 transition-colors cursor-pointer`}
                    >
                      <span className="flex items-center gap-1.5 font-semibold">
                        <Eye className="w-3.5 h-3.5" />
                        {t.viewCaseStudy}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
