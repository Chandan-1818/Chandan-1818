import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Monitor, 
  Server, 
  Database, 
  Cloud, 
  Cpu,
  Coffee,
  FileJson,
  Binary,
  Layout,
  Paintbrush,
  Layers,
  Boxes,
  Workflow,
  GitBranch,
  Bot,
  BrainCircuit,
  FileCode,
} from 'lucide-react';
import { SiPython, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiFlask, SiMysql, SiMongodb } from 'react-icons/si';
import { FaAws, FaGithub } from 'react-icons/fa';

interface Skill {
  name: string;
  level: number; // Percentage for progress bars
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming',
      icon: <Code2 className="text-brand-blue dark:text-brand-cyan" size={22} />,
      skills: [
        { name: 'Java', level: 85, icon: <Coffee size={18} className="text-[#f89820]" /> },
        { name: 'Python', level: 80, icon: <SiPython size={18} className="text-[#3776ab]" /> },
        { name: 'JavaScript', level: 85, icon: <FileJson size={18} className="text-[#f7df1e]" /> },
        { name: 'SQL', level: 75, icon: <Binary size={18} className="text-[#00758f]" /> },
      ],
    },
    {
      title: 'Frontend',
      icon: <Monitor className="text-brand-blue dark:text-brand-cyan" size={22} />,
      skills: [
        { name: 'React.js', level: 85, icon: <SiReact size={18} className="text-[#61dafb] animate-spin-slow" /> },
        { name: 'HTML5', level: 90, icon: <Layout size={18} className="text-[#e34c26]" /> },
        { name: 'CSS3', level: 80, icon: <Paintbrush size={18} className="text-[#264de4]" /> },
        { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss size={18} className="text-[#38bdf8]" /> },
        { name: 'Bootstrap', level: 75, icon: <Layers size={18} className="text-[#7952b3]" /> },
      ],
    },
    {
      title: 'Backend',
      icon: <Server className="text-brand-blue dark:text-brand-cyan" size={22} />,
      skills: [
        { name: 'Node.js', level: 80, icon: <SiNodedotjs size={18} className="text-[#339933]" /> },
        { name: 'Express.js', level: 75, icon: <SiExpress size={18} className="text-slate-600 dark:text-slate-300" /> },
        { name: 'Flask', level: 70, icon: <SiFlask size={18} className="text-slate-700 dark:text-slate-350" /> },
      ],
    },
    {
      title: 'Databases',
      icon: <Database className="text-brand-blue dark:text-brand-cyan" size={22} />,
      skills: [
        { name: 'MySQL', level: 80, icon: <SiMysql size={18} className="text-[#00758f]" /> },
        { name: 'MongoDB', level: 75, icon: <SiMongodb size={18} className="text-[#47a248]" /> },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="text-brand-blue dark:text-brand-cyan" size={22} />,
      skills: [
        { name: 'AWS', level: 80, icon: <FaAws size={18} className="text-[#ff9900]" /> },
        { name: 'AWS Lambda', level: 75, icon: <FaAws size={18} className="text-[#ff9900]" /> },
        { name: 'Containers', level: 70, icon: <Boxes size={18} className="text-[#2496ed]" /> },
        { name: 'Serverless Computing', level: 70, icon: <Workflow size={18} className="text-[#fd5750]" /> },
        { name: 'Git', level: 85, icon: <GitBranch size={18} className="text-[#f05032]" /> },
        { name: 'GitHub', level: 90, icon: <FaGithub size={18} className="text-slate-900 dark:text-white" /> },
      ],
    },
    {
      title: 'AI & Tools',
      icon: <Cpu className="text-brand-blue dark:text-brand-cyan" size={22} />,
      skills: [
        { name: 'Gemini API', level: 80, icon: <Bot size={18} className="text-[#1a73e8]" /> },
        { name: 'Machine Learning', level: 65, icon: <BrainCircuit size={18} className="text-pink-500" /> },
        { name: 'VS Code', level: 90, icon: <FileCode size={18} className="text-[#007acc]" /> },
      ],
    },
  ];

  // Animation configuration
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15
      }
    },
  };

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-[#060a12] relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />

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
            Skills & Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white"
          >
            My Technical Toolbox
          </motion.h3>
        </div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="p-6 rounded-2xl glass-card border-slate-200/50 dark:border-slate-800/40 relative group overflow-hidden"
            >
              {/* Top gradient border highlight */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-blue to-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-brand-blue/10 dark:bg-brand-blue/20 rounded-xl">
                  {category.icon}
                </div>
                <h4 className="text-lg font-bold font-display text-slate-800 dark:text-slate-100">
                  {category.title}
                </h4>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-350">
                        {skill.icon}
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-xs font-semibold font-mono text-slate-400 dark:text-slate-500">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-1.5 w-full bg-slate-200/55 dark:bg-slate-800/60 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 + (skillIdx * 0.05) }}
                        className="h-full bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
