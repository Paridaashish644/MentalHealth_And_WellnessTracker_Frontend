import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-12 px-6 bg-slate-900 dark:bg-black border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-sm">
                🧠
              </div>
              <span className="text-xl font-bold text-white">MindTrack</span>
            </div>
            <p className="text-slate-400 text-sm">
              Your companion for better mental wellness and personal growth.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="hover:text-white transition cursor-pointer">Features</div>
              <div className="hover:text-white transition cursor-pointer">Pricing</div>
              <div className="hover:text-white transition cursor-pointer">Download</div>
              <div className="hover:text-white transition cursor-pointer">Updates</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <div className="space-y-2 text-sm text-slate-400 flex flex-col">
              <Link to="/about" className="hover:text-white transition">About</Link>
              <Link to="/blog" className="hover:text-white transition">Blog</Link>
              <Link to="/careers" className="hover:text-white transition">Careers</Link>
              <Link to="/contact" className="hover:text-white transition">Contact</Link>
            </div>

          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="hover:text-white transition cursor-pointer">Privacy</div>
              <div className="hover:text-white transition cursor-pointer">Terms</div>
              <div className="hover:text-white transition cursor-pointer">Security</div>
              <div className="hover:text-white transition cursor-pointer">Cookies</div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} MindTrack. All rights reserved.
          </p>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 transition cursor-pointer flex items-center justify-center text-slate-400">
              𝕏
            </div>
            <div className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 transition cursor-pointer flex items-center justify-center text-slate-400">
              in
            </div>
            <div className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 transition cursor-pointer flex items-center justify-center text-slate-400">
              IG
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer