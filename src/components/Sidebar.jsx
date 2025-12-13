import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-8">MHWT 🧠</h2>

      <nav className="space-y-4">
        <Link to="/dashboard" className="block hover:text-violet-400">
          Dashboard
        </Link>
        <Link to="/dashboard/analytics" className="block hover:text-violet-400">
          Mood Tracker
        </Link>
        <Link to="/habits" className="block hover:text-violet-400">
          Habits
        </Link>
        <Link to="/journal" className="block hover:text-violet-400">
          Journal
        </Link>
        <Link to="/activity" className="block hover:text-violet-400">
          Activity Log
        </Link>
        <Link to="/appointments" className="block hover:text-violet-400">
          Appointments
        </Link>

        <button
          onClick={logout}
          className="mt-6 text-red-400 hover:text-red-500"
        >
          Logout
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;
