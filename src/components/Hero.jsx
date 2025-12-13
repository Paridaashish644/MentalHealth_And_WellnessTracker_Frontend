function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-violet-50 to-fuchsia-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-300 dark:bg-violet-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-fuchsia-300 dark:bg-fuchsia-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-violet-200 dark:border-violet-800 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Your wellness journey starts here</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
              Transform Your
            </span>
            <br />
            <span className="text-slate-900 dark:text-white">Mental Wellness</span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Track your moods, build powerful habits, and nurture your mental health with our beautifully designed, science-backed platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold border-2 border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-300">
              Watch Demo
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        {/* Hero Image/Mockup */}
        <div className="relative max-w-5xl mx-auto mt-20">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
            <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
              <div className="text-center p-12">
                <div className="text-6xl mb-4">📊</div>
                <div className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-2">Beautiful Dashboard</div>
                <div className="text-slate-500 dark:text-slate-500">Your mental wellness at a glance</div>
              </div>
            </div>
          </div>
          
          {/* Floating cards */}
          <div className="absolute -right-8 top-10 w-48 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 animate-float">
            <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Mood Today</div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">😊</span>
              <span className="text-2xl font-bold text-green-500">Great</span>
            </div>
          </div>

          <div className="absolute -left-8 bottom-10 w-48 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 animate-float animation-delay-2000">
            <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Streak</div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🔥</span>
              <span className="text-2xl font-bold text-orange-500">7 Days</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
export default Hero