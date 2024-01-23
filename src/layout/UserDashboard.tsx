import { Outlet } from "react-router";
import Sidebar from "src/components/molecules/Sidebar";

function Layout() {
  return (
    <div className="grid sm:flex h-fit">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Layout;
