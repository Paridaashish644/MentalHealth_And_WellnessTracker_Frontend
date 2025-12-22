function Updates() {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-4">Product Updates</h1>
        <p className="text-slate-400 mb-10">
          Stay informed about the latest improvements, features, and fixes in
          MindTrack.
        </p>

        {/* Updates List */}
        <div className="space-y-6">
          {/* Update 1 */}
          <div className="bg-slate-800 p-6 rounded-xl shadow">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">
                Mood Analytics Dashboard Enhanced
              </h2>
              <span className="text-sm text-slate-400">March 2025</span>
            </div>
            <p className="text-slate-400">
              Improved visual charts for weekly and monthly mood tracking.
              Users can now better understand emotional patterns and trends.
            </p>
          </div>

          {/* Update 2 */}
          <div className="bg-slate-800 p-6 rounded-xl shadow">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">
                Secure Journaling Feature
              </h2>
              <span className="text-sm text-slate-400">February 2025</span>
            </div>
            <p className="text-slate-400">
              Added encrypted private journaling to ensure user thoughts and
              emotions remain confidential and secure.
            </p>
          </div>

          {/* Update 3 */}
          <div className="bg-slate-800 p-6 rounded-xl shadow">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">
                Wellness Tips & Reminders
              </h2>
              <span className="text-sm text-slate-400">January 2025</span>
            </div>
            <p className="text-slate-400">
              Introduced daily wellness tips including breathing exercises,
              mindfulness reminders, and positive affirmations.
            </p>
          </div>

          {/* Update 4 */}
          <div className="bg-slate-800 p-6 rounded-xl shadow">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">
                Performance & Security Improvements
              </h2>
              <span className="text-sm text-slate-400">December 2024</span>
            </div>
            <p className="text-slate-400">
              Backend optimizations and security enhancements for better
              performance, stability, and data protection.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-slate-500 text-sm text-center mt-12">
          More updates are coming soon as we continue improving MindTrack.
        </p>
      </div>
    </div>
  );
}

export default Updates;
