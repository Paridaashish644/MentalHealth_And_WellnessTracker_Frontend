function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-violet-50 to-fuchsia-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-violet-300/70 mix-blend-multiply blur-3xl dark:bg-violet-900/40 motion-safe:animate-pulse" />
        <div className="absolute -right-10 top-40 h-72 w-72 rounded-full bg-fuchsia-300/70 mix-blend-multiply blur-3xl dark:bg-fuchsia-900/40 motion-safe:animate-pulse" />
        <div className="absolute left-1/3 bottom-0 h-72 w-72 rounded-full bg-purple-300/70 mix-blend-multiply blur-3xl dark:bg-purple-900/40 motion-safe:animate-pulse" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.35),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.15),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),_transparent_60%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col px-4 pt-28 pb-20 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="max-w-xl text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200/60 bg-white/80 px-4 py-2 text-xs font-medium text-slate-700 backdrop-blur-md dark:border-violet-800/60 dark:bg-slate-900/70 dark:text-slate-300">
            <span className="h-2 w-2 animate-ping rounded-full bg-emerald-500" />
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Your wellness journey starts here</span>
          </div>

          <h1 className="mb-5 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
              Transform your
            </span>
            <br />
            <span>mental wellness</span>
          </h1>

          <p className="mx-auto mb-8 max-w-lg text-base text-slate-600 sm:text-lg md:text-xl dark:text-slate-400">
            Track your moods, build healthy habits, and nurture your mental
            health with a calming, science‑inspired platform made for everyday
            use.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <button className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform transition-shadow duration-300 hover:scale-[1.02] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/70 active:scale-[0.97]">
              Start free trial
              <span className="ml-2 text-lg transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </button>

            <button className="inline-flex items-center justify-center rounded-xl border border-slate-200/70 bg-white/80 px-7 py-3 text-sm font-semibold text-slate-900 backdrop-blur-md transition-colors duration-300 hover:border-violet-300 hover:bg-white dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-white dark:hover:border-violet-700 dark:hover:bg-slate-900">
              Watch demo
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-600 sm:text-sm lg:justify-start dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span>
              <span>14‑day free trial</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        <div className="mt-14 w-full max-w-lg lg:mt-0 lg:w-1/2">
          <div className="relative mx-auto w-full max-w-md rounded-3xl border border-white/10  dark:bg-slate-900/90  p-6 shadow-2xl backdrop-blur-xl dark:border-slate-700/80">
            <div className="mx-auto mb-6 flex items-center justify-center">
              <div className="relative h-40 w-40">
                <svg viewBox="0 0 120 120" className="h-full w-full">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="rgba(148,163,184,0.35)"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="url(#wellnessGradient)"
                    strokeWidth="10"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="314"
                    strokeDashoffset="60"
                    className="animate-[dash_2s_ease-in-out_infinite]"
                  />
                  <defs>
                    <linearGradient id="wellnessGradient">
                      <stop offset="0%" stopColor="#22c55e" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-3xl font-black text-black dark:text-slate-50">
                    82%
                  </div>
                  <div className="text-xs uppercase tracking-wide text-slate-400">
                    Wellness score
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center text-xs text-slate-400">
              {[
                { label: "Calm", value: "High", color: "text-emerald-400" },
                { label: "Focus", value: "Stable", color: "text-violet-400" },
                {
                  label: "Energy",
                  value: "Balanced",
                  color: "text-fuchsia-400",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2"
                >
                  <div className={`text-sm font-semibold ${item.color}`}>
                    {item.value}
                  </div>
                  <div className="mt-0.5 text-[11px] tracking-wide uppercase">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="pointer-events-none">
              <div className="absolute -right-6 top-4 w-40 rounded-xl border border-slate-200 bg-white p-3 shadow-lg shadow-violet-500/10 animate-[float_6s_ease-in-out_infinite] dark:border-slate-700 dark:bg-slate-900/95">
                <div className="mb-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Mood today
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">😊</span>
                  <span className="text-lg font-bold text-emerald-500">
                    Great
                  </span>
                </div>
              </div>

              <div className="absolute -left-6 bottom-4 w-40 rounded-xl border border-slate-200 bg-white p-3 shadow-lg shadow-amber-500/10 animate-[float_6s_ease-in-out_infinite_2s] dark:border-slate-700 dark:bg-slate-900/95">
                <div className="mb-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Streak
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔥</span>
                  <span className="text-lg font-bold text-orange-500">
                    7 days
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom caption */}
            <div className="mt-6 flex items-center justify-between text-[11px] text-slate-500">
              <span>Daily check‑ins completed</span>
              <span className="font-semibold text-slate-200">93%</span>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          @keyframes dash {
            0% { stroke-dashoffset: 120; }
            50% { stroke-dashoffset: 40; }
            100% { stroke-dashoffset: 120; }
          }
        `}
      </style>
    </section>
  );
}

export default Hero;
