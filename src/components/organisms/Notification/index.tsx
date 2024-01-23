import { useState, useEffect, useRef } from "react";
import Image from "src/components/atoms/Img";
import Bell from "src/assets/Bell.svg";

function Notification() {
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

  return (
    <>
      <div className="flex items-center mr-5">
        <div ref={iconRef} onClick={handleIconClick} className="relative cursor-pointer">
          <Image src={Bell} alt={"bell"} className={""} />
        </div>
        {isOpen && (
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-lg p-4 w-[200px] absolute top-[70px] right-[190px]"
          >
            <ul className="space-y-3">
              <li className="cursor-pointer">Notification</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Notification;
