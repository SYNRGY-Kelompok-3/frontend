import { Outlet } from "react-router";
import PrivateProvider from "src/pages/PrivateProvider";

function Layout() {
  return (
    <PrivateProvider>
      <Outlet />
    </PrivateProvider>
  );
}

export default Layout;
