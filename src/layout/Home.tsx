import { Outlet } from "react-router";
import Navbar from "src/components/organisms/Navbar";
import Footer from "src/components/organisms/Footer";

function Layout() {
  return (
    <div>
      <Navbar bg={"bg-transparent"} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
