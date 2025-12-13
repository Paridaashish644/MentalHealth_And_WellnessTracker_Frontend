import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDark = () => {
    const newDarkState = !dark;
    setDark(newDarkState);
    if (newDarkState) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
            <span className="text-white text-xl">🧠</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            MindTrack
          </h1>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition">Features</a>
          <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition">How It Works</a>
          <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition">Testimonials</a>
          <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition">Pricing</a>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={toggleDark}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            {dark ? '☀️' : '🌙'}
          </button>
          <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-medium hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300">
           <Link to="/login">Sign In</Link> 
          </button>
        </div>
      </div>
    </nav>
  );
}


export default Navbar