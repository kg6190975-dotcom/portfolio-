import React, { useEffect } from 'react';
import { X, FileCode, Image, FileText, Globe, CheckCircle2 } from 'lucide-react';
import { ThemeMode } from '../types/portfolio';

interface ConfigGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

export const ConfigGuideModal: React.FC<ConfigGuideModalProps> = ({
  isOpen,
  onClose,
  theme,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="guide-title"
    >
      <div
        className={`relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border p-6 sm:p-8 text-left shadow-2xl ${
          theme === 'dark'
            ? 'bg-[#0F172A] border-slate-800 text-[#F8FAFC]'
            : 'bg-white border-slate-200 text-[#0F172A]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close Guide"
          className="absolute top-5 right-5 p-2 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-red-400 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-yellow-400 mb-2">
          <FileCode className="w-4 h-4" />
          <span>Developer & Portfolio Setup Guide</span>
        </div>

        <h2 id="guide-title" className="text-xl sm:text-2xl font-serif font-bold">
          Customizing Your Portfolio
        </h2>

        <p className="mt-2 text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
          This portfolio is structured around a central configuration file at{' '}
          <code className="text-blue-400 font-mono px-1 py-0.5 rounded bg-black/40">
            src/data/portfolioData.ts
          </code>
          . All content, projects, translations, and assets can be adjusted in one place.
        </p>

        <div className="mt-6 space-y-4 text-xs sm:text-sm">
          {/* Item 1: Resume PDF */}
          <div className="p-4 rounded-xl border border-slate-800 bg-[#0B0F19]/60">
            <div className="flex items-center gap-2 font-serif font-bold text-base text-blue-400 mb-1">
              <FileText className="w-4 h-4" />
              <span>1. Resume File Path</span>
            </div>
            <p className="text-slate-300">
              The active verified resume is located at{' '}
              <code className="font-mono text-xs text-slate-200">
                /public/assets/aistudio/Khushi_Gupta_Resume_db3fa92b.pdf
              </code>
              . To replace it, place your new PDF inside{' '}
              <code className="font-mono text-xs text-slate-200">public/</code> and update{' '}
              <code className="font-mono text-xs text-blue-400">resumePdfPath</code> in{' '}
              <code className="font-mono text-xs text-blue-400">portfolioData.ts</code>.
            </p>
          </div>

          {/* Item 2: Portrait Photo */}
          <div className="p-4 rounded-xl border border-slate-800 bg-[#0B0F19]/60">
            <div className="flex items-center gap-2 font-serif font-bold text-base text-red-400 mb-1">
              <Image className="w-4 h-4" />
              <span>2. Adding a Portrait Photo</span>
            </div>
            <p className="text-slate-300">
              Currently an artistic Red-Blue-Yellow geometric monogram avatar is displayed by default to respect authenticity.
              To display a real photograph, set{' '}
              <code className="font-mono text-xs text-red-400">portraitUrl: '/assets/my-photo.jpg'</code> in{' '}
              <code className="font-mono text-xs text-red-400">primaryProfile</code>.
            </p>
          </div>

          {/* Item 3: Social & Contact */}
          <div className="p-4 rounded-xl border border-slate-800 bg-[#0B0F19]/60">
            <div className="flex items-center gap-2 font-serif font-bold text-base text-yellow-400 mb-1">
              <Globe className="w-4 h-4" />
              <span>3. Contact & Social Links</span>
            </div>
            <p className="text-slate-300">
              Configure <code className="font-mono text-xs text-slate-200">email</code>,{' '}
              <code className="font-mono text-xs text-slate-200">phone</code>,{' '}
              <code className="font-mono text-xs text-slate-200">linkedin</code>, and optional{' '}
              <code className="font-mono text-xs text-slate-200">github</code> or WhatsApp in{' '}
              <code className="font-mono text-xs text-yellow-400">primaryProfile</code>.
            </p>
          </div>

          {/* Item 4: Bilingual System */}
          <div className="p-4 rounded-xl border border-slate-800 bg-[#0B0F19]/60">
            <div className="flex items-center gap-2 font-serif font-bold text-base text-blue-400 mb-1">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>4. English & Hindi Bilingual Support</span>
            </div>
            <p className="text-slate-300">
              All labels, headlines, project descriptions, and achievements contain paired{' '}
              <code className="font-mono text-xs text-slate-200">en</code> and{' '}
              <code className="font-mono text-xs text-slate-200">hi</code> dictionaries. Toggling the language in the navbar immediately switches the entire portfolio content.
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold transition-colors"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
