import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, AlertTriangle, Rocket, GitBranch, Settings, CheckCircle2 } from 'lucide-react';
import { ThemeMode } from '../types/portfolio';

interface DeploymentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

export const DeploymentGuideModal: React.FC<DeploymentGuideModalProps> = ({
  isOpen,
  onClose,
  theme,
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyCode = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const gitCommands = `# 1. Commit and push your latest code to GitHub:
git add .
git commit -m "Configure GitHub Actions deployment and relative base paths"
git push origin main`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="deploy-guide-title"
    >
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border p-6 sm:p-8 text-left shadow-2xl transition-all ${
          theme === 'dark'
            ? 'bg-[#0F172A] border-slate-800 text-[#F8FAFC]'
            : 'bg-white border-slate-200 text-[#0F172A]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Deployment Guide"
          className="absolute top-5 right-5 p-2 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-red-400 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-400 mb-2 font-semibold">
          <Rocket className="w-4 h-4" />
          <span>Fix GitHub Pages 404 & Deployment Guide</span>
        </div>

        <h2 id="deploy-guide-title" className="text-xl sm:text-2xl font-serif font-bold">
          Resolving the "404 There isn't a GitHub Pages site here"
        </h2>

        {/* Cause Banner */}
        <div className="mt-4 p-4 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
          <div className="text-xs sm:text-sm text-slate-300">
            <strong className="text-yellow-400 font-semibold block mb-0.5">Why this 404 happens:</strong>
            GitHub Pages requires your repository's Pages setting to be activated, and Vite needs relative asset paths (<code className="text-yellow-300 font-mono">base: './'</code>), which we have now configured!
          </div>
        </div>

        {/* Steps */}
        <div className="mt-6 space-y-5 text-xs sm:text-sm">
          {/* Step 1: Enable GitHub Actions in Settings */}
          <div className="p-5 rounded-2xl border border-slate-800 bg-[#0B0F19]/70">
            <div className="flex items-center gap-2 font-serif font-bold text-base text-blue-400 mb-2">
              <Settings className="w-4 h-4" />
              <span>Step 1: Enable GitHub Pages in your Repository</span>
            </div>
            <ol className="list-decimal list-inside space-y-2 text-slate-300">
              <li>Open your repository on GitHub (<code className="font-mono text-slate-200">github.com/username/repository</code>).</li>
              <li>Click the <strong className="text-white">Settings</strong> tab at the top.</li>
              <li>On the left sidebar, click <strong className="text-white">Pages</strong>.</li>
              <li>
                Under <strong className="text-yellow-400">Build and deployment &gt; Source</strong>, select{' '}
                <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-semibold border border-blue-500/40">
                  GitHub Actions
                </span>
                .
              </li>
            </ol>
            <p className="mt-2 text-slate-400 text-xs">
              Because we created <code className="text-blue-300 font-mono">.github/workflows/deploy.yml</code>, GitHub will now automatically build and publish your site on every push!
            </p>
          </div>

          {/* Step 2: Push changes */}
          <div className="p-5 rounded-2xl border border-slate-800 bg-[#0B0F19]/70">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 font-serif font-bold text-base text-red-400">
                <GitBranch className="w-4 h-4" />
                <span>Step 2: Push the new build configuration</span>
              </div>
              <button
                onClick={() => copyCode(gitCommands, 1)}
                className="flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-white transition-colors"
              >
                {copiedIndex === 1 ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Copied
                  </span>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Copy
                  </>
                )}
              </button>
            </div>
            <pre className="p-3 rounded-xl bg-black/60 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
              {gitCommands}
            </pre>
          </div>

          {/* Step 3: Verified configuration checklist */}
          <div className="p-5 rounded-2xl border border-slate-800 bg-[#0B0F19]/70">
            <div className="flex items-center gap-2 font-serif font-bold text-base text-yellow-400 mb-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>What We Fixed in the Codebase</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Configured <code className="text-blue-300 font-mono">base: './'</code> in <code className="text-slate-200 font-mono">vite.config.ts</code> to prevent subpath 404 asset errors.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Created automated GitHub Actions pipeline in <code className="text-slate-200 font-mono">.github/workflows/deploy.yml</code>.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified <code className="text-yellow-300 font-mono">npm run build</code> builds into <code className="text-slate-200 font-mono">dist/</code> with zero errors.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
          <span className="text-xs text-slate-400 font-mono">
            Once GitHub Actions finishes (~1 min), your site will be live!
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
          >
            Got it, Let's Deploy
          </button>
        </div>
      </div>
    </div>
  );
};
