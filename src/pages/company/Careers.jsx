function Careers() {
  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer (React.js)",
      location: "Remote / Hyderabad, India",
      description:
        "Build and enhance our web and mobile interfaces for the Mental Health & Wellness Tracker platform. Experience with React.js, TailwindCSS, and responsive design required.",
    },
    {
      id: 2,
      title: "Backend Developer (Spring Boot)",
      location: "Remote / Bangalore, India",
      description:
        "Develop REST APIs and manage database integrations for our wellness platform. Experience with Spring Boot, Oracle/PostgreSQL, and API security is required.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Remote / Mumbai, India",
      description:
        "Design intuitive and visually appealing interfaces for users and admin dashboards. Experience with Figma, Adobe XD, or similar design tools required.",
    },
    {
      id: 4,
      title: "Content Writer – Mental Wellness",
      location: "Remote",
      description:
        "Create engaging and informative articles, blogs, and wellness content for users. Strong writing skills and understanding of mental health topics preferred.",
    },
  ];

  const lifeAtMindTrackImages = [
    {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&h=300&w=600",
      caption: "Team brainstorming session on new wellness features",
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&h=300&w=600",
      caption: "Collaborative project meeting with the development team",
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&h=300&w=600",
      caption: "Wellness workshop: mindfulness and meditation practice",
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&h=300&w=600",
      caption: "Casual team discussion and creative planning",
    },
    {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&h=300&w=600",
      caption: "Celebrating project milestones together",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Careers at MindTrack</h1>
        <p className="text-slate-400 mb-8">
          Join our mission to improve mental wellness worldwide. We value creativity, innovation, and dedication to enhancing mental health through technology and community support.
        </p>

        {/* Job Openings */}
        <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
        <div className="space-y-6">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="bg-slate-800 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
              <p className="text-slate-400 text-sm mb-2">{job.location}</p>
              <p className="text-slate-400 mb-4">{job.description}</p>
              <a
                href="mailto:careers@mindtrack.com"
                className="text-indigo-400 hover:underline"
              >
                Apply Now →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 text-slate-400 text-sm">
          <p>
            If you don’t see a position that fits your skills, feel free to send your resume to{" "}
            <a
              href="mailto:careers@mindtrack.com"
              className="text-indigo-400 hover:underline"
            >
              careers@mindtrack.com
            </a>
            . We are always looking for passionate individuals to join our team.
          </p>
        </div>

        {/* Life at MindTrack Carousel */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Life at MindTrack</h2>
          <p className="text-slate-400 mb-6">
            At MindTrack, we foster a collaborative and wellness-focused environment. Here’s a glimpse of our culture and daily life:
          </p>

          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-slate-800 scroll-snap-x snap-mandatory" style={{ scrollBehavior: "smooth" }}>
            {lifeAtMindTrackImages.map((img, index) => (
              <div key={index} className="flex-shrink-0 w-80 snap-start">
                <img
                  src={img.src}
                  alt={`Life at MindTrack ${index + 1}`}
                  className="w-full h-48 object-cover rounded-xl shadow"
                />
                <p className="text-slate-400 text-sm mt-2">{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;
