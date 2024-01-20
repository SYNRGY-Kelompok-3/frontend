/* eslint-disable no-unused-vars */
interface SidebarProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
}

function Sidebar({ activeTab, onTabClick }: SidebarProps) {
  return (
    <>
      <aside className="w-1/4 p-4 ml-2" style={{ paddingLeft: "6.5rem" }}>
        <ul>
          <li
            className={`mb-5 ${activeTab === "profil" ? "bg-blue-100 py-3 border-l-4 border-blue-500" : ""}`}
          >
            <a
              href="#"
              className={`flex items-center ml-2 ${activeTab === "profil" ? "text-blue-500" : "text-black"}`}
              onClick={() => onTabClick("profil")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <span className="ml-2">Profil</span>
            </a>
          </li>
          <li
            className={`mb-5 ${
              activeTab === "notifikasi" ? "bg-blue-100 py-3 border-l-4 border-blue-500" : ""
            }`}
          >
            <a
              href="#"
              className={`flex items-center ml-2 ${
                activeTab === "notifikasi" ? "text-blue-500" : "text-black"
              }`}
              onClick={() => onTabClick("notifikasi")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
              <span className="ml-2">Notifikasi</span>
            </a>
          </li>
          <li
            className={`mb-5 ${activeTab === "riwayat" ? "bg-blue-100 py-3 border-l-4 border-blue-500" : ""}`}
          >
            <a
              href="#"
              className={`flex items-center ml-2 ${activeTab === "riwayat" ? "text-blue-500" : "text-black"}`}
              onClick={() => onTabClick("riwayat")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                />
              </svg>
              <span className="ml-2">Riwayat Transaksi</span>
            </a>
          </li>
          <li
            className={`mb-5 ${activeTab === "keluar" ? "bg-blue-100 py-3 border-l-4 border-blue-500" : ""}`}
          >
            <a
              href="#"
              className={`flex items-center ml-2 ${activeTab === "keluar" ? "text-blue-500" : "text-black"}`}
              onClick={() => onTabClick("keluar")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>
              <span className="ml-2">Keluar</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;