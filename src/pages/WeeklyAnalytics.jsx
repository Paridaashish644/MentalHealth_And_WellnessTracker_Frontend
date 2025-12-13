import { useEffect, useState } from "react";
import Sidebar from "../components/SideBar";
import { getAllMoods } from "../api/moodApi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const emojiMap = {
  HAPPY: "😄",
  CALM: "🙂",
  NEUTRAL: "😐",
  SAD: "😔",
  ANGRY: "😡",
  ANXIOUS: "😰",
};

const moodColors = {
  HAPPY: "#facc15",
  CALM: "#22c55e",
  NEUTRAL: "#94a3b8",
  SAD: "#3b82f6",
  ANGRY: "#ef4444",
  ANXIOUS: "#8b5cf6",
};

const getLast7Days = () => {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    d.setHours(0, 0, 0, 0);
    days.push(d);
  }
  return days;
};

const isWithinLast7Days = (dateStr) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const date = new Date(dateStr);
  date.setHours(0, 0, 0, 0);

  const diff = (today - date) / (1000 * 60 * 60 * 24);
  return diff >= 0 && diff <= 6;
};

function WeeklyAnalytics() {
  const [moods, setMoods] = useState([]);
  const [weeklyStats, setWeeklyStats] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    getAllMoods(userId).then((res) => {
      const data = res.data.data;
      setMoods(data);

      // Calculate weekly counts
      const stats = {};
      data
        .filter((m) => isWithinLast7Days(m.date))
        .forEach((m) => {
          stats[m.mood] = (stats[m.mood] || 0) + 1;
        });

      const chartData = Object.entries(stats).map(([mood, count]) => ({
        mood: `${emojiMap[mood]} ${mood}`,
        count,
      }));

      setWeeklyStats(chartData);
    });
  }, []);

  const last7Days = getLast7Days();

  const getMoodForDate = (date) => {
    const moodEntry = moods.find(
      (m) => new Date(m.date).toDateString() === date.toDateString()
    );
    return moodEntry ? moodEntry.mood : null;
  };

  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-900">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
          Weekly Mood Analytics 📊
        </h1>

        {/* Bar Chart */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow mb-8">
          {weeklyStats.length === 0 ? (
            <p className="text-slate-500">No data for last 7 days</p>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={weeklyStats}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mood" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="count" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* 7-Day Calendar */}
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
          Last 7 Days Mood Calendar 📅
        </h2>
        <div className="grid grid-cols-7 gap-4 mb-6">
          {last7Days.map((date) => {
            const mood = getMoodForDate(date);
            const bgColor = mood ? moodColors[mood] : "#cbd5e1"; // slate gray fallback

            return (
              <div
                key={date.toDateString()}
                className="h-20 flex flex-col items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: mood ? bgColor : undefined }}
              >
                <span className="text-sm text-slate-800 dark:text-white mb-1">
                  {date.toLocaleDateString("en-US", { weekday: "short" })}
                </span>
                {mood && <span className="text-xl">{mood}</span>}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex gap-4 flex-wrap">
          {Object.entries(moodColors).map(([mood, color]) => (
            <div key={mood} className="flex items-center gap-2">
              <div
                style={{ backgroundColor: color }}
                className="w-5 h-5 rounded-full"
              />
              <span className="text-slate-700 dark:text-slate-300">{mood}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeeklyAnalytics;
