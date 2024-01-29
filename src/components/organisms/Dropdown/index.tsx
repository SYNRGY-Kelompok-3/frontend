import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { axiosAuth } from "src/services/axios";
import axios from "axios";

import Image from "../../atoms/Img";
import Avatar from "../../../assets/Avatar.png";
import ChevronDown from "../../../assets/ChevronDown.svg";

interface Menu {
  text: string;
  link?: string;
}

function DropdownMenu({ name, picture }: { name: string | undefined; picture: string | null | undefined }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);
  const [role, setRole] = useState<string>();

  const Menu: Menu[] = [
    { text: "Profile", link: "/profile" },
    { text: "Dashboard", link: "/dashboard" },
    { text: "Notification", link: "/notification" },
  ];

  const result = role === "user_role" ? Menu.filter((item) => item.text !== "Dashboard") : Menu;

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${axiosAuth.defaults.baseURL}user/detail-profile/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setRole(response.data["data 1"]["roles"][0].type);
    } catch (error) {
      return error;
    }
  };

  const handleIconClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target as Node) &&
      iconRef.current &&
      !iconRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    fetchUser();
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const handleLogout = () => {
    const c = confirm("are you sure want to logout?");
    if (c) {
      localStorage.removeItem("token");
      window.location.reload();
    }
  };

  return (
    <>
      <div ref={iconRef} onClick={handleIconClick} className="relative cursor-pointer">
        <div className="flex items-center">
          <div className="relative">
            <Image
              src={picture ? picture : Avatar}
              alt={"avatar-img"}
              className={"rounded-full h-[40px] w-[40px]"}
            />
            <div className="absolute inset-0 rounded-full shadow-inner"></div>
          </div>
          <p className="hidden sm:block text-base font-normal ml-2 text-black">{name}</p>
          <Image src={ChevronDown} alt={"chevron"} className={"ml-2 h-[30px]"} />
        </div>
        {isOpen && (
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-lg p-4 w-40 absolute top-11 lg:right-[5px] xl:right-0 z-20"
          >
            <ul className="space-y-2">
              {result.map((item, index) => (
                <li
                  key={index}
                  onClick={() => navigate(`${item.link}`)}
                  className="cursor-pointer rounded py-2 px-3 hover:bg-gray-300 hover:text-white"
                >
                  {item.text}
                </li>
              ))}
              <li
                onClick={handleLogout}
                className="text-red-500 py-2 px-3 cursor-pointer rounded hover:bg-red-500 hover:text-white hover:font-bold"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default DropdownMenu;
