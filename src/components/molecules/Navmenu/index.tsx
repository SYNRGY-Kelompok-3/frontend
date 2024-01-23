/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router-dom";

interface Menu {
  text?: string;
  link?: string | any;
}
interface NavmenuProps {
  bg?: "bg-transparent" | "bg-opaque" | "bg-white shadow-md" | undefined;
  className?: string;
  menu: Menu[];
}

function Navmenu({ bg, className, menu }: NavmenuProps) {
  return (
    <>
      {/* <NavLink
        to="/"
        className={({ isActive }): string =>
          `${isActive
            ? bg === "bg-transparent"
              ? "text-white bg-white bg-opacity-20"
              : "text-[#075efd] hover:bg-slate-100"
            : bg === "bg-transparent"
              ? "text-white hover:bg-white hover:bg-opacity-20"
              : "text-black hover:bg-slate-100"
          } py-2 rounded-md font-semibold ${className}`
        }
      >
        Beranda
      </NavLink>
      <NavLink
        to="/tentang-kami"
        className={({ isActive }): string =>
          `${isActive
            ? bg === "bg-transparent"
              ? "text-white bg-white bg-opacity-20"
              : "text-[#075efd] hover:bg-slate-100"
            : bg === "bg-transparent"
              ? "text-white hover:bg-white hover:bg-opacity-20"
              : "text-black hover:bg-slate-100"
          } py-2 rounded-md font-semibold ${className}`
        }
      >
        Tentang Kami
      </NavLink>
      <NavLink
        to="/artikel"
        className={({ isActive }): string =>
          `${isActive
            ? bg === "bg-transparent"
              ? "text-white bg-white bg-opacity-20"
              : "text-[#075efd] hover:bg-slate-100"
            : bg === "bg-transparent"
              ? "text-white hover:bg-white hover:bg-opacity-20"
              : "text-black hover:bg-slate-100"
          } py-2 rounded-md font-semibold ${className}`
        }
      >
        Artikel
      </NavLink>
      <NavLink
        to="/pusat-bantuan"
        className={({ isActive }): string =>
          `${isActive
            ? bg === "bg-transparent"
              ? "text-white bg-white bg-opacity-20"
              : "text-[#075efd] hover:bg-slate-100"
            : bg === "bg-transparent"
              ? "text-white hover:bg-white hover:bg-opacity-20"
              : "text-black hover:bg-slate-100"
          } py-2 rounded-md font-semibold ${className}`
        }
      >
        Pusat Bantuan
      </NavLink> */}
      {menu.map((menu: Menu) => (
        <NavLink
          to={menu.link}
          className={({ isActive }): string =>
            `${
              isActive
                ? bg === "bg-transparent"
                  ? "text-white bg-white bg-opacity-20"
                  : "text-[#075efd] hover:bg-slate-100"
                : bg === "bg-transparent"
                ? "text-white hover:bg-white hover:bg-opacity-20"
                : "text-black hover:bg-slate-100"
            } py-2 rounded-md font-semibold ${className}`
          }
        >
          {menu.text}
        </NavLink>
      ))}
    </>
  );
}

export default Navmenu;
