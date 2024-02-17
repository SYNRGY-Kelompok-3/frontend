import { Outlet } from "react-router";
import Sidebar from "src/components/molecules/Sidebar";

function Layout() {
  return (
    <div className="grid sm:flex sm:mx-10 xl:mx-28 h-fit">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Layout;
