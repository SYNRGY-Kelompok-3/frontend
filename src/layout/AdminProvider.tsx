import { Outlet } from "react-router";
import AdminProvider from "src/pages/AdminProvider";

function Layout() {
  return (
    <AdminProvider>
      <Outlet />
    </AdminProvider>
  );
}

export default Layout;
