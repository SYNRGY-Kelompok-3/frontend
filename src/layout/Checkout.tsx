import { Outlet } from "react-router";
import NavbarLogin from "src/components/organisms/NavbarLogin";
import Footer from "src/components/organisms/Footer";

function Layout() {
  return (
    <div>
      <NavbarLogin bg={"bg-white shadow-md"} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;