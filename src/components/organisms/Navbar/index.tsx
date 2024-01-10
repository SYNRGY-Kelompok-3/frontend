import { NavLink, useNavigate } from "react-router-dom";

import Logo from "src/assets/Logo.png";
import LogoBlue from "src/assets/LogoBlue.png";

import Navmenu from "src/components/molecules/Navmenu";

import Button from "src/components/atoms/Button";
import Image from "src/components/atoms/Img";

function Navbar({ bg = "bg-transparent" }: any) {
    const navigate = useNavigate();

    return (
        <>
            <section className={bg}>
                <nav className="flex justify-between items-center px-28 py-5">
                    <NavLink to="/" className="flex items-center">
                        <Image src={(bg === "bg-transparent" ? Logo : LogoBlue)} alt={"logo"} className={"w-[25px] h-[25px]"} />
                        <h1 className={`${bg === "bg-transparent" ? "text-white" : "text-[#075efd]"} font-bold text-3xl ml-2`}>Travel.id</h1>
                    </NavLink>
                    <div className="flex gap-1">
                        <Navmenu bg={bg} />
                    </div>
                    <div>
                        <Button onClick={() => navigate("/register")} type={"button"} className={`${bg === "bg-transparent" ? "text-white hover:bg-slate-700" : "text-black hover:text-white hover:bg-blue-700"} font-medium text-lg mr-5 py-2 px-4 rounded-md `} content={"Daftar Sekarang"} />
                        <Button onClick={() => navigate("/login")} type={"button"} className={"bg-blue-600 text-white font-medium text-lg py-2 px-4 rounded-md hover:bg-blue-700"} content={"Masuk"} />
                    </div>
                </nav>
            </section>
        </>
    );
};


export default Navbar;
