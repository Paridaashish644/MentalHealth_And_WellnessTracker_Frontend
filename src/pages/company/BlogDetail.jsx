import { useLocation, useNavigate } from "react-router-dom";

function BlogDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { blog } = location.state || {};

  if (!blog) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <p className="text-slate-400">Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <button
          className="mb-6 text-indigo-400 hover:underline"
          onClick={() => navigate(-1)}
        >
          ← Back to Blog
        </button>

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-60 object-cover rounded-lg mb-6"
        />

        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

        {/* Author Info */}
        <div className="flex items-center mb-6">
          <img
            src={
              blog.authorImage ||
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&q=80"
            }
            alt={blog.author}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <p className="text-slate-200 font-semibold">{blog.author}</p>
            <p className="text-slate-400 text-sm">{blog.date}</p>
          </div>
        </div>

        <p className="text-slate-400 leading-relaxed">{blog.content}</p>
      </div>
    </div>
  );
}

export default BlogDetail;
