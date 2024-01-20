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
      <nav className={`${bg} bg-cover`}>
        <div className="px-10 sm:px-10 md:px-10 lg:px-10 xl:px-28 py-5 flex justify-between items-center">
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
          <div className="items-center hidden sm:hidden md:hidden lg:flex xl:flex gap-1">
            <Navmenu bg={bg} />
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => navigate("/register")}
              type={"button"}
              className={`hidden sm:hidden md:hidden lg:flex xl:flex ${
                bg === "bg-white shadow-md"
                  ? "text-black hover:text-white hover:bg-blue-700"
                  : "text-white hover:bg-white hover:bg-opacity-20"
              } font-medium text-lg py-2 px-4 rounded-md text-star`}
              content={"Daftar Sekarang"}
            />
            <Button
              onClick={() => navigate("/login")}
              type={"button"}
              className={"bg-blue-600 text-white font-medium text-lg py-2 px-4 rounded-md hover:bg-blue-700"}
              content={"Masuk"}
            />
            <div className="sm:flex md:flex lg:hidden xl:hidden items-center justify-end bg-white bg-opacity-20 rounded-md">
              <input type="checkbox" name="hamburger" id="hamburger" className="sr-only peer" hidden />
              <label
                htmlFor="hamburger"
                className="peer-checked:hamburger block relative z-20 py-4 px-3  rounded-full cursor-pointer lg:hidden"
              >
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                ></div>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
