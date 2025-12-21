import { useEffect, useState } from "react";
import DashboardCard from "../components/DashBoardCard";
import Sidebar from "../components/Sidebar";
import MoodPicker from "../components/MoodPicker";
import { saveMood, getMoodByDate } from "../api/moodApi";

const getCurrentSlot = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "MORNING";
  if (hour < 18) return "AFTERNOON";
  return "EVENING";
};

function Dashboard() {
  const email = localStorage.getItem("email").split("@gmail.com");

  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");
  const [slot] = useState(getCurrentSlot());

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const userId = localStorage.getItem("userId");

    getMoodByDate(today)
      .then((res) => {
        const moods = res.data.data;

        // find mood for current slot
        const slotMood = moods.find((m) => m.slot === slot);

        if (slotMood) {
          setMood(slotMood.mood);
          setNote(slotMood.note || "");
        }
      })
      .catch(() => {});
  }, [slot]);

  const handleSaveMood = async () => {
    await saveMood({
      date: new Date().toISOString().split("T")[0],
      mood,
      note,
      slot,
    });

    alert("Mood saved 😊");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
        Welcome back 👋
      </h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8">{email}</p>

      {/* DASHBOARD CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <DashboardCard
          title="Today's Mood"
          value={mood ? "😊" : "--"}
          subtitle={mood ? `${mood} (${slot})` : "Not set"}
        />
        <DashboardCard
          title="Habits Completed"
          value="3 / 5"
          subtitle="Keep going"
        />
        <DashboardCard
          title="Journal Entries"
          value="12"
          subtitle="This month"
        />
        <DashboardCard title="Activity Score" value="82%" subtitle="Healthy" />
      </div>

      {/* MOOD PICKER SECTION */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow">
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
          How are you feeling today?
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
          Time slot: <span className="font-semibold">{slot}</span>
        </p>

        <MoodPicker selected={mood} onSelect={setMood} />

        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write a short note (optional)"
          className="w-full mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-700 outline-none"
        />

        <button
          onClick={handleSaveMood}
          disabled={!mood}
          className="mt-4 px-6 py-3 bg-violet-600 text-white rounded-lg disabled:opacity-50"
        >
          Save Mood
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
