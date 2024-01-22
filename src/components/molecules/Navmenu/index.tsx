/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router-dom";
interface NavmenuProps {
  bg?: "bg-transparent" | "bg-opaque" | "bg-white shadow-md" | undefined;
  className?: string;
}

function Navmenu({ bg, className }: NavmenuProps) {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }): string =>
          `${
            isActive
              ? bg === "bg-transparent"
                ? "text-white bg-white bg-opacity-20"
                : "text-[#075efd] hover:bg-slate-100"
              : bg === "bg-transparent"
              ? "text-white hover:bg-white hover:bg-opacity-20"
              : "text-black hover:bg-slate-100"
          } py-2 px-3 rounded-md font-semibold ${className}`
        }
      >
        Beranda
      </NavLink>
      <NavLink
        to="/tentang-kami"
        className={({ isActive }): string =>
          `${
            isActive
              ? bg === "bg-transparent"
                ? "text-white bg-white bg-opacity-20"
                : "text-[#075efd] hover:bg-slate-100"
              : bg === "bg-transparent"
              ? "text-white hover:bg-white hover:bg-opacity-20"
              : "text-black hover:bg-slate-100"
          } py-2 px-3 rounded-md font-semibold ${className}`
        }
      >
        Tentang Kami
      </NavLink>
      <NavLink
        to="/artikel"
        className={({ isActive }): string =>
          `${
            isActive
              ? bg === "bg-transparent"
                ? "text-white bg-white bg-opacity-20"
                : "text-[#075efd] hover:bg-slate-100"
              : bg === "bg-transparent"
              ? "text-white hover:bg-white hover:bg-opacity-20"
              : "text-black hover:bg-slate-100"
          } py-2 px-3 rounded-md font-semibold ${className}`
        }
      >
        Artikel
      </NavLink>
      <NavLink
        to="/pusat-bantuan"
        className={({ isActive }): string =>
          `${
            isActive
              ? bg === "bg-transparent"
                ? "text-white bg-white bg-opacity-20"
                : "text-[#075efd] hover:bg-slate-100"
              : bg === "bg-transparent"
              ? "text-white hover:bg-white hover:bg-opacity-20"
              : "text-black hover:bg-slate-100"
          } py-2 px-3 rounded-md font-semibold ${className}`
        }
      >
        Pusat Bantuan
      </NavLink>
    </>
  );
}

export default Navmenu;
