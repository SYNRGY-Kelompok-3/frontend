/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import Logo from "src/assets/Logo.png";
import LogoBlue from "src/assets/LogoBlue.png";
import Notification from "src/components/organisms/Notification";
import IconProfile from "src/components/organisms/Dropdown";
import Navmenu from "src/components/molecules/Navmenu";
import Button from "src/components/atoms/Button";
import Image from "src/components/atoms/Img";

interface NavmenuProps {
  bg?: "bg-transparent" | "bg-opaque" | "bg-white shadow-md" | undefined;
}

interface Menu {
  text: string;
  link?: string;
}

function Navbar({ bg = "bg-transparent" }: NavmenuProps) {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const NavMenu: Menu[] = [
    { text: "Beranda", link: "/" },
    { text: "Tentang Kami", link: "/tentang-kami" },
    { text: "Artikel", link: "/artikel" },
    { text: "Pusat Bantuan", link: "/pusat-bantuan" },
  ];

  const SideMenu: Menu[] = [
    { text: "Profile", link: "/profile" },
    { text: "Notifikasi", link: "/notifikasi" },
    { text: "Beranda", link: "/" },
    { text: "Tentang Kami", link: "/tentang-kami" },
    { text: "Artikel", link: "/artikel" },
    { text: "Pusat Bantuan", link: "/pusat-bantuan" },
  ];

  const checkboxRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    const target = event.target as Node;

    // Check if the click is outside the card
    if (checkboxRef.current && !checkboxRef.current?.contains(target)) {
      setIsChecked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <>
      <nav className={`${bg} bg-cover`}>
        <div className="px-[20px] sm:px-10 xl:px-28 py-5 flex justify-between items-center">
          <NavLink to="/" className="flex items-center z-20">
            <Image
              src={bg === "bg-white shadow-md" ? LogoBlue : Logo}
              alt={"logo"}
              className={"w-[20px] h-[20px] md:w-[25px] md:h-[25px]"}
            />
            <div
              className={`${
                bg === "bg-white shadow-md" ? "text-[#075efd]" : "text-white"
              } font-bold text-2xl sm:text-3xl ml-2`}
            >
              Travel.id
            </div>
          </NavLink>
          <div className="items-center hidden sm:hidden lg:flex gap-1">
            <Navmenu menu={NavMenu} bg={bg} className={"px-3 text-center text-lg"} />
          </div>
          <div className="flex items-center gap-2">
            {token ? (
              <div className="hidden sm:flex">
                <Notification />
                <IconProfile />
              </div>
            ) : (
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
                  className={
                    "bg-blue-600 text-white font-medium text-sm sm:text-lg py-2 px-4 rounded-md hover:bg-blue-700"
                  }
                  content={"Masuk"}
                />
              </div>
            )}

            <div
              className={`flex lg:hidden items-center justify-end ${
                bg === "bg-white shadow-md" ? "bg-slate-100" : "bg-white bg-opacity-20"
              }  rounded-md`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                ref={checkboxRef}
                name="hamburger"
                id="hamburger"
                className="sr-only peer"
                hidden
              />
              <label
                htmlFor="hamburger"
                className="peer-checked:hamburger block relative z-20 py-3 px-2 sm:py-4 sm:px-3  rounded-full cursor-pointer lg:hidden"
              >
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300 rotate"
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                ></div>
              </label>
              <div className="flex flex-col justify-between peer-checked:translate-x-0 z-20 fixed inset-0 w-[calc(80%-4.5rem)] translate-x-[-100%] bg-white border-r shadow-xl transition duration-500 lg:border-l-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                <div>
                  <NavLink to="/" className="py-5 px-5 flex items-center z-20">
                    <Image
                      src={LogoBlue}
                      alt={"logo"}
                      className={"w-[20px] sm:w-[25px] h-[20px] sm:h-[25px]"}
                    />
                    <div className={`text-[#075efd] font-bold text-2xl md:text-3xl ml-2`}>Travel.id</div>
                  </NavLink>
                  <div className="mt-10 flex flex-col space-y-1">
                    {token ? (
                      <Navmenu
                        menu={SideMenu}
                        bg={"bg-white shadow-md"}
                        className={"px-5 text-start text-lg sm:text-xl"}
                      />
                    ) : (
                      <Navmenu
                        menu={NavMenu}
                        bg={"bg-white shadow-md"}
                        className={"px-5 text-start text-lg sm:text-xl"}
                      />
                    )}
                  </div>
                </div>
                {token ? (
                  <></>
                ) : (
                  <div className="flex w-full">
                    <Button
                      onClick={() => navigate("/register")}
                      type={"button"}
                      className={
                        "w-full bg-gradient-to-r from-blue-500 to-sky-400 text-white font-medium text-lg sm:text-xl my-8 mx-5 py-2 px-4 rounded-md hover:from-blue-600 hover:to-cyan-500 transition-all duration-500 ease-in-out hover:scale-[1.02]"
                      }
                      content={"Daftar Sekarang"}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
