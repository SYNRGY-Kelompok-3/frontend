import Breadcrumb from "src/components/atoms/Breadcrumb";
import Figure from "src/components/molecules/Figure";
import { Link } from "react-router-dom";
import Logo from "src/assets/LogoBlue.png";
import Image from "src/components/atoms/Img";

import Gambar from "src/assets/Artikel/hero-bg.jpg";
import Carousel from "src/assets/Artikel/carousel-img.jpg";
import Card from "src/assets/Artikel/card.jpg";
// import ChevronLeft from "src/assets/ChevronLeft.svg";
import ChevronRight from "src/assets/ChevronRight.svg";

function Artikel() {
  const breadcrumbSteps = [{ text: "Artikel", link: "/artikel" }, { text: "" }];

  return (
    <>
      <Breadcrumb steps={breadcrumbSteps} />
      <main className="mx-28">
        <div className="flex w-full h-[580px] mb-5 overflow-hidden rounded-xl items-center my-5">
          <div className="">
            <Figure
              src={Gambar}
              alt={"Thumbnail Artikel"}
              className={"w-full z-0 rounded-xl"}
              caption={""}
              captionClass={"text-center mb-5"}
            />
            <div className="z-10">Testasdasdadsaasda</div>
          </div>
        </div>

        {/* Carousel */}
        <article className="flex flex-col">
          <div className="self-end flex gap-x-2 items-center justify-center">
            <div className="rounded-full border h-[50px] w-[50px] flex items-center justify-center shadow-md">
              <Image src={ChevronRight} alt={"chevron"} className={""} />
            </div>
            <div className="rounded-full border h-[50px] w-[50px] flex items-center justify-center shadow-md">
              <Image src={ChevronRight} alt={"chevron"} className={""} />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <Figure
                src={Carousel}
                alt={"Thumbnail Artikel"}
                className={"w-[90%] h-[355px] overflow-hidden rounded-xl"}
                caption={""}
                captionClass={"text-center mb-5"}
              />
            </div>

            <div className="w-1/2 flex flex-col">
              <div className="my-3 text-lg flex items-center gap-x-2">
                <Link to={"/"} className=" flex items-center gap-x-2 text-[#075efd]">
                  <Image src={Logo} alt={"logo"} className={"w-[15px] h-[15px] "} />
                  <div className="font-bold">Travel.id</div>
                </Link>
                <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                <span className="text-[#1C1C1E]">10 minutes ago</span>
              </div>
              <div className="font-bold text-4xl my-5">10 Rekomendasi Tempat Wisata Di Jawa Timur</div>
              <div className="text-[#64748B] leading-8">
                Kami memahami pentingnya kualitas dan efisiensi produksi untuk mencapai tujuan bisnis. Kami
                menyediakan solusi teknologi yang terkini dan berorientasi pada klien untuk meningkatkan
                produktivitas dan mengurangi biaya produksi.
              </div>
              <div className="flex items-center gap-x-2  mt-16">
                <span className="text-[#3E7BFA]">Wisata</span>
                <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                <span className="text-[#1C1C1E]">10 min Read</span>
              </div>
            </div>
          </div>
        </article>

        {/* Cards */}
        <article>
          <div className="flex justify-between mt-5 mb-5 items-center">
            <div className="text-2xl font-bold">Postingan Terbaru</div>
            <div className="text-xl font bold text-[#3E7BFA]">Lihat lainnya</div>
          </div>
          <div className="flex flex-wrap justify-around w-full gap-6 sm:gap-x-8">
            <div className="flex-[1] rounded-lg flex flex-col">
              <Figure
                src={Card}
                alt={"Thumbnail Artikel"}
                className={"rounded-md w-full h-[250px] overflow-hidden"}
                caption={""}
                captionClass={"text-center mb-5"}
              />
              <div className="flex items-center gap-x-2 mb-3">
                <Image src={Logo} alt={"logo"} className={"w-[15px] h-[15px]"} />
                <span className="text-lg font-bold text-[#075efd]">Travel.id</span>
                <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                <div className="font-normal text-[#757575]">10 minutes read</div>
              </div>
              <div className="font-bold text-2xl mb-3">10 Rekomendasi Tempat Wisata Di Jawa Timur</div>
              <div className="font-normal text-[#757575] text-lg mb-3 text-justify">
                Kami memahami pentingnya kualitas dan efisiensi produksi untuk mencapai tujuan bisnis. Kami
                menyediakan solusi teknologi yang terkini dan berorientasi pada klien
              </div>
              <div className="flex items-center gap-x-2 font-medium">
                <span className="text-[#3E7BFA]">Wisata</span>
                <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                <span className="text-[#1C1C1E]">10 min Read</span>
              </div>
            </div>

            <div className="flex-[1] rounded-lg flex flex-col">
              <Figure
                src={Card}
                alt={"Thumbnail Artikel"}
                className={"rounded-md w-full h-[250px] overflow-hidden"}
                caption={""}
                captionClass={"text-center mb-5"}
              />
              <div className="flex items-center gap-x-2 mb-3">
                <Image src={Logo} alt={"logo"} className={"w-[15px] h-[15px]"} />
                <span className="text-lg font-bold text-[#075efd]">Travel.id</span>
                <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                <div className="font-normal text-[#757575]">10 minutes read</div>
              </div>
              <div className="font-bold text-2xl mb-3">10 Rekomendasi Tempat Wisata Di Jawa Timur</div>
              <div className="font-normal text-[#757575] text-lg mb-3 text-justify">
                Kami memahami pentingnya kualitas dan efisiensi produksi untuk mencapai tujuan bisnis. Kami
                menyediakan solusi teknologi yang terkini dan berorientasi pada klien
              </div>
              <div className="flex items-center gap-x-2 font-medium">
                <span className="text-[#3E7BFA]">Wisata</span>
                <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                <span className="text-[#1C1C1E]">10 min Read</span>
              </div>
            </div>

            <div className="flex-[1] rounded-lg flex flex-col">
              <Figure
                src={Card}
                alt={"Thumbnail Artikel"}
                className={"rounded-md w-full h-[250px] overflow-hidden"}
                caption={""}
                captionClass={"text-center mb-5"}
              />
              <div className="flex items-center gap-x-2 mb-3">
                <Image src={Logo} alt={"logo"} className={"w-[15px] h-[15px]"} />
                <span className="text-lg font-bold text-[#075efd]">Travel.id</span>
                <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                <div className="font-normal text-[#757575]">10 minutes read</div>
              </div>
              <div className="font-bold text-2xl mb-3">10 Rekomendasi Tempat Wisata Di Jawa Timur</div>
              <div className="font-normal text-[#757575] text-lg mb-3 text-justify">
                Kami memahami pentingnya kualitas dan efisiensi produksi untuk mencapai tujuan bisnis. Kami
                menyediakan solusi teknologi yang terkini dan berorientasi pada klien
              </div>
              <div className="flex items-center gap-x-2 font-medium">
                <span className="text-[#3E7BFA]">Wisata</span>
                <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                <span className="text-[#1C1C1E]">10 min Read</span>
              </div>
            </div>
          </div>
        </article>

        {/* Cards 2*/}
        <article className="my-10">
          <div className="flex justify-between mt-5 mb-5 items-center">
            <div className="text-2xl font-bold">Wisata</div>
            <div className="text-xl font bold text-[#3E7BFA]">Lihat lainnya</div>
          </div>
          <div className="flex flex-wrap justify-around w-full gap-6 sm:gap-x-8">
            {/* Revisi Card */}
            <div className="flex-[1] rounded-lg flex flex-col">
              <Figure
                src={Card}
                alt={"Thumbnail Artikel"}
                className={"rounded-md w-full h-[250px] overflow-hidden"}
                caption={""}
                captionClass={"text-center mb-5"}
              />
              <div className="flex items-center gap-x-2 mb-3">
                <Image src={Logo} alt={"logo"} className={"w-[15px] h-[15px]"} />
                <span className="text-lg font-bold text-[#075efd]">Travel.id</span>
                <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                <div className="font-normal text-[#757575]">10 minutes read</div>
              </div>
              <div className="font-bold text-2xl mb-3">10 Rekomendasi Tempat Wisata Di Jawa Timur</div>
              <div className="font-normal text-[#757575] text-lg mb-3 text-justify">
                Kami memahami pentingnya kualitas dan efisiensi produksi untuk mencapai tujuan bisnis. Kami
                menyediakan solusi teknologi yang terkini dan berorientasi pada klien
              </div>
              <div className="flex items-center gap-x-2 font-medium">
                <span className="text-[#3E7BFA]">Wisata</span>
                <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                <span className="text-[#1C1C1E]">10 min Read</span>
              </div>
            </div>

            <div className="flex-[1] rounded-lg flex flex-col">
              <Figure
                src={Card}
                alt={"Thumbnail Artikel"}
                className={"rounded-md w-full h-[250px] overflow-hidden"}
                caption={""}
                captionClass={"text-center mb-5"}
              />
              <div className="flex items-center gap-x-2 mb-3">
                <Image src={Logo} alt={"logo"} className={"w-[15px] h-[15px]"} />
                <span className="text-lg font-bold text-[#075efd]">Travel.id</span>
                <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                <div className="font-normal text-[#757575]">10 minutes read</div>
              </div>
              <div className="font-bold text-2xl mb-3">10 Rekomendasi Tempat Wisata Di Jawa Timur</div>
              <div className="font-normal text-[#757575] text-lg mb-3 text-justify">
                Kami memahami pentingnya kualitas dan efisiensi produksi untuk mencapai tujuan bisnis. Kami
                menyediakan solusi teknologi yang terkini dan berorientasi pada klien
              </div>
              <div className="flex items-center gap-x-2 font-medium">
                <span className="text-[#3E7BFA]">Wisata</span>
                <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                <span className="text-[#1C1C1E]">10 min Read</span>
              </div>
            </div>

            <div className="flex-[1] rounded-lg flex flex-col">
              <Figure
                src={Card}
                alt={"Thumbnail Artikel"}
                className={"rounded-md w-full h-[250px] overflow-hidden"}
                caption={""}
                captionClass={"text-center mb-5"}
              />
              <div className="flex items-center gap-x-2 mb-3">
                <Image src={Logo} alt={"logo"} className={"w-[15px] h-[15px]"} />
                <span className="text-lg font-bold text-[#075efd]">Travel.id</span>
                <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                <div className="font-normal text-[#757575]">10 minutes read</div>
              </div>
              <div className="font-bold text-2xl mb-3">10 Rekomendasi Tempat Wisata Di Jawa Timur</div>
              <div className="font-normal text-[#757575] text-lg mb-3 text-justify">
                Kami memahami pentingnya kualitas dan efisiensi produksi untuk mencapai tujuan bisnis. Kami
                menyediakan solusi teknologi yang terkini dan berorientasi pada klien
              </div>
              <div className="flex items-center gap-x-2 font-medium">
                <span className="text-[#3E7BFA]">Wisata</span>
                <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                <span className="text-[#1C1C1E]">10 min Read</span>
              </div>
            </div>
          </div>
        </article>

        {/* Cards 3 */}
        <article>
          <div className="flex justify-between mt-5 mb-5 items-center">
            <div className="text-2xl font-bold">Kuliner</div>
            <div className="text-xl font bold text-[#3E7BFA]">Lihat lainnya</div>
          </div>
          <div className="flex flex-wrap justify-around w-full gap-6 sm:gap-x-8">
            {/* Revisi Card */}
            <div className="flex-[1] rounded-lg flex flex-col">
              <Figure
                src={Card}
                alt={"Thumbnail Artikel"}
                className={"rounded-md w-full h-[250px] overflow-hidden"}
                caption={""}
                captionClass={"text-center mb-5"}
              />
              <div className="flex items-center gap-x-2 mb-3">
                <Image src={Logo} alt={"logo"} className={"w-[15px] h-[15px]"} />
                <span className="text-lg font-bold text-[#075efd]">Travel.id</span>
                <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                <div className="font-normal text-[#757575]">10 minutes read</div>
              </div>
              <div className="font-bold text-2xl mb-3">10 Rekomendasi Tempat Wisata Di Jawa Timur</div>
              <div className="font-normal text-[#757575] text-lg mb-3 text-justify">
                Kami memahami pentingnya kualitas dan efisiensi produksi untuk mencapai tujuan bisnis. Kami
                menyediakan solusi teknologi yang terkini dan berorientasi pada klien
              </div>
              <div className="flex items-center gap-x-2 font-medium">
                <span className="text-[#3E7BFA]">Wisata</span>
                <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                <span className="text-[#1C1C1E]">10 min Read</span>
              </div>
            </div>

            <div className="flex-[1] rounded-lg flex flex-col">
              <Figure
                src={Card}
                alt={"Thumbnail Artikel"}
                className={"rounded-md w-full h-[250px] overflow-hidden"}
                caption={""}
                captionClass={"text-center mb-5"}
              />
              <div className="flex items-center gap-x-2 mb-3">
                <Image src={Logo} alt={"logo"} className={"w-[15px] h-[15px]"} />
                <span className="text-lg font-bold text-[#075efd]">Travel.id</span>
                <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                <div className="font-normal text-[#757575]">10 minutes read</div>
              </div>
              <div className="font-bold text-2xl mb-3">10 Rekomendasi Tempat Wisata Di Jawa Timur</div>
              <div className="font-normal text-[#757575] text-lg mb-3 text-justify">
                Kami memahami pentingnya kualitas dan efisiensi produksi untuk mencapai tujuan bisnis. Kami
                menyediakan solusi teknologi yang terkini dan berorientasi pada klien
              </div>
              <div className="flex items-center gap-x-2 font-medium">
                <span className="text-[#3E7BFA]">Wisata</span>
                <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                <span className="text-[#1C1C1E]">10 min Read</span>
              </div>
            </div>

            <div className="flex-[1] rounded-lg flex flex-col">
              <Figure
                src={Card}
                alt={"Thumbnail Artikel"}
                className={"rounded-md w-full h-[250px] overflow-hidden"}
                caption={""}
                captionClass={"text-center mb-5"}
              />
              <div className="flex items-center gap-x-2 mb-3">
                <Image src={Logo} alt={"logo"} className={"w-[15px] h-[15px]"} />
                <span className="text-lg font-bold text-[#075efd]">Travel.id</span>
                <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                <div className="font-normal text-[#757575]">10 minutes read</div>
              </div>
              <div className="font-bold text-2xl mb-3">10 Rekomendasi Tempat Wisata Di Jawa Timur</div>
              <div className="font-normal text-[#757575] text-lg mb-3 text-justify">
                Kami memahami pentingnya kualitas dan efisiensi produksi untuk mencapai tujuan bisnis. Kami
                menyediakan solusi teknologi yang terkini dan berorientasi pada klien
              </div>
              <div className="flex items-center gap-x-2 font-medium">
                <span className="text-[#3E7BFA]">Wisata</span>
                <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                <span className="text-[#1C1C1E]">10 min Read</span>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

export default Artikel;
