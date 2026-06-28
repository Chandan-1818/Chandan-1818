import React from 'react';
import { ChevronUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-[#060a12] border-t border-slate-200/50 dark:border-slate-900/60 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and copyright */}
          <div className="text-center md:text-left space-y-2">
            <div className="font-display font-bold text-lg text-slate-800 dark:text-white">
              Chandan <span className="text-brand-blue dark:text-brand-cyan">S</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              © 2026 Chandan S. All rights reserved.
            </p>
          </div>

          {/* Quote */}
          <div className="text-center max-w-sm">
            <p className="text-xs italic text-slate-450 dark:text-slate-500 font-sans leading-relaxed">
              "Building solutions, learning continuously, and creating impact through technology."
            </p>
          </div>

          {/* Controls and social shortcuts */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/chandans269"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white border border-slate-200/50 dark:bg-slate-900 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-cyan transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
            
            <a
              href="https://github.com/Chandan-1818"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white border border-slate-200/50 dark:bg-slate-900 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-cyan hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label="Scroll to Top"
            >
              <ChevronUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
