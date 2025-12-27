import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/DashBoard";
import ProtectedRoute from "./routes/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import WeeklyAnalytics from "./pages/WeeklyAnalytics";
import Register from "./pages/Register";
import Layout from "./components/Layout";

import About from "./pages/company/About";
import Blog from "./pages/company/Blog";
import BlogDetail from "./pages/company/BlogDetail";
import Careers from "./pages/company/Careers";
import Contact from "./pages/company/Contact";

import Features from "./pages/product/Features";
import Pricing from "./pages/product/Pricing";
import Download from "./pages/product/Download";
import Updates from "./pages/product/Updates";

import Testimonials from "./pages/navbarOption/Testimonials";

import HowItWorks from "./pages/navbarOption/howItWorks";



function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<WeeklyAnalytics />} />
      </Route>

      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/download" element={<Download />} />
      <Route path="/updates" element={<Updates />} />

      <Route path="/testimonials" element={<Testimonials/>} />
      <Route path="/howitworks" element={<HowItWorks/>}/>
    </Routes>
  );
}

export default App;
