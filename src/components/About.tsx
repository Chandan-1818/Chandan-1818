import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Code } from 'lucide-react';

export const About: React.FC = () => {
  const cards = [
    {
      icon: <BookOpen size={24} className="text-brand-blue dark:text-brand-cyan" />,
      title: 'Education',
      desc: 'Master of Computer Applications (MCA) at PES University. BCA Graduate.',
    },
    {
      icon: <Code size={24} className="text-brand-blue dark:text-brand-cyan" />,
      title: 'Development',
      desc: 'Full-stack development experience across web, cloud platforms, and databases.',
    },
    {
      icon: <Award size={24} className="text-brand-blue dark:text-brand-cyan" />,
      title: 'Cloud & AI',
      desc: 'Passionate about serverless computing, AWS architectures, and LLM integrations.',
    },
  ];

  const stats = [
    { value: '3+', label: 'Featured Projects' },
    { value: '5+', label: 'Certifications' },
    { value: '7.21', label: 'BCA CGPA' },
    { value: '2026', label: 'Graduation Year' },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#070b14] relative overflow-hidden">
      {/* Decorative ambient dots */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

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
            About Me
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white"
          >
            Building software with passion & cloud scalability
          </motion.h3>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Panel: Description */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <h4 className="text-xl font-bold font-display text-slate-800 dark:text-slate-100">
              MCA Student & Cloud & AI Enthusiast
            </h4>
            <p className="text-slate-650 dark:text-slate-400 leading-relaxed">
              I am currently pursuing my Master of Computer Applications (MCA) at PES University. My academic background in Computer Applications and hands-on experience in software development have helped me build practical solutions across web development, cloud computing, and AI domains.
            </p>
            <p className="text-slate-650 dark:text-slate-400 leading-relaxed">
              I enjoy working on innovative projects, exploring modern technologies, and continuously improving my technical and problem-solving abilities.
            </p>
            
            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-3xl font-extrabold font-display text-brand-blue dark:text-brand-cyan">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Panel: Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            {cards.map((card, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-4 p-5 rounded-2xl glass-card border-slate-200/50 dark:border-slate-800/40 hover:scale-[1.01]"
              >
                <div className="p-3 bg-brand-blue/10 dark:bg-brand-blue/20 rounded-xl flex-shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 dark:text-slate-100 font-display">
                    {card.title}
                  </h5>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
