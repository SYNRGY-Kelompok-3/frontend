import { Link, NavLink } from "react-router-dom";
import Image from "src/components/atoms/Img";
import LogoBlue from "src/assets/LogoBlue.png";
function Sidebar() {
  const handleLogout = () => {
    const c = confirm("are you sure want to logout?");
    if (c) {
      localStorage.removeItem("token");
      window.location.reload();
    }
  };
  return (
    <>
      <aside
        className="fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white border-0 shadow-xl dark:shadow-none dark:bg-slate-850 xl:ml-6 max-w-64 ease-nav-brand z-990 rounded-2xl xl:left-0 xl:translate-x-0"
        aria-expanded="false"
      >
        <div className="flex justify-center items-center py-3">
          <Link to="/" className="flex items-center z-20">
            <Image src={LogoBlue} alt={"logo"} className={"w-[20px] h-[20px] md:w-[25px] md:h-[25px]"} />
            <div className={`text-[#075efd] font-bold text-2xl sm:text-3xl ml-2`}>Travel.id</div>
          </Link>
        </div>

        <hr className="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/100 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

        <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
          <ul className="flex flex-col pl-0 mb-0">
            <li className="mt-0.5 w-full">
              <NavLink
                className={({ isActive }): string =>
                  `${
                    isActive
                      ? "py-2.7 bg-blue-500/13 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors"
                      : "py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors dark:text-white dark:opacity-80"
                  }`
                }
                to={"/dashboard/tiket"}
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <i className="fa-solid fa-ticket text-lime-500"></i>
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Tiket</span>
              </NavLink>
            </li>
            <li className="mt-0.5 w-full">
              <NavLink
                className={({ isActive }): string =>
                  `${
                    isActive
                      ? "py-2.7 bg-blue-500/13 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors"
                      : "py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors dark:text-white dark:opacity-80"
                  }`
                }
                to={"/dashboard/bandara"}
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <i className="fa-solid fa-building"></i>
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Bandara</span>
              </NavLink>
            </li>
            <li className="mt-0.5 w-full">
              <NavLink
                className={({ isActive }): string =>
                  `${
                    isActive
                      ? "py-2.7 bg-blue-500/13 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors"
                      : "py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors dark:text-white dark:opacity-80"
                  }`
                }
                to={"/dashboard/maskapai"}
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <i className="fa-solid fa-plane"></i>
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Maskapai</span>
              </NavLink>
            </li>
            <li className="mt-0.5 w-full">
              <NavLink
                className={({ isActive }): string =>
                  `${
                    isActive
                      ? "py-2.7 bg-blue-500/13 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors"
                      : "py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors dark:text-white dark:opacity-80"
                  }`
                }
                to={"/dashboard/analitik"}
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <i className="fa-solid fa-chart-simple"></i>
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Analitik</span>
              </NavLink>
            </li>

            <li className="mt-0.5 w-full">
              <div
                className={
                  "py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors dark:text-white dark:opacity-80 hover:text-red-500 hover:font-bold"
                }
                onClick={handleLogout}
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Log Out</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;