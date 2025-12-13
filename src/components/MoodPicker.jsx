const moods = [
  { label: "😄", value: "HAPPY" },
  { label: "🙂", value: "CALM" },
  { label: "😐", value: "NEUTRAL" },
  { label: "😔", value: "SAD" },
  { label: "😡", value: "ANGRY" },
  { label: "😰", value: "ANXIOUS" },
];

function MoodPicker({ selected, onSelect }) {
  return (
    <div className="flex gap-3">
      {moods.map((m) => (
        <button
          key={m.value}
          onClick={() => onSelect(m.value)}
          className={`text-3xl p-3 rounded-xl transition
            ${selected === m.value ? "bg-violet-600 text-white" : "bg-slate-100"}
          `}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}

export default MoodPicker;
