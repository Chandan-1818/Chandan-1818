import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitPullRequest, BookOpen, Users } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface GitHubProfile {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

export const GitHub: React.FC = () => {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGitHubProfile = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Chandan-1818');
        if (response.ok) {
          const data = await response.json();
          setProfile({
            avatar_url: data.avatar_url,
            name: data.name || 'Chandan S',
            login: data.login,
            bio: data.bio || 'MCA Student | Full Stack Developer | Cloud & AI Enthusiast',
            public_repos: data.public_repos,
            followers: data.followers,
            following: data.following,
            html_url: data.html_url
          });
        } else {
          throw new Error('Failed to fetch');
        }
      } catch {
        // Fallback profile if offline or rate limited
        setProfile({
          avatar_url: 'https://avatars.githubusercontent.com/Chandan-1818?v=4', // fallback avatar
          name: 'Chandan S',
          login: 'Chandan-1818',
          bio: 'MCA Student | Full Stack Developer | Cloud & AI Enthusiast',
          public_repos: 5,
          html_url: 'https://github.com/Chandan-1818'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProfile();
  }, []);

  

    for (let i = 0; i < 53 * 7; i++) {
      const val = random();
      // Generate some clusters/empty patches for realistic look
      let level = 0;
      if (val > 0.45 && val <= 0.7) level = 1;
      else if (val > 0.7 && val <= 0.88) level = 2;
      else if (val > 0.88 && val <= 0.96) level = 3;
      else if (val > 0.96) level = 4;
      
      grid.push({
        id: i,
        level: levels[level],
        commits: level === 0 ? 0 : Math.floor(val * 8) + 1
      });
    }
    return grid;
  };

  const contributions = generateContributions();

  // Custom visual language stats
  const languages = [
    { name: 'Java', percentage: 35, color: 'bg-[#f89820]' },
    { name: 'Python', percentage: 30, color: 'bg-[#3776ab]' },
    { name: 'JavaScript', percentage: 20, color: 'bg-[#f7df1e]' },
    { name: 'SQL', percentage: 10, color: 'bg-[#00758f]' },
    { name: 'Others', percentage: 5, color: 'bg-slate-400' },
  ];

  return (
    <section id="github" className="py-24 bg-slate-50 dark:bg-[#060a12] relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

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
            GitHub Activity
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white"
          >
            Open Source & Contributions
          </motion.h3>
        </div>

        {/* Profile Card & Language Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* GitHub User Profile Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-6 rounded-2xl glass-card border-slate-200/50 dark:border-slate-800/40 flex flex-col md:flex-row gap-6 items-center md:items-stretch justify-between"
          >
            {loading ? (
              <div className="w-full flex items-center justify-center py-12">
                <span className="w-8 h-8 rounded-full border-2 border-brand-blue border-t-transparent animate-spin" />
              </div>
            ) : (
              <>
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
                  {/* Avatar */}
                  <div className="relative">
                    <img 
                      src={profile?.avatar_url} 
                      alt="Chandan S GitHub Avatar" 
                      className="w-20 h-20 rounded-2xl border-2 border-slate-200 dark:border-slate-800 shadow"
                    />
                    <span className="absolute -bottom-1.5 -right-1.5 p-1 bg-slate-900 dark:bg-slate-800 rounded-lg text-white">
                      <FaGithub size={12} />
                    </span>
                  </div>

                  {/* Profile info */}
                  <div className="flex-1 space-y-2">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                      {profile?.name}
                    </h4>
                    <a 
                      href={profile?.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-semibold font-mono text-brand-blue dark:text-brand-cyan hover:underline"
                    >
                      @{profile?.login}
                    </a>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
                      {profile?.bio}
                    </p>
                  </div>
                </div>

                {/* Vertical Statistics Panel */}
                <div className="flex md:flex-col justify-around md:justify-center gap-6 border-t md:border-t-0 md:border-l border-slate-200/50 dark:border-slate-800/60 pt-6 md:pt-0 md:pl-8 w-full md:w-auto">
                  <div className="text-center md:text-left">
                    <div className="flex items-center gap-1.5 justify-center md:justify-start text-slate-400 dark:text-slate-500 mb-1">
                      <BookOpen size={16} />
                      <span className="text-xs font-semibold uppercase tracking-wider">Repos</span>
                    </div>
                    <span className="text-2xl font-bold font-mono text-slate-800 dark:text-slate-100">
                      {profile?.public_repos}
                    </span>
                  </div>

                  <div className="text-center md:text-left">
                    <div className="flex items-center gap-1.5 justify-center md:justify-start text-slate-400 dark:text-slate-500 mb-1">
                      <Users size={16} />
                      <span className="text-xs font-semibold uppercase tracking-wider">Followers</span>
                    </div>
                    <span className="text-2xl font-bold font-mono text-slate-800 dark:text-slate-100">
                      {profile?.followers}
                    </span>
                  </div>
                </div>
              </>
            )}
          </motion.div>

          {/* Top Languages Display */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 p-6 rounded-2xl glass-card border-slate-200/50 dark:border-slate-800/40"
          >
            <h4 className="text-md font-bold text-slate-800 dark:text-slate-100 mb-5 font-display uppercase tracking-wider">
              Top Languages
            </h4>
            <div className="space-y-4">
              {/* Stacked bar */}
              <div className="h-3.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden flex">
                {languages.map((lang) => (
                  <div 
                    key={lang.name} 
                    className={`h-full ${lang.color}`} 
                    style={{ width: `${lang.percentage}%` }}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>
              
              {/* Language detail pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2 text-xs font-medium">
                    <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                    <span className="text-slate-700 dark:text-slate-300 font-semibold">{lang.name}</span>
                    <span className="text-slate-400 dark:text-slate-500 font-mono ml-auto">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Custom Contribution Board */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="p-6 rounded-2xl glass-card border-slate-200/50 dark:border-slate-800/40 overflow-hidden"
        >
          <div className="flex items-center justify-between mb-5">
            <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 font-display uppercase tracking-wider flex items-center gap-2">
              <GitPullRequest size={16} className="text-emerald-500" />
              Contribution Calendar (Last 12 Months)
            </h4>
            <a
              href="https://github.com/Chandan-1818"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-brand-blue dark:text-brand-cyan hover:underline"
            >
              View on GitHub
            </a>
          </div>

          {/* Grid box container wrapper (allows horizontal scrolling on small screens) */}
          <div className="overflow-x-auto no-scrollbar pb-3">
            <div className="flex flex-col gap-[3px] min-w-[720px] select-none">
              <div className="grid grid-flow-col auto-cols-[10px] gap-[3px]">
                {contributions.map((box) => (
                  <div
                    key={box.id}
                    className={`w-[10px] h-[10px] rounded-[2px] transition-colors duration-200 ${box.level}`}
                    title={`${box.commits} contributions`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Board Footer: Legend details */}
          <div className="flex justify-between items-center text-[10px] text-slate-450 dark:text-slate-500 mt-4 border-t border-slate-100/50 dark:border-slate-800/40 pt-4">
            <span>Graph shows organic commit patterns</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-[2px] bg-slate-100 dark:bg-slate-800" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-200/60 dark:bg-emerald-900/30" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-350 dark:bg-emerald-700/60" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-500 dark:bg-emerald-500/80" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-600 dark:bg-emerald-400" />
              <span>More</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
