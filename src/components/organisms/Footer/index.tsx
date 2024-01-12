import Logo from "src/assets/LogoBlue.png";
import Facebook from "src/assets/Footer/Facebook F.png";
import Twitter from "src/assets/Footer/Twitter.png";
import Instagram from "src/assets/Footer/Instagram.png";
import Linkedin from "src/assets/Footer/Linkedin In.png";

import Image from "src/components/atoms/Img";

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
                <div className="text-[#075efd] font-bold text-3xl">Travel.id</div>
              </Link>
              <div className="text-[#075efd] font-semibold mt-[30px]">Address:</div>
              <div className="text-black mt-1 mb-5">
                Jl. Kabupaten, Nusupan, Trihanggo, Gamping, Sleman Regency, Special Region of Yogyakarta 55291
              </div>
              <div className="flex items-center my-3">
                <Link to={"www.facebook.com"}>
                  <Image src={Facebook} alt={"Facebook"} className={"h-[20px] mr-5"} />
                </Link>
                <Link to={"www.twitter.com"}>
                  <Image src={Twitter} alt={"Twitter"} className={"h-[20px] mr-5"} />
                </Link>
                <Link to={"www.instagram.com"}>
                  <Image src={Instagram} alt={"Instagram"} className={"h-[20px] mr-5"} />
                </Link>
                <Link to={"www.linkedin.com"}>
                  <Image src={Linkedin} alt={"Linkedins"} className={"h-[20px]"} />
                </Link>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="flex flex-row">
                <div className="basis-1/3">
                  <div>
                    <Link to="/" className="self-stretch text-[#075efd] font-semibold">
                      Travel.id
                    </Link>
                  </div>
                  <div className="my-3">
                    <Link to="/tentang-kami" className="self-stretch text-black">
                      Tentang Kami
                    </Link>
                  </div>
                  <div className="my-3">
                    <Link to="/pusat-bantuan" className="self-stretch text-black">
                      Pusat Bantuan
                    </Link>
                  </div>
                  <div className="my-3">
                    <Link to="/artikel" className="self-stretch text-black">
                      Artikel
                    </Link>
                  </div>
                </div>
                <div className="basis-1/3">
                  <div className="self-stretch text-[#075efd] font-semibold">Maskapai</div>
                  <div className="garuda_indonesia self-stretch text-black my-3">Garuda Indonesia</div>
                  <div className="citilink self-stretch text-black my-3">Citilink</div>
                  <div className="batik_air_indonesia self-stretch text-black my-3">Batik Air Indonesia</div>
                  <div className="lion_airlines text-black my-3">Lion Airlines</div>
                  <div className="airasia self-stretch text-black ">AirAsia</div>
                </div>
                <div className="basis-1/3">
                  <div className="self-stretch text-[#075efd] font-semibold">Kontak</div>
                  <div className="_62_085-232-521 self-stretch text-black my-3">+62 085-232-521</div>
                  <div className="travel_gmail_com self-stretch text-black my-3">travel@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-px bg-[#ededed] my-[20px]" />
          <div className="flex justify-between items-center">
            <div className="text-black">{new Date().getFullYear()} Travel Indonesia. All right reserved.</div>
            <div className="flex items-center">
              <div className="text-black mr-5">Pemberitahuan Privasi</div>
              <div className="text-black">Terms of Service</div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
