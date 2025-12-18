import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  LayoutDashboard,
  BarChart3,
  CheckCircle,
  BookOpen,
  Activity,
  Calendar,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function Sidebar({ collapsed, setCollapsed }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Mood Tracker", path: "/analytics", icon: BarChart3 },
    { name: "Habits", path: "/habits", icon: CheckCircle },
    { name: "Journal", path: "/journal", icon: BookOpen },
    { name: "Activity Log", path: "/activity", icon: Activity },
    { name: "Appointments", path: "/appointments", icon: Calendar },
  ];

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-64"
      } h-screen bg-slate-900 text-slate-100 flex flex-col transition-all duration-300`}
    >
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <h2 className="text-xl font-extrabold tracking-wide">
            MHWT <span className="text-violet-400">🧠</span>
          </h2>
        )}

        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="p-2 rounded-lg hover:bg-slate-800 transition"
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>

      <nav className="flex-1 px-3 space-y-2 mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-xl transition-all
                 ${
                   isActive
                     ? "bg-violet-600 text-white shadow-md"
                     : "hover:bg-slate-800 text-slate-300"
                 }`
              }
            >
              <Icon size={22} />
              {!collapsed && <span className="font-medium">{item.name}</span>}
            </NavLink>
          );
        })}
      </nav>
      <div className="p-1.5 border-t border-slate-800">
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full px-3 py-2 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-500 transition"
        >
          <LogOut size={22} />
          {!collapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
