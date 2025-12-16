function Contact() {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <p className="text-slate-400 mb-10">
          We’re here to help. Whether you have questions, feedback, or need
          support, feel free to reach out to the MindTrack team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-slate-400 mb-4">
              For general inquiries, technical support, or wellness-related
              questions, contact us using the details below.
            </p>

            <div className="space-y-3 text-slate-400">
              <p>
                📧 Email: <span className="text-white">support@mindtrack.com</span>
              </p>
              <p>
                📞 Phone: <span className="text-white">+91 73280 06522</span>
              </p>
              <p>
                📍 Location: <span className="text-white">Hyderabad, India</span>
              </p>
            </div>

            <p className="text-slate-500 text-sm mt-6">
              *For emergencies or immediate mental health support, please contact
              local emergency services or a certified professional.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 rounded-xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded bg-slate-900 text-white border border-slate-700 focus:outline-none focus:border-indigo-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded bg-slate-900 text-white border border-slate-700 focus:outline-none focus:border-indigo-500"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded bg-slate-900 text-white border border-slate-700 focus:outline-none focus:border-indigo-500"
              />

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          <p className="text-slate-400 mb-6">
            Visit or reach out to us at our office location.
          </p>

          <div className="w-full h-80 rounded-xl overflow-hidden shadow">
            <iframe
              title="Microsoft Hyderabad Office"
              src="https://www.google.com/maps?q=Microsoft%20India%20Development%20Centre%20Gachibowli%20Hyderabad&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
