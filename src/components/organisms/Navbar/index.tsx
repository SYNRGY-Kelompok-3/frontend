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
        <div className="px-10 xl:px-28 py-5 flex justify-between items-center">
          <NavLink to="/" className="flex items-center z-20">
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
          <div className="items-center hidden sm:hidden lg:flex gap-1">
            <Navmenu bg={bg} className={"text-center text-lg"} />
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => navigate("/register")}
              type={"button"}
              className={`hidden lg:flex ${
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
            <div
              className={`flex sm:flex lg:hidden items-center justify-end ${
                bg === "bg-white shadow-md" ? "bg-slate-100" : "bg-white bg-opacity-20"
              }  rounded-md`}
            >
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
              <div className="flex flex-col justify-between peer-checked:translate-x-0 z-20 fixed inset-0 w-[calc(80%-4.5rem)] translate-x-[-100%] bg-white border-r shadow-xl transition duration-500 lg:border-l-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                <div>
                  <NavLink to="/" className="px-10 py-5 flex items-center z-20">
                    <Image src={LogoBlue} alt={"logo"} className={"w-[25px] h-[25px]"} />
                    <div className={`text-[#075efd] font-bold text-3xl ml-2`}>Travel.id</div>
                  </NavLink>
                  <div className="mt-10 px-7 flex flex-col space-y-8">
                    <Navmenu bg={"bg-white shadow-md"} className={"text-start text-xl"} />
                  </div>
                </div>
                <div className="flex w-full">
                  <Button
                    onClick={() => navigate("/register")}
                    type={"button"}
                    className={
                      "w-full bg-blue-600 text-white font-medium text-xl my-8 mx-10 py-2 px-4 rounded-md hover:bg-blue-700"
                    }
                    content={"Daftar Sekarang"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
