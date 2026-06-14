import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Contact: React.FC = () => {
  const emailAddress = 'chandan895121@gmail.com';
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#070b14] relative overflow-hidden">
      {/* Glow overlays */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-base font-semibold tracking-wider text-brand-blue dark:text-brand-cyan uppercase font-mono"
          >
            Contact
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white"
          >
            Get In Touch
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-slate-500 dark:text-slate-400 text-base leading-relaxed"
          >
            I'm open to opportunities, collaborations, and conversations. Reach out through any of the channels below.
          </motion.p>
        </div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto p-8 rounded-2xl glass-panel"
        >
          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-blue/10 dark:bg-brand-blue/20 rounded-xl text-brand-blue dark:text-brand-cyan">
                <MapPin size={20} />
              </div>
              <div>
                <h5 className="text-xs font-bold font-sans text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Location
                </h5>
                <p className="text-sm font-semibold text-slate-750 dark:text-slate-200 mt-0.5">
                  Bangalore, India
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-brand-blue/10 dark:bg-brand-blue/20 rounded-xl text-brand-blue dark:text-brand-cyan">
                <Mail size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="text-xs font-bold font-sans text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Email
                </h5>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-sm font-semibold text-slate-750 dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-cyan transition-colors mt-0.5 inline-block truncate"
                >
                  {emailAddress}
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-xl text-slate-500 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-cyan hover:scale-105 active:scale-95 transition-all cursor-pointer"
                title="Copy Email to Clipboard"
              >
                {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-blue/10 dark:bg-brand-blue/20 rounded-xl text-brand-blue dark:text-brand-cyan">
                <Phone size={20} />
              </div>
              <div>
                <h5 className="text-xs font-bold font-sans text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Phone
                </h5>
                <a
                  href="tel:+918951219251"
                  className="text-sm font-semibold text-slate-750 dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-cyan transition-colors mt-0.5 inline-block"
                >
                  +91 89512 19251
                </a>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="border-t border-slate-200/50 dark:border-slate-800/60 mt-8 pt-6">
            <h5 className="text-xs font-bold font-sans text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
              Connect With Me
            </h5>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/chandans269"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-50 hover:bg-brand-blue/10 border border-slate-200/40 hover:border-brand-blue/30 dark:bg-slate-900 dark:hover:bg-brand-cyan/15 dark:border-slate-800 dark:hover:border-brand-cyan/20 rounded-xl text-slate-600 hover:text-brand-blue dark:text-slate-350 dark:hover:text-brand-cyan transition-all hover:scale-110 cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="https://github.com/Chandan-1818"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-50 hover:bg-[#181717]/10 border border-slate-200/40 hover:border-[#181717]/30 dark:bg-slate-900 dark:hover:bg-white/10 dark:border-slate-800 dark:hover:border-white/20 rounded-xl text-slate-600 hover:text-slate-900 dark:text-slate-350 dark:hover:text-white transition-all hover:scale-110 cursor-pointer"
                aria-label="GitHub Profile"
              >
                <FaGithub size={18} />
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="ml-auto inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue hover:bg-brand-blue/90 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-blue/20 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <Mail size={15} />
                Send Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
