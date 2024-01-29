import { Outlet } from "react-router";

import Sidebar from "src/components/organisms/Admin/Sidebar";
import SideRes from "src/components/organisms/Admin/SideRes";
import Navbar from "src/components/organisms/Admin/Navbar";
import Footer from "src/components/organisms/Admin/Footer";

import { useState, useEffect, useRef } from "react";

function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target as Node) &&
      iconRef.current &&
      !iconRef.current.contains(event.target as Node)
    ) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSidebarOpen]);

  console.log(isSidebarOpen);
  return (
    <div className="m-0 text-base antialiased font-normal dark:bg-slate-900 leading-default bg-gray-50 text-slate-500">
      <div className="absolute w-full bg-blue-500 dark:hidden min-h-75"></div>
      <Sidebar />
      {isSidebarOpen && <SideRes modal={modalRef} />}
      <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
        <Navbar toggle={toggleSidebar} icon={iconRef} />
        <div className="w-full px-6 py-6 mx-auto">
          <Outlet />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
