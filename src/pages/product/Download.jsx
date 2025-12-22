function Download() {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-4">
          Download MindTrack
        </h1>
        <p className="text-slate-400 text-center mb-12">
          Access MindTrack on your preferred device and take control of your
          mental wellness anytime, anywhere.
        </p>

        {/* Download Options */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Web */}
          <div className="bg-slate-800 rounded-xl p-6 shadow text-center">
            <h2 className="text-2xl font-semibold mb-2">Web App</h2>
            <p className="text-slate-400 mb-4">
              Use MindTrack directly from your browser without installation.
            </p>

            <ul className="text-slate-400 space-y-2 mb-6">
              <li>✔ Works on all modern browsers</li>
              <li>✔ No download required</li>
              <li>✔ Always up to date</li>
            </ul>

            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg">
              Open Web App
            </button>
          </div>

          {/* Android */}
          <div className="bg-slate-800 rounded-xl p-6 shadow text-center">
            <h2 className="text-2xl font-semibold mb-2">Android</h2>
            <p className="text-slate-400 mb-4">
              Track your mood and wellness on the go with our Android app.
            </p>

            <ul className="text-slate-400 space-y-2 mb-6">
              <li>✔ Mood & journal tracking</li>
              <li>✔ Push reminders</li>
              <li>✔ Offline access</li>
            </ul>

            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg">
              Download for Android
            </button>
          </div>

          {/* iOS */}
          <div className="bg-slate-800 rounded-xl p-6 shadow text-center">
            <h2 className="text-2xl font-semibold mb-2">iOS</h2>
            <p className="text-slate-400 mb-4">
              Experience a smooth and secure wellness journey on iPhone.
            </p>

            <ul className="text-slate-400 space-y-2 mb-6">
              <li>✔ Secure & private</li>
              <li>✔ Health insights</li>
              <li>✔ iCloud sync</li>
            </ul>

            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg">
              Download for iOS
            </button>
          </div>

        </div>

        {/* Footer Note */}
        <p className="text-slate-500 text-center mt-12 text-sm">
          * Mobile applications are under development. Web version is fully
          functional.
        </p>
      </div>
    </div>
  );
}

export default Download;

