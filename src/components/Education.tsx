import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

interface EducationEntry {
  degree: string;
  institution: string;
  duration: string;
  grade?: string;
  description: string;
  icon: React.ReactNode;
}

export const Education: React.FC = () => {
  const educationData: EducationEntry[] = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'PES University',
      duration: 'Currently Pursuing',
      grade: 'Active Learner',
      description: 'Acquiring advanced knowledge in cloud architectures, enterprise application development, algorithm design, machine learning, and serverless architectures.',
      icon: <GraduationCap size={20} className="text-white" />,
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Triveni Institute of Commerce and Management',
      duration: 'Graduated',
      grade: 'CGPA: 7.21',
      description: 'Gained core foundations in computer applications, programming paradigms, databases (SQL), software engineering, and object-oriented architectures.',
      icon: <BookOpen size={20} className="text-white" />,
    },
    {
      degree: 'Pre-University Course (PUC)',
      institution: 'Vidhyadhama PU College',
      duration: 'Completed',
      grade: 'Percentage: 75%',
      description: 'Completed secondary education with a focus on science and computer science fields, setting the framework for advanced computer studies.',
      icon: <Award size={20} className="text-white" />,
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Sidhartha Vidyanekethana',
      duration: 'Completed',
      grade: 'Percentage: 79%',
      description: 'Completed elementary high school education focusing on core sciences, mathematics, and analytical problems.',
      icon: <Award size={20} className="text-white" />,
    },
  ];

  return (
    <section id="education" className="py-24 bg-white dark:bg-[#070b14] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-base font-semibold tracking-wider text-brand-blue dark:text-brand-cyan uppercase font-mono"
          >
            Education
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white"
          >
            My Academic Journey
          </motion.h3>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central line (desktop) / left line (mobile) */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[3px] timeline-line rounded-full opacity-60" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row relative items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Badge/Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-brand-blue border-4 border-slate-50 dark:border-[#070b14] z-10 shadow-md">
                    {item.icon}
                  </div>

                  {/* Spacer / Content Side */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50, y: 15 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.7, delay: index * 0.1 }}
                      className="p-6 rounded-2xl glass-card border-slate-200/50 dark:border-slate-800/40 relative group"
                    >
                      {/* Triangle Pointer */}
                      <div className={`absolute top-6 hidden md:block w-0 h-0 border-y-8 border-y-transparent ${isEven ? '-left-2 border-r-8 border-r-slate-200/30 dark:border-r-slate-800/30' : '-right-2 border-l-8 border-l-slate-200/30 dark:border-l-slate-800/30'}`} />

                      {/* Header info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-brand-blue dark:text-brand-cyan">
                          <Calendar size={12} />
                          {item.duration}
                        </span>
                        
                        {item.grade && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-semibold font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-350">
                            {item.grade}
                          </span>
                        )}
                      </div>

                      {/* Title & School */}
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                        {item.degree}
                      </h4>
                      <h5 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
                        {item.institution}
                      </h5>

                      {/* Description */}
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Empty spacer for the other side (desktop only) */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
