import { Link, useNavigate } from "react-router-dom";

import Logo from "../../../assets/Logo.png";

import Navmenu from "../../molecules/Navmenu";

import Button from "../../atoms/Button";
import Image from "../../atoms/Img";

function Navbar() {
    const navigate = useNavigate();

    return (
        <>
            <section className="bg-transparent">
                <nav className="flex justify-between items-center px-28 py-5">
                    <Link to="/" className="flex items-center">
                        <Image src={Logo} alt={"logo"} className={"w-[25px] h-[25px]"} />
                        <h1 className="font-bold text-3xl ml-2">Travel.id</h1>
                    </Link>
                    <div className="flex gap-1">
                        <Navmenu />
                    </div>
                    <div>
                        <Button onClick={() => navigate("/register")} type={"button"} className={"font-medium text-lg mr-5 py-2 px-4 rounded-md hover:bg-slate-700"} content={"Daftar Sekarang"} />
                        <Button onClick={() => navigate("/login")} type={"button"} className={"bg-blue-600 text-white font-medium text-lg py-2 px-4 rounded-md hover:bg-blue-700"} content={"Masuk"} />
                    </div>
                </nav>
            </section>
        </>
    );
};

export default Navbar;
