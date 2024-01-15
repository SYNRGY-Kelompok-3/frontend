import { Outlet } from "react-router";
import Navbar from "src/components/organisms/Navbar";
import Footer from "src/components/organisms/Footer";

function Layout() {
  return (
    <div className="bg-[url('/src/assets/bgnew.png')] bg-cover">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
