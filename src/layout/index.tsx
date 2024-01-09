import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <h1>header tes tes</h1>
      <Outlet />
      <h1>footer</h1>
    </div>
  );
};

export default Layout;
