import { NavLink, useNavigate } from "react-router-dom";

import Logo from "../../../assets/Logo.png";
import LogoBlue from "../../../assets/LogoBlue.png";

import Navmenu from "../../molecules/Navmenu";

import Button from "../../atoms/Button";
import Image from "../../atoms/Img";

function Navbar({ bg = "bg-transparent" }: any) {
    const navigate = useNavigate();

    return (
        <>
            <section className={bg}>
                <nav className="flex justify-between items-center px-28 py-5">
                    <NavLink to="/" className="flex items-center">
                        <Image src={(bg === "bg-white" ? LogoBlue : Logo)} alt={"logo"} className={"w-[25px] h-[25px]"} />
                        <div className={`${bg === "bg-white" ? "text-[#075efd]" : "text-white"} font-bold text-3xl ml-2`}>Travel.id</div>
                    </NavLink>
                    <div className="flex gap-1">
                        <Navmenu bg={bg} />
                    </div>
                    <div>
                        <Button onClick={() => navigate("/register")} type={"button"} className={`${bg === "bg-white" ? "text-black hover:text-white hover:bg-blue-700" : "text-white hover:bg-slate-700"} font-medium text-lg mr-5 py-2 px-4 rounded-md `} content={"Daftar Sekarang"} />
                        <Button onClick={() => navigate("/login")} type={"button"} className={"bg-blue-600 text-white font-medium text-lg py-2 px-4 rounded-md hover:bg-blue-700"} content={"Masuk"} />
                    </div>
                </nav>
            </section>
        </>
    );
};

export default Navbar;
