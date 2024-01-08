import { Link, useNavigate } from "react-router-dom";

import Logo from "../../../assets/Logo.png";

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
                    <div className="flex">
                        <div className="py-2 px-3 rounded-md bg-transparent hover:bg-slate-700">
                            <Link to="/" className="font-semibold text-lg px-2">Beranda</Link>
                        </div>
                        <div className="py-2 px-3 rounded-md bg-transparent hover:bg-slate-700">
                            <Link to="/tentang-kami" className="font-semibold text-lg px-2">Tentang Kami</Link>
                        </div>
                        <div className="py-2 px-3 rounded-md bg-transparent hover:bg-slate-700">
                            <Link to="/artikel" className="font-semibold text-lg px-2">Artikel</Link>
                        </div>
                        <div className="py-2 px-3 rounded-md bg-transparent hover:bg-slate-700">
                            <Link to="/pusat-bantuan" className="font-semibold text-lg px-2">Pusat Bantuan</Link>
                        </div>
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
