import Logo from "../../../assets/LogoBlue.png";
import Image from "../../atoms/Img";
import DropdownMenu from "../Dropdown";
import Notification from "../Notification";

function NavbarLogin() {
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
                    <div className="flex">
                        <Notification />
                        <DropdownMenu />
                    </div>
                </nav>
            </section>
        </>
    );
}

export default NavbarLogin;