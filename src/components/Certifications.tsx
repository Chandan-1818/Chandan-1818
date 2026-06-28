import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, Calendar, Award, ExternalLink } from 'lucide-react';
import { certificatesData, type Certificate } from '../data/certificatesData';

export const Certifications: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

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
        type: 'spring' as const,
        stiffness: 100,
        damping: 15
      }
    },
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
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
          {certificatesData.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              className="flex flex-col rounded-2xl glass-card border-slate-200/50 dark:border-slate-800/40 relative group overflow-hidden hover:shadow-xl"
            >
              {/* Certificate Image Preview */}
              <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-2">
                      {cert.issuer}
                    </p>
                  </div>
                  
                  {/* Verified badge */}
                  <span className="inline-flex items-center gap-1 text-xs font-semibold font-sans text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2.5 py-1 rounded-full border border-emerald-250/20 shrink-0 ml-3">
                    <CheckCircle2 size={12} />
                    Verified
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <Calendar size={12} />
                    <span>{cert.issueDate}</span>
                  </div>
                  {cert.credentialId && cert.credentialId !== 'Not Mentioned' && (
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      ID: {cert.credentialId}
                    </div>
                  )}
                </div>

                {/* Skills Badges */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-brand-blue/10 dark:bg-brand-cyan/10 text-brand-blue dark:text-brand-cyan border border-brand-blue/20 dark:border-brand-cyan/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Button */}
                <div className="mt-auto pt-4 border-t border-slate-100/50 dark:border-slate-800/50">
                  <button
                    onClick={() => setSelectedCertificate(cert)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-xl hover:bg-brand-blue hover:text-white dark:hover:bg-brand-cyan dark:hover:text-white transition-all duration-300 group-hover:shadow-lg"
                  >
                    <ExternalLink size={14} />
                    View Certificate
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} className="text-slate-700 dark:text-slate-300" />
                </button>

                {/* Certificate Image */}
                <img
                  src={selectedCertificate.imageUrl}
                  alt={selectedCertificate.title}
                  className="w-full h-auto"
                />

                {/* Certificate Details */}
                <div className="p-6 border-t border-slate-200 dark:border-slate-800">
                  <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-2">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                    {selectedCertificate.issuer}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <Calendar size={16} />
                      <span>Issue Date: {selectedCertificate.issueDate}</span>
                    </div>
                    {selectedCertificate.credentialId && selectedCertificate.credentialId !== 'Not Mentioned' && (
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Credential ID: {selectedCertificate.credentialId}
                      </div>
                    )}
                  </div>

                  {selectedCertificate.skills && selectedCertificate.skills.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCertificate.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="text-sm font-medium px-3 py-1.5 rounded-full bg-brand-blue/10 dark:bg-brand-cyan/10 text-brand-blue dark:text-brand-cyan border border-brand-blue/20 dark:border-brand-cyan/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedCertificate.credentialUrl && (
                    <a
                      href={selectedCertificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand-blue dark:bg-brand-cyan rounded-xl hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink size={16} />
                      View Credential URL
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
