import { NavLink } from "react-router-dom";

import LogoBlue from "../../../assets/LogoBlue.png";
import Logo from "../../../assets/Logo.png";
import Navmenu from "../../molecules/Navmenu";
import Image from "../../atoms/Img";
import DropdownMenu from "../Dropdown";
import Notification from "../Notification";

interface NavmenuProps {
  bg?: "bg-transparent" | "bg-opaque" | "bg-white shadow-md" | undefined;
}

function NavbarLogin({ bg = "bg-transparent" }: NavmenuProps) {
  return (
    <>
      <nav className={bg}>
        <div className="flex justify-between items-center px-28 py-5">
          <NavLink to="/" className="flex items-center">
            <Image
              src={bg === "bg-white shadow-md" ? LogoBlue : Logo}
              alt={"logo"}
              className={"w-[25px] h-[25px]"}
            />
            <div
              className={`${
                bg === "bg-white shadow-md" ? "text-[#075efd]" : "text-white"
              } font-bold text-3xl ml-2`}
            >
              Travel.id
            </div>
          </NavLink>
          <div className="flex gap-1">
            <Navmenu bg={bg} />
          </div>
          <div className="flex">
            <Notification />
            <DropdownMenu />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarLogin;
