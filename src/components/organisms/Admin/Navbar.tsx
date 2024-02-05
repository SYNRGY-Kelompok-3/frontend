import Notification from "src/components/organisms/Notification";
import IconProfile from "src/components/organisms/Dropdown";

import { Link } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import Api from "src/services/api";

interface User {
  created_date?: string;
  updated_date?: string;
  id?: number;
  name?: string;
  identityNumber?: string | null;
  email?: string;
  dateOfBirth?: string;
  gender?: string | null;
  profilePicture?: string | null;
  phoneNumber?: string;
}

function Navbar({ toggle, icon }: { toggle: () => void; icon: React.RefObject<HTMLDivElement> }) {
  const { fetchProfile } = Api();
  const [user, setUser] = useState<User>({});

  const fetchUser = useCallback(async () => {
    try {
      const response = await fetchProfile();
      setUser(response["data 2"]);
    } catch (error) {
      console.log("error > ", error);
    }
  }, [fetchProfile]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <>
      <nav
        className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start"
        navbar-main
        navbar-scroll="false"
      >
        <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
          <nav>
            {/* <!-- breadcrumb --> */}
            <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
              <li className="text-sm leading-normal">
                <Link className="text-white text-lg" to={"/"}>
                  Pages
                </Link>
              </li>
              <li
                className="text-lg pl-2 capitalize leading-normal text-white before:float-left before:pr-2 before:text-white before:content-['/']"
                aria-current="page"
              >
                Tiket
              </li>
            </ol>
            {/* <!-- <h6 className="mb-0 font-bold text-white capitalize">Tables</h6> --> */}
          </nav>

          <div className="flex justify-end items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
            {/* <!-- <div className="flex items-center md:ml-auto md:pr-4">
                            <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease">
                                <span
                                    className="text-sm ease leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                                    <i className="fas fa-search"></i>
                                </span>
                                <input type="text"
                                    className="pl-9 text-sm focus:shadow-primary-outline ease w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 dark:bg-slate-850 dark:text-white bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:transition-shadow"
                                    placeholder="Type here..." />
                            </div>
                        </div> --> */}
            <ul className="flex flex-row justify-end pl-0 my-2 list-none md-max:w-full">
              <li>
                <div>
                  <Notification />
                </div>
              </li>
              <li className="flex items-center">
                <IconProfile name={user.name} picture={user.profilePicture} />
              </li>
              <li onClick={toggle} className="flex items-center pl-4 xl:hidden">
                <div
                  ref={icon}
                  className="block p-0 text-sm text-white transition-all ease-nav-brand"
                  sidenav-trigger
                >
                  <div className="w-4.5 overflow-hidden">
                    <i className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all"></i>
                    <i className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all"></i>
                    <i className="ease relative block h-0.5 rounded-sm bg-white transition-all"></i>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
