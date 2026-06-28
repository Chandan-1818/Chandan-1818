import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Search } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface Project {
  title: string;
  github: string;
  description: string;
  technologies: string[];
  category: 'ai' | 'systems' | 'web';
  categoryLabel: string;
  image?: string;
}

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const projectsData: Project[] = [
    {
      title: 'Food Nutrients Meal Planner',
      github: 'https://github.com/Chandan-1818/FOOD-NUTRIENTS-MEAL-PLANNER',
      description: 'An AI-powered nutrition recommendation system that analyzes dietary requirements and generates personalized meal plans.',
      technologies: ['Python', 'Flask', 'Gemini API', 'HTML', 'CSS'],
      category: 'web',
      categoryLabel: 'AI & Web Development',
      image: '/food_meal_planner.png',
    },
    {
      title: 'CPU Scheduler Simulator',
      github: 'https://github.com/Chandan-1818/CPU-SCHEDULAR',
      description: 'Implementation and visualization of CPU scheduling algorithms (e.g. FCFS, SJF, Round Robin) with performance analysis and comparisons.',
      technologies: ['Java', 'Data Structures', 'Algorithms'],
      category: 'systems',
      categoryLabel: 'Systems & Algorithms',
      image: '/cpu_scheduler.png',
    },
    {
      title: 'Chess LLM',
      github: 'https://github.com/Chandan-1818/CHESS-LLM',
      description: 'An AI-powered chess assistant that leverages Large Language Models for move analysis, strategy recommendations, and learning support.',
      technologies: ['Python', 'AI', 'LLMs'],
      category: 'ai',
      categoryLabel: 'AI & Machine Learning',
      image: '/chess_llm.png',
    },
    {
      title: 'Cricket Score Tracker',
      github: 'https://github.com/Chandan-1818/cricket-score-tracker',
      description: 'A production-ready full-stack MERN application to create, track, score, and persist cricket matches in real-time with glassmorphic UI.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
      category: 'web',
      categoryLabel: 'Full Stack Web',
      image: '/cricket-score-tracker.jpeg',
    },
  ];

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & LLMs' },
    { id: 'systems', label: 'Systems & Algorithms' },
    { id: 'web', label: 'Web Applications' },
  ];

  const filteredProjects = projectsData.filter((project) => {
    // Filter matching
    const matchesFilter = selectedFilter === 'all' || project.category === selectedFilter;
    // Search query matching
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-[#060a12] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

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
            My Work
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white"
          >
            Featured Projects
          </motion.h3>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedFilter(opt.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  selectedFilter === opt.id
                    ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/20 dark:shadow-none'
                    : 'bg-white border border-slate-200 text-slate-650 hover:bg-slate-100 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative max-w-xs w-full">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Search technologies or titles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue dark:focus:border-brand-cyan dark:focus:ring-brand-cyan transition-all text-slate-700 dark:text-slate-200"
            />
          </div>
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                className="flex flex-col justify-between rounded-2xl glass-card border-slate-200/50 dark:border-slate-800/40 relative group overflow-hidden h-full"
              >
                {/* Project Image */}
                {project.image && (
                  <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}

                <div className={`p-6 flex-1 flex flex-col ${!project.image ? 'pt-6' : ''}`}>
                  {/* Category Tag */}
                  <span className="inline-block px-2.5 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider text-brand-blue bg-brand-blue/10 dark:text-brand-cyan dark:bg-brand-cyan/10 mb-4">
                    {project.categoryLabel}
                  </span>

                  {/* Title */}
                  <h4 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-455 mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Footer part: Tech stack and Links */}
                <div className="p-6 pt-0 flex-1 flex flex-col justify-end">
                  {/* Technology pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-0.5 text-xs font-medium font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-200/40 dark:border-slate-800/40">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-cyan transition-colors cursor-pointer"
                    >
                      <FaGithub size={16} />
                      Code
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-cyan transition-colors cursor-pointer ml-auto"
                    >
                      <ExternalLink size={16} />
                      Explore
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state search */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-slate-400 dark:text-slate-500"
          >
            No projects found matching your criteria. Try another filter or search term!
          </motion.div>
        )}
      </div>
    </section>
  );
};
