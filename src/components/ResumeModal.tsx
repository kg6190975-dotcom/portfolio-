import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { Language, ThemeMode } from '../types/portfolio';
import { uiTranslations } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfPath: string;
  lang: Language;
  theme: ThemeMode;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  pdfPath,
  lang,
  theme,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const t = uiTranslations[lang].resumeModal;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t.title}
    >
      <div
        className={`relative w-full max-w-5xl h-[92vh] flex flex-col rounded-3xl border overflow-hidden shadow-2xl transition-all ${
          theme === 'dark'
            ? 'bg-[#0F172A] border-slate-800 text-[#F8FAFC]'
            : 'bg-white border-slate-200 text-[#0F172A]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0B0F19]/90">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base sm:text-lg leading-tight">
                {t.title}
              </h3>
              <p className="text-xs font-mono text-slate-400">
                {t.subtitle} · Verified Official Document
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Download button in Crimson Red */}
            <a
              href={pdfPath}
              download="Khushi_Gupta_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.download}</span>
            </a>

            {/* Open in full tab in Electric Blue */}
            <a
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-blue-500/40 text-xs font-mono text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-colors"
              title={t.openTab}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.openTab}</span>
            </a>

            {/* Close */}
            <button
              onClick={onClose}
              aria-label={t.close}
              className="p-1.5 rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:border-red-400 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 bg-slate-900 relative">
          <iframe
            src={`${pdfPath}#toolbar=1&navpanes=0`}
            title="Resume PDF Document"
            className="w-full h-full border-0"
          />

          {/* Quick Action bar at bottom */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-slate-950/90 backdrop-blur-md border border-slate-700 flex items-center gap-4 text-xs font-mono text-slate-300 shadow-xl">
            <span className="flex items-center gap-1.5 text-blue-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Official Resume Loaded
            </span>
            <span className="text-slate-600">|</span>
            <a
              href={pdfPath}
              download="Khushi_Gupta_Resume.pdf"
              className="text-yellow-400 hover:underline flex items-center gap-1 font-semibold"
            >
              <Download className="w-3 h-3" />
              Direct Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
