import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { signupUser, loginUser } from "../services/authService";
import logo from "../assets/logo.png";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (loading) return;

    try {
      setLoading(true);

      if (!isLogin && form.password !== form.confirmPassword) {
        alert("Passwords do not match");
        setLoading(false);
        return;
      }

      const data = isLogin
        ? await loginUser({
            email: form.email,
            password: form.password,
          })
        : await signupUser({
            name: form.name,
            email: form.email,
            password: form.password,
          });

      localStorage.setItem("token", data.data.token);

      alert(isLogin ? "Login Successful 🚀" : "Signup Successful 🚀");

      window.location.href = "/";
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1120] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#1e293b] rounded-3xl shadow-2xl p-8">

        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={logo}
            alt="Plotune Logo"
            className="w-24 h-24 object-contain mb-3"
          />

          <h1 className="text-4xl font-bold text-white">
            Plotune
          </h1>

          <p className="text-gray-400 text-sm mt-2">
            Describe. Discover. Play.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex mb-6 bg-[#334155] rounded-xl overflow-hidden">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-3 font-semibold transition ${
              isLogin
                ? "bg-red-500 text-white"
                : "text-gray-300"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-3 font-semibold transition ${
              !isLogin
                ? "bg-red-500 text-white"
                : "text-gray-300"
            }`}
          >
            Signup
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-[#334155] text-white outline-none border border-transparent focus:border-red-500"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-[#334155] text-white outline-none border border-transparent focus:border-red-500"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-[#334155] text-white outline-none border border-transparent focus:border-red-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3.5 text-gray-400"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>

          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-[#334155] text-white outline-none border border-transparent focus:border-red-500"
            />
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 rounded-xl font-semibold transition ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600 text-white"
            }`}
          >
            {loading
              ? isLogin
                ? "Logging in..."
                : "Creating account..."
              : isLogin
              ? "Login"
              : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}