import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

function Register() {
 const [form, setForm] = useState({
  fullName: "",
  email: "",
  password: "",
  age: "",
  gender: "male", 
});

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await api.post("/auth/register", {
      fullName: form.fullName,
      email: form.email,
      password: form.password,
      age: form.age,
      gender: form.gender,
      role: "USER" 
    });

    setSuccess("Account created! You can now login.");
    setError("");

  } catch (err) {
    setError("Registration failed. Try again.");
    console.error(err);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-900 p-6">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-6">
          Create Account 
        </h2>

        {error && <p className="text-red-500 text-center mb-3">{error}</p>}
        {success && <p className="text-green-500 text-center mb-3">{success}</p>}
<form onSubmit={handleSubmit} className="space-y-4">
  <input
    name="fullName"
    placeholder="Full Name"
    onChange={handleChange}
    required
    className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-700 outline-none"
  />

  <input
    type="email"
    name="email"
    placeholder="Email"
    onChange={handleChange}
    required
    className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-700 outline-none"
  />

  <input
    type="password"
    name="password"
    placeholder="Password"
    onChange={handleChange}
    required
    className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-700 outline-none"
  />

  <input
    type="number"
    name="age"
    placeholder="Age"
    onChange={handleChange}
    required
    className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-700 outline-none"
  />

  <select
    name="gender"
    value={form.gender}
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-700 outline-none"
  >
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>

  <button className="w-full py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold rounded-lg hover:opacity-90 transition">
    Register
  </button>
</form>


        <p className="text-center text-slate-600 dark:text-slate-300 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-violet-600 dark:text-violet-400 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
