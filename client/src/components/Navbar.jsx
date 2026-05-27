import logo from "../assets/logo.png";

export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/auth";
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#111827] border-b border-gray-800">

      {/* Left */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="logo"
          className="w-10 h-10 object-contain"
        />

        <h1 className="text-2xl font-bold text-red-500">
          Plotune
        </h1>
      </div>

      {/* Right */}
      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold"
      >
        Logout
      </button>
    </nav>
  );
}