function Pricing() {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-4">Pricing Plans</h1>
        <p className="text-slate-400 text-center mb-12">
          Choose a plan that fits your mental wellness journey and personal goals.
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Free Plan */}
          <div className="bg-slate-800 rounded-xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-2">Free</h2>
            <p className="text-slate-400 mb-4">Perfect for getting started</p>
            <p className="text-4xl font-bold mb-6">₹0</p>

            <ul className="space-y-3 text-slate-400">
              <li>✔ Daily Mood Tracking</li>
              <li>✔ Basic Journaling</li>
              <li>✔ Weekly Mood Insights</li>
              <li>✔ Limited Wellness Tips</li>
            </ul>

            <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-slate-800 rounded-xl p-6 shadow border-2 border-indigo-500">
            <h2 className="text-2xl font-semibold mb-2">Pro</h2>
            <p className="text-slate-400 mb-4">Best for personal growth</p>
            <p className="text-4xl font-bold mb-6">
              ₹499 <span className="text-base text-slate-400">/month</span>
            </p>

            <ul className="space-y-3 text-slate-400">
              <li>✔ Everything in Free</li>
              <li>✔ Advanced Analytics Dashboard</li>
              <li>✔ AI-based Wellness Suggestions</li>
              <li>✔ Sleep & Stress Monitoring</li>
              <li>✔ Unlimited Journaling</li>
            </ul>

            <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg">
              Upgrade to Pro
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-slate-800 rounded-xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-2">Premium</h2>
            <p className="text-slate-400 mb-4">Complete mental wellness support</p>
            <p className="text-4xl font-bold mb-6">
              ₹999 <span className="text-base text-slate-400">/month</span>
            </p>

            <ul className="space-y-3 text-slate-400">
              <li>✔ Everything in Pro</li>
              <li>✔ Therapist Consultation Access</li>
              <li>✔ Community Support Forums</li>
              <li>✔ Personalized Care Plans</li>
              <li>✔ Priority Support</li>
            </ul>

            <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg">
              Go Premium
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Pricing;
