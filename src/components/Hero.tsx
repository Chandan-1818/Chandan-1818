import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, ChevronDown } from 'lucide-react';

const WORDS = ['Full Stack Developer', 'Cloud Enthusiast', 'AI Learner', 'Problem Solver'];

export const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typing effect logic — all transitions happen inside a setTimeout to avoid
  // synchronous setState calls within an effect body
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (subIndex === WORDS[index].length + 1 && !reverse) {
      // Pause at end of word, then start erasing
      timeout = setTimeout(() => setReverse(true), 2000);
    } else if (subIndex === 0 && reverse) {
      // Move to next word — deferred so setState is never called synchronously
      timeout = setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % WORDS.length);
      }, 0);
    } else {
      timeout = setTimeout(() => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      }, reverse ? 75 : 150);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  // Cursor blinker effect
  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Chandan_S_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden mesh-gradient">
      {/* Dynamic background shapes */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] dark:bg-brand-blue/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-cyan/5 rounded-full blur-[90px] dark:bg-brand-cyan/10 pointer-events-none" />

      {/* Grid overlay for modern developer style */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] dark:opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20 dark:bg-brand-cyan/10 dark:text-brand-cyan dark:border-brand-cyan/20 text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-blue dark:bg-brand-cyan animate-pulse" />
            Open to opportunities & collaborations
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-brand-blue via-[#3b82f6] to-brand-cyan bg-clip-text text-transparent drop-shadow-sm">Chandan S</span>
          </h1>

          {/* Animated Typing Role */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-slate-700 dark:text-slate-200 mb-6 min-h-[40px]">
            <span>MCA Student | </span>
            <span className="text-brand-blue dark:text-brand-cyan">
              {`${WORDS[index].substring(0, subIndex)}`}
            </span>
            <span className={`inline-block w-[2px] h-[22px] md:h-[28px] ml-1 bg-brand-blue dark:bg-brand-cyan ${blink ? 'opacity-100' : 'opacity-0'}`} />
          </h2>

          {/* Intro Text */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
            Passionate MCA student with a strong foundation in software development, cloud computing, and AI-powered applications. I enjoy building scalable solutions, learning emerging technologies, and solving real-world problems through code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => scrollToSection('#projects')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-blue/90 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-brand-blue/30 dark:hover:shadow-brand-blue/10 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
            >
              View Projects
              <ArrowRight size={18} />
            </button>
            
            <button
              onClick={handleDownloadResume}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-slate-200 hover:border-slate-300 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-slate-750 text-slate-700 dark:text-slate-200 font-medium rounded-xl hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
            >
              Download Resume
              <Download size={18} />
            </button>
            
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-brand-blue/30 text-brand-blue dark:border-brand-cyan/35 dark:text-brand-cyan font-medium rounded-xl hover:bg-brand-blue/5 dark:hover:bg-brand-cyan/5 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
            >
              Contact Me
              <Mail size={18} />
            </button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => scrollToSection('#about')}
        >
          <span className="text-xs uppercase tracking-widest font-mono text-slate-400 dark:text-slate-500">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown size={18} className="text-slate-400 dark:text-slate-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
