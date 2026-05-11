import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen">

      <Navbar />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};

export default MainLayout;