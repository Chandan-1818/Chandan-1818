import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Server, Cloud, ArrowUpRight } from 'lucide-react';
import { SiGoogle } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

interface Certification {
  title: string;
  issuer: string;
  badge: React.ReactNode;
  isAws: boolean;
  credentialUrl?: string;
}

export const Certifications: React.FC = () => {
  const certificationsData: Certification[] = [
    {
      title: 'AWS Cloud Practitioner Essentials',
      issuer: 'AWS Training & Certification',
      badge: <FaAws size={28} className="text-[#FF9900]" />,
      isAws: true,
      credentialUrl: 'https://aws.amazon.com/certification/'
    },
    {
      title: 'Introduction to Containers',
      issuer: 'AWS Training & Certification',
      badge: <Cloud size={24} className="text-brand-cyan" />,
      isAws: true,
      credentialUrl: 'https://aws.amazon.com/training/'
    },
    {
      title: 'AWS Lambda Foundations',
      issuer: 'AWS Training & Certification',
      badge: <Server size={24} className="text-orange-500" />,
      isAws: true,
      credentialUrl: 'https://aws.amazon.com/training/'
    },
    {
      title: 'Introduction to Serverless Development',
      issuer: 'AWS Training & Certification',
      badge: <Award size={24} className="text-amber-500" />,
      isAws: true,
      credentialUrl: 'https://aws.amazon.com/training/'
    },
    {
      title: 'Build with AI Agent Builder Camp',
      issuer: 'Google for Developers × GeeksforGeeks',
      badge: <SiGoogle size={22} className="text-[#4285F4]" />,
      isAws: false,
      credentialUrl: 'https://developers.google.com/'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    },
  };

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-[#070b14] relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

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
            Achievements
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white"
          >
            Certifications & Training
          </motion.h3>
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificationsData.map((cert, i) => (
            <motion.a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              variants={cardVariants}
              className="flex flex-col justify-between p-6 rounded-2xl glass-card border-slate-200/50 dark:border-slate-800/40 relative group cursor-pointer overflow-hidden hover:shadow-xl"
            >
              {/* Subtle top indicator based on provider */}
              <div className={`absolute top-0 left-0 w-full h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${cert.isAws ? 'bg-[#FF9900]' : 'bg-[#4285F4]'}`} />

              <div>
                {/* Header: badge + verified label */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {cert.badge}
                  </div>
                  
                  {/* Verified badge */}
                  <span className="inline-flex items-center gap-1 text-xs font-semibold font-sans text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2.5 py-1 rounded-full border border-emerald-250/20">
                    <CheckCircle2 size={12} />
                    Verified
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors leading-snug">
                  {cert.title}
                </h4>

                {/* Issuer */}
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-2">
                  {cert.issuer}
                </p>
              </div>

              {/* Action trigger */}
              <div className="mt-8 pt-4 border-t border-slate-100/50 dark:border-slate-800/50 flex items-center justify-between text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                <span>View Credential Details</span>
                <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
