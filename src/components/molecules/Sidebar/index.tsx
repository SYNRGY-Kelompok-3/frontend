import { NavLink } from "react-router-dom";
import ModalLogout from "src/components/organisms/PopUp/modalLogout";
import { useState } from "react";

function Sidebar() {
  const [logoutModal, setLogoutModal] = useState(false);

  const handleCloseModal = () => {
    setLogoutModal(false);
  };

  return (
    <>
      <aside className="w-full sm:w-auto mt-7 text-lg">
        <ul className="flex justify-center items-center gap-6 sm:gap-0 sm:grid">
          <li id="profil" className="w-[50px] sm:w-[180px] lg:w-[250px]">
            <NavLink
              to="/profile"
              className={({ isActive }): string =>
                `flex justify-center sm:justify-start items-center ${
                  isActive
                    ? "w-full pl-2 font-bold text-blue-500 bg-blue-100 p-3 sm:py-5 border-l-4 border-blue-500 rounded-tr-xl rounded-br-xl"
                    : "text-black py-5"
                }`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <span className="hidden sm:block ml-2 text-lg">Profil</span>
            </NavLink>
          </li>
          <li id="notifikasi" className="w-[50px] sm:w-[180px] lg:w-[250px]">
            <NavLink
              to="/notifikasi"
              className={({ isActive }): string =>
                `flex justify-center sm:justify-start items-center ${
                  isActive
                    ? "pl-2 font-bold text-blue-500 bg-blue-100 p-3 sm:py-5 border-l-4 border-blue-500 rounded-tr-xl rounded-br-xl"
                    : "text-black py-5"
                }`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
              <span className="hidden sm:block ml-2 text-lg">Notifikasi</span>
            </NavLink>
          </li>
          <li id="riwayat" className="w-[50px] sm:w-[180px] lg:w-[250px]">
            <NavLink
              to="/riwayat-transaksi"
              className={({ isActive }): string =>
                `flex justify-center sm:justify-start items-center ${
                  isActive
                    ? "pl-2 font-bold text-blue-500 bg-blue-100 p-3 sm:py-5 border-l-4 border-blue-500 rounded-tr-xl rounded-br-xl"
                    : "text-black py-5"
                }`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                />
              </svg>
              <span className="hidden sm:block ml-2 text-lg">Riwayat Transaksi</span>
            </NavLink>
          </li>
          <li id="keluar" className="w-[50px] sm:w-[180px] lg:w-[250px]">
            <div
              onClick={() => setLogoutModal(true)}
              className="flex items-center py-5 hover:text-red-500 cursor-pointer hover:font-bold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>
              <span className="hidden sm:block ml-2 text-lg">Keluar</span>
            </div>
          </li>
        </ul>
      </aside>
      <ModalLogout visible={logoutModal} onClose={handleCloseModal} />
    </>
  );
}

export default Sidebar;
