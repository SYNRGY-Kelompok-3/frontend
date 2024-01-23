import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../atoms/Img";
import Avatar from "../../../assets/Avatar.png";
import ChevronDown from "../../../assets/ChevronDown.svg";

function DropdownMenu() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

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
            <Image src={Avatar} alt={"avatar-img"} className={""} />
            <div className="absolute inset-0 rounded-full shadow-inner"></div>
          </div>
          <p className="text-base font-normal ml-2">Hi, Charles</p>
          <Image src={ChevronDown} alt={"chevron"} className={"ml-2"} />
        </div>
        {isOpen && (
          <div ref={modalRef} className="bg-white rounded-lg shadow-lg p-4 w-40 absolute top-11">
            <ul className="space-y-3">
              <li
                onClick={() => navigate("/profile")}
                className="cursor-pointer rounded hover:bg-gray-300 hover:text-white"
              >
                Profile
              </li>
              <li
                onClick={() => navigate("/settings")}
                className="cursor-pointer rounded hover:bg-gray-300 hover:text-white"
              >
                Settings
              </li>
              <li
                onClick={handleLogout}
                className="text-red-500 cursor-pointer rounded hover:bg-red-500 hover:text-white"
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
