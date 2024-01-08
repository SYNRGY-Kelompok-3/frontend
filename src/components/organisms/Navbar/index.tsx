import { Link, useNavigate } from "react-router-dom";

import Logo from "../../../assets/Logo.png";

import Button from "../../atoms/Button";
import Image from "../../atoms/Img";

function Navbar() {
    const navigate = useNavigate();

    return (
        <>
            <section>
                <nav className="flex justify-between items-center mx-28 my-8">
                    <Link to="/" className="flex items-center">
                        <Image src={Logo} alt={"logo"} className={"w-[25px] h-[25px]"} />
                        <h1 className="font-bold text-3xl ml-2">Travel.id</h1>
                    </Link>
                    <div className="flex">
                        <Link to="/" className="font-semibold text-lg mx-2">Beranda</Link>
                        <Link to="/tentang-kami" className="font-semibold text-lg mx-2">Tentang Kami</Link>
                        <Link to="/artikel" className="font-semibold text-lg mx-2">Artikel</Link>
                        <Link to="/pusat-bantuan" className="font-semibold text-lg mx-2">Pusat Bantuan</Link>
                    </div>
                    <div>
                        <Button onClick={() => navigate("/register")} type={"button"} className={"font-medium text-lg mr-5"} content={"Daftar Sekarang"} />
                        <Button onClick={() => navigate("/login")} type={"button"} className={"bg-sky-600 text-white font-medium text-lg py-2 px-4 rounded-md"} content={"Masuk"} />
                    </div>
                </nav>
            </section>
        </>
    );
};

export default Navbar;
