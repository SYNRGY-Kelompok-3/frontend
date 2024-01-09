import { useState } from "react";
import Image from "../../atoms/Img";
import Bell from "../../../assets/Bell.svg";

function Notification() {
    const [isOpen, setIsOpen] = useState(false);

    const openDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className=" flex items-center mr-5">
                <div onClick={openDropdown} className="relative cursor-pointer">
                    <Image src={Bell} alt={"bell"} className={""} />
                </div>
                {isOpen && (
                    <div className="bg-white shadow-lg p-4 w-40 absolute top-12">
                        <ul>
                            <li className="p-2 cursor-pointer">Notification</li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}

export default Notification;