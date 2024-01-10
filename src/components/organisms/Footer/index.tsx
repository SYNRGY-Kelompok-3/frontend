import Logo from "../../../assets/LogoBlue.png";
import Facebook from "../../../assets/Footer/Facebook F.png";
import Twitter from "../../../assets/Footer/Twitter.png";
import Instagram from "../../../assets/Footer/Instagram.png";
import Linkedin from "../../../assets/Footer/Linkedin In.png";

import Image from "../../atoms/Img";

import { Link } from "react-router-dom";

function Footer() {
    return (
        <section>
            <footer className="">
                <div className="bg-white px-[200px] py-[75px]">
                    <div className="flex flex-row gap-5">
                        <div className="basis-1/2">
                            <Link to="/" className="flex items-center">
                                <Image src={Logo} alt={"logo"} className={"w-[25px] h-[25px] mr-2"} />
                                <h1 className="text-[#075efd] font-bold text-3xl">Travel.id</h1>
                            </Link>
                            <div className="text-[#075efd] font-semibold mt-[30px]">Address:</div>
                            <p className="text-black mt-1 mb-5">Jl. Kabupaten, Nusupan, Trihanggo, Gamping, Sleman Regency,
                                Special Region of Yogyakarta 55291</p>
                            <div className="flex items-center my-3">
                                <Link to={"www.facebook.com"}><Image src={Facebook} alt={"Facebook"} className={"h-[20px] mr-5"} /></Link>
                                <Link to={"www.twitter.com"}><Image src={Twitter} alt={"Twitter"} className={"h-[20px] mr-5"} /></Link>
                                <Link to={"www.instagram.com"}><Image src={Instagram} alt={"Instagram"} className={"h-[20px] mr-5"} /></Link>
                                <Link to={"www.linkedin.com"}><Image src={Linkedin} alt={"Linkedins"} className={"h-[20px]"} /></Link>
                            </div>
                        </div>
                        <div className="basis-1/2">
                            <div className="flex flex-row">
                                <div className="basis-1/3">
                                    <h2>
                                        <Link to="/" className="self-stretch text-[#075efd] font-semibold">Travel.id</Link>
                                    </h2>
                                    <h3 className="my-3">
                                        <Link to="/tentang-kami" className="self-stretch text-black">Tentang Kami</Link>
                                    </h3>
                                    <h3 className="my-3">
                                        <Link to="/pusat-bantuan" className="self-stretch text-black">Pusat Bantuan</Link>
                                    </h3>
                                    <h3 className="my-3">
                                        <Link to="/artikel" className="self-stretch text-black">Artikel</Link>
                                    </h3>
                                </div>
                                <div className="basis-1/3">
                                    <h2 className="self-stretch text-[#075efd] font-semibold">Maskapai</h2>
                                    <h2 className="garuda_indonesia self-stretch text-black my-3">Garuda Indonesia</h2>
                                    <h2 className="citilink self-stretch text-black my-3">Citilink</h2>
                                    <h2 className="batik_air_indonesia self-stretch text-black my-3">Batik Air Indonesia</h2>
                                    <h2 className="lion_airlines text-black my-3">Lion Airlines</h2>
                                    <h2 className="airasia self-stretch text-black ">AirAsia</h2>
                                </div>
                                <div className="basis-1/3">
                                    <h2 className="self-stretch text-[#075efd] font-semibold">Kontak</h2>
                                    <h3 className="_62_085-232-521 self-stretch text-black my-3">+62 085-232-521</h3>
                                    <h3 className="travel_gmail_com self-stretch text-black my-3">travel@gmail.com</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-px bg-[#ededed] my-[20px]" />
                    <div className="flex justify-between items-center">
                        <h3 className="text-black">
                            {new Date().getFullYear()} Travel Indonesia. All right reserved.
                        </h3>
                        <div className="flex items-center">
                            <h3 className="text-black mr-5">Pemberitahuan Privasi</h3>
                            <h3 className="text-black">Terms of Service</h3>
                        </div>
                    </div>
                </div>
            </footer>
        </section >
    );
};

export default Footer;

