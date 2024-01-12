/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink, useNavigate } from "react-router-dom";

import Logo from "src/assets/Logo.png";
import LogoBlue from "src/assets/LogoBlue.png";

import Navmenu from "src/components/molecules/Navmenu";

import Button from "src/components/atoms/Button";
import Image from "src/components/atoms/Img";

interface NavmenuProps {
  bg?: "bg-transparent" | "bg-opaque" | "bg-white shadow-md" | undefined;
}

function Navbar({ bg = "bg-transparent" }: NavmenuProps) {
  const navigate = useNavigate();

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
          <div>
            <Button
              onClick={() => navigate("/register")}
              type={"button"}
              className={`${
                bg === "bg-white shadow-md"
                  ? "text-black hover:text-white hover:bg-blue-700"
                  : "text-white hover:bg-white hover:bg-opacity-20"
              } font-medium text-lg mr-5 py-2 px-4 rounded-md `}
              content={"Daftar Sekarang"}
            />
            <Button
              onClick={() => navigate("/login")}
              type={"button"}
              className={"bg-blue-600 text-white font-medium text-lg py-2 px-4 rounded-md hover:bg-blue-700"}
              content={"Masuk"}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
