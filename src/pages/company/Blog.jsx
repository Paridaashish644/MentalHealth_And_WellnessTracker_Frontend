import { Link } from "react-router-dom";

function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Managing Stress in Daily Life",
      description:
        "Learn simple and effective techniques to manage stress and stay mentally balanced.",
      content:
        "Full content of Managing Stress in Daily Life... Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Dr. Emily Harper",
      date: "Dec 12, 2025",
      image:
        "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d7?crop=entropy&cs=tinysrgb&fit=max&h=400&w=800",
      authorImage:
        "https://images.unsplash.com/photo-1531891437562-4f9a7884e019?crop=entropy&cs=tinysrgb&fit=crop&h=64&w=64",
    },
    {
      id: 2,
      title: "The Importance of Mental Health Awareness",
      description:
        "Understand why mental health is as important as physical health and how awareness helps.",
      content:
        "Full content of The Importance of Mental Health Awareness... Lorem ipsum dolor sit amet...",
      author: "Dr. Michael Thompson",
      date: "Dec 10, 2025",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&h=400&w=800",
      authorImage:
        "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?crop=entropy&cs=tinysrgb&fit=crop&h=64&w=64"
}
,
    {
      id: 3,
      title: "Mindfulness and Meditation",
      description:
        "Discover how mindfulness and meditation can improve focus, calmness, and emotional health.",
      content:
        "Full content of Mindfulness and Meditation... Lorem ipsum dolor sit amet...",
      author: "Sarah Collins",
      date: "Dec 8, 2025",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&h=400&w=800",
      authorImage:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=crop&h=64&w=64",
    },
    {
      id: 4,
      title: "Improving Sleep for Better Mental Health",
      description:
        "Explore healthy sleep habits that positively impact your mental well-being.",
      content:
        "Full content of Improving Sleep for Better Mental Health... Lorem ipsum dolor sit amet...",
      author: "Dr. Jason Lee",
      date: "Dec 5, 2025",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&h=400&w=800",
      authorImage:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fit=crop&h=64&w=64",
    },
    {
      id: 5,
      title: "Building Resilience Against Anxiety",
      description:
        "Learn techniques to strengthen mental resilience and reduce anxiety over time.",
      content:
        "Full content of Building Resilience Against Anxiety... Lorem ipsum dolor sit amet...",
      author: "Laura Martinez",
      date: "Dec 2, 2025",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&h=400&w=800",
      authorImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=crop&h=64&w=64",
    },
    {
      id: 6,
      title: "Daily Journaling for Emotional Clarity",
      description:
        "Understand how keeping a daily journal can help process emotions and improve self-awareness.",
      content:
        "Full content of Daily Journaling for Emotional Clarity... Lorem ipsum dolor sit amet...",
      author: "Dr. Rachel Adams",
      date: "Nov 30, 2025",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&h=400&w=800",
      authorImage:
        "https://images.unsplash.com/photo-1502767089025-6572583495b3?crop=entropy&cs=tinysrgb&fit=crop&h=64&w=64",
    },
    {
      id: 7,
      title: "Positive Habits to Boost Your Mood",
      description:
        "Explore small, practical daily habits that can lift your mood and improve mental wellness.",
      content:
        "Full content of Positive Habits to Boost Your Mood... Lorem ipsum dolor sit amet...",
      author: "James Carter",
      date: "Nov 28, 2025",
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=max&h=400&w=800",
      authorImage:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=crop&h=64&w=64",
    },
    {
      id: 8,
      title: "Nutrition and Mental Health",
      description:
        "Learn how your diet impacts mental health and which foods promote emotional balance.",
      content:
        "Full content of Nutrition and Mental Health... Lorem ipsum dolor sit amet...",
      author: "Dr. Olivia Bennett",
      date: "Nov 25, 2025",
      image:
        "https://images.unsplash.com/photo-1525097487452-6278ff080c31?crop=entropy&cs=tinysrgb&fit=max&h=400&w=800",
      authorImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&h=64&w=64",
    },
    {
      id: 9,
      title: "Coping with Work-Life Balance Stress",
      description:
        "Tips to maintain mental wellness while managing professional and personal life demands.",
      content:
        "Full content of Coping with Work-Life Balance Stress... Lorem ipsum dolor sit amet...",
      author: "Dr. Sophia King",
      date: "Nov 22, 2025",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&h=400&w=800",
      authorImage:
        "https://images.unsplash.com/photo-1502764613149-7f1d229e2300?crop=entropy&cs=tinysrgb&fit=crop&h=64&w=64",
    },
    {
      id: 10,
      title: "Techniques for Reducing Daily Anxiety",
      description:
        "Learn small daily practices to lower anxiety and improve mental focus.",
      content:
        "Full content of Techniques for Reducing Daily Anxiety... Lorem ipsum dolor sit amet...",
      author: "Dr. Daniel Wilson",
      date: "Nov 20, 2025",
      image:
        "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?crop=entropy&cs=tinysrgb&fit=max&h=400&w=800",
      authorImage:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?crop=entropy&cs=tinysrgb&fit=crop&h=64&w=64",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Wellness Blog</h1>
        <p className="text-slate-400 mb-10">
          Read expert articles and wellness tips focused on mental health,
          emotional well-being, and self-care.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-slate-800 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>

                {/* Author Info */}
                <div className="flex items-center mb-3">
                  <img
                    src={blog.authorImage}
                    alt={blog.author}
                    className="w-8 h-8 rounded-full object-cover mr-3"
                  />
                  <p className="text-slate-400 text-sm">
                    {blog.author} | {blog.date}
                  </p>
                </div>

                <p className="text-slate-400 mb-4">{blog.description}</p>
                <Link
                  to={`/blog/${blog.id}`}
                  state={{ blog }}
                  className="text-indigo-400 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
