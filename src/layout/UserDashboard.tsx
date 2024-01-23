import { Outlet } from "react-router";
import Sidebar from "src/components/molecules/Sidebar";

function Layout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Layout;
