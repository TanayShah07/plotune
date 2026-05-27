import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white">
      <Navbar />

      <div className="p-6">
        {children}
      </div>
    </div>
  );
}