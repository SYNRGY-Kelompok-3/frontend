import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../atoms/Img";
import Avatar from "../../../assets/Avatar.png";
import ChevronDown from "../../../assets/ChevronDown.svg";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const openDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  return (
    <>
      <div onClick={openDropdown} className="relative cursor-pointer">
        <div className="flex items-center">
          <div className="relative">
            <Image src={Avatar} alt={"avatar-img"} className={""} />
            <div className="absolute inset-0 rounded-full shadow-inner"></div>
          </div>
          <p className="text-base font-normal ml-2">Hi, Charles</p>
          <Image src={ChevronDown} alt={"chevron"} className={"ml-2"} />
        </div>
        {isOpen && (
          <div className="bg-white shadow-lg p-4 w-40 rounded absolute top-12">
            <ul>
              <li
                onClick={() => navigate("/profile")}
                className="p-2 cursor-pointer rounded hover:bg-gray-300 hover:text-white"
              >
                Profile
              </li>
              <li
                onClick={() => navigate("/settings")}
                className="p-2 cursor-pointer rounded hover:bg-gray-300 hover:text-white"
              >
                Settings
              </li>
              <li
                onClick={() => navigate("/")}
                className="p-2 text-red-500 cursor-pointer rounded hover:bg-red-500 hover:text-white"
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
