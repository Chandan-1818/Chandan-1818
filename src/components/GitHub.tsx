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
