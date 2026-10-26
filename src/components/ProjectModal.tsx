import React, { useEffect } from 'react';
import { X, CheckCircle, Calendar, Building2 } from 'lucide-react';
import { Project, Language, ThemeMode } from '../types/portfolio';
import { uiTranslations } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  lang: Language;
  theme: ThemeMode;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  lang,
  theme,
  onClose,
}) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  const t = uiTranslations[lang].projects;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border p-6 sm:p-8 text-left transition-all shadow-2xl ${
          theme === 'dark'
            ? 'bg-[#0F172A] border-slate-800 text-[#F8FAFC]'
            : 'bg-white border-slate-200 text-[#0F172A]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label={t.closeModal}
          className="absolute top-5 right-5 p-2 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-red-400 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-blue-400 mb-2">
          <span className="flex items-center gap-1">
            <Building2 className="w-3.5 h-3.5" />
            {project.organization}
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="flex items-center gap-1 text-slate-400">
            <Calendar className="w-3.5 h-3.5" />
            {project.date}
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="uppercase text-yellow-400 font-semibold">{project.role[lang]}</span>
        </div>

        {/* Title & Tagline */}
        <h2 id="modal-title" className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
          {project.title[lang]}
        </h2>
        <p className="mt-2 text-sm text-red-400 font-medium font-sans">
          {project.tagline[lang]}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Content Body */}
        <div className="mt-8 space-y-6 text-sm text-slate-300 dark:text-slate-300 text-slate-700 font-sans leading-relaxed">
          {/* Context */}
          <div className="p-4 rounded-xl border border-slate-800 bg-[#0B0F19]/70">
            <h3 className="text-xs uppercase tracking-wider font-mono text-yellow-400 mb-1 font-semibold">
              {t.context}
            </h3>
            <p>{project.details.context[lang]}</p>
          </div>

          {/* Contributions */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-mono text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A] font-semibold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>{t.keyLearnings}</span>
            </h3>
            <ul className="space-y-2.5">
              {project.details.contributions[lang].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcomes */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-mono text-[#F8FAFC] dark:text-[#F8FAFC] text-[#0F172A] font-semibold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>{t.outcomes}</span>
            </h3>
            <ul className="space-y-2.5">
              {project.details.outcomes[lang].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Methodology if available */}
          {project.details.methodology && (
            <div className="pt-2 text-xs font-mono text-slate-400">
              <span className="text-yellow-400 font-semibold">Methodology: </span>
              {project.details.methodology[lang]}
            </div>
          )}
        </div>

        {/* Footer controls */}
        <div className="mt-8 pt-5 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">
            Verified Project Entry
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold transition-colors"
          >
            {t.closeModal}
          </button>
        </div>
      </div>
    </div>
  );
};
