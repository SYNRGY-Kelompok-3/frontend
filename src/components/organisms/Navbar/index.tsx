import Logo from "../../../assets/LogoBlue.png";

import Button from "../../atoms/Button";
import Image from "../../atoms/Img";

function Navbar() {
    return (
        <>
            <section>
                <nav className="flex justify-between items-center px-12 py-5 shadow">
                    <div className="flex items-center">
                        <Image src={Logo} alt={"logo"} className="w-[21px] h-[21px]"/>
                        <h1 className="font-bold text-2xl text-[#3e7bfa] ml-2">Travel.id</h1>
                    </div>
                    <div className="flex">
                        <h1 className="font-semibold text-sm mx-2">Home</h1>
                        <h1 className="font-semibold text-sm mx-2">About Us</h1>
                        <h1 className="font-semibold text-sm mx-2">Contact Us</h1>
                        <h1 className="font-semibold text-sm mx-2">Article</h1>
                    </div>
                    <div>
                        <Button className={"font-medium text-sm mr-5"} content={"Daftar Sekarang"}/>
                        <Button className={"bg-sky-600 text-white font-medium text-sm py-2 px-3 rounded-md"} content={"Masuk"} />
                    </div>
                </nav>
            </section>
        </>
    );
}

export default Navbar;