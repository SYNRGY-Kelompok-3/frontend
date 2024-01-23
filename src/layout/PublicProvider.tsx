import { Outlet } from "react-router";
import PublicProvider from "src/pages/PublicProvider";

function Layout() {
  return (
    <PublicProvider>
      <Outlet />
    </PublicProvider>
  );
}

export default Layout;
