import Breadcrumb from "src/components/atoms/Breadcrumb";
import Figure from "src/components/molecules/Figure";
import { Link } from "react-router-dom";
import Logo from "src/assets/LogoBlue.png";
import Image from "src/components/atoms/Img";
import { SetStateAction, useEffect, useState } from "react";
import Gambar from "src/assets/Artikel/hero-bg.jpg";
import ChevronRight from "src/assets/ChevronRight.svg";
import { ARTICLE_FILTER } from "src/constants";

import axios from "axios";
import { formatDistanceToNow } from "date-fns";

const API_ARTICLE = "https://api-artikel.fly.dev/v1/artikel";

interface Probs {
  id: number;
  title: string;
  category: string;
  content: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

function Artikel() {
  const breadcrumbSteps = [{ text: "Artikel" }];

  const [activeFilter, setActiveFilter] = useState(ARTICLE_FILTER.SEMUA);

  const totalSlides = 3;
  const [currentSlide, setCurrentSlide] = useState(0);

  const [data, setData] = useState<Probs[]>([]);
  const [terbaru, setTerbaru] = useState<Probs[]>([]);
  const [wisata, setWisata] = useState<Probs[]>([]);
  const [kuliner, setKuliner] = useState<Probs[]>([]);

  const handleFilterChange = (filter: SetStateAction<string>) => {
    setActiveFilter(filter);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const convertDate = (date: string) => {
    return formatDistanceToNow(new Date(date));
  };

  useEffect(() => {
    axios.get<Probs[]>(API_ARTICLE).then((res) => {
      const currentDate = new Date();
      const filterTerbaru = res.data.filter((item) => new Date(item.updated_at) <= currentDate);
      const filterWisata = res.data.filter((item) => item.category === "Wisata");
      const filterKuliner = res.data.filter((item) => item.category === "Kuliner");
      setData(res.data);
      setTerbaru(filterTerbaru);
      setWisata(filterWisata);
      setKuliner(filterKuliner);
    });
  }, [data, terbaru, wisata, kuliner]);

  return (
    <>
      <Breadcrumb steps={breadcrumbSteps} />
      <main className="mx-4 md:mx-28">
        <div className="relative w-full my-5 mb-5 overflow-hidden text-center rounded-xl">
          <Figure
            src={Gambar}
            alt={"Thumbnail Artikel"}
            className={"w-full h-[500px] sm:h-[580px] object-cover rounded-xl"}
            caption={""}
            captionClass={"text-center mb-5"}
          />
          <div className="absolute text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl md:w-2/3 sm:block">
            <div className="p-4 bg-white bg-opacity-20">
              <h2 className="mb-2 text-lg font-bold text-white md:text-2xl lg:text-3xl sm:text-xl md:sm:text-2xl">
                Travel Indonesia Blog
              </h2>
              <p className="text-sm md:text-base lg:text-lg sm:text-sm md:sm:text-base lg:sm:text-lg">
                Jelajahi Dunia bersama Travel Indonesia
              </p>
            </div>

            <div className="flex flex-col items-center justify-center mt-5 space-x-4 text-lg font-medium sm:flex-row sm:space-x-4">
              <button
                className={`filter-button ${
                  activeFilter === ARTICLE_FILTER.SEMUA &&
                  "active-filter bg-white bg-opacity-20 px-3 py-2 rounded-md border-solid border-2 border-white "
                }`}
                onClick={() => handleFilterChange(ARTICLE_FILTER.SEMUA)}
              >
                Semua
              </button>
              <button
                className={`filter-button ${
                  activeFilter === ARTICLE_FILTER.TERBARU &&
                  "active-filter bg-white bg-opacity-20 px-3 py-2 rounded-md border-solid border-2 border-white "
                }`}
                onClick={() => handleFilterChange(ARTICLE_FILTER.TERBARU)}
              >
                Terbaru
              </button>
              <button
                className={`filter-button ${
                  activeFilter === ARTICLE_FILTER.WISATA &&
                  "active-filter bg-white bg-opacity-20 px-3 py-2 rounded-md border-solid border-2 border-white "
                }`}
                onClick={() => handleFilterChange(ARTICLE_FILTER.WISATA)}
              >
                Wisata
              </button>
              <button
                className={`filter-button ${
                  activeFilter === ARTICLE_FILTER.KULINER &&
                  "active-filter bg-white bg-opacity-20 px-3 py-2 rounded-md border-solid border-2 border-white "
                }`}
                onClick={() => handleFilterChange(ARTICLE_FILTER.KULINER)}
              >
                Kuliner
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <article className="flex flex-col">
          <div className="flex items-center justify-end mb-4 gap-x-2 md:mb-0">
            <div
              className="rounded-full border h-[50px] w-[50px] flex items-center justify-center shadow-md cursor-pointer"
              onClick={prevSlide}
            >
              <Image src={ChevronRight} alt={"chevron"} className={"transform rotate-180"} />
            </div>
            <div
              className="rounded-full border h-[50px] w-[50px] flex items-center justify-center shadow-md cursor-pointer"
              onClick={nextSlide}
            >
              <Image src={ChevronRight} alt={"chevron"} className={""} />
            </div>
          </div>

          {/* Konten slider 1 */}
          <div>
            {data.slice(0, 1).map(({ id, title, category, content, image_url, updated_at }) => {
              return (
                <div key={id} className="flex flex-col md:flex-row">
                  {currentSlide === 0 && (
                    <div className="md:w-1/2">
                      <Figure
                        src={image_url}
                        alt={"Thumbnail Artikel"}
                        className={"w-full md:w-[90%] h-[355px] md:h-[355px] overflow-hidden rounded-xl"}
                        caption={""}
                        captionClass={"text-center mb-5"}
                      />
                    </div>
                  )}

                  <div className="flex flex-col md:w-1/2 md:ml-4">
                    {currentSlide === 0 && (
                      <>
                        <div className="flex items-center my-3 text-lg gap-x-2">
                          <Link to={"/"} className="flex items-center gap-x-2 text-[#075efd]">
                            <Image src={Logo} alt={"logo"} className={"w-[15px] h-[15px]"} />
                            <div className="font-bold">Travel.id</div>
                          </Link>
                          <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                          <span className="text-[#1C1C1E]">{convertDate(updated_at)} ago</span>
                        </div>
                        <div className="my-5 text-2xl font-bold md:text-4xl">
                          <Link to={`/artikel/${id}`}>{title}</Link>
                        </div>
                        <div className="text-[#64748B] leading-6 md:leading-8">
                          {content.substr(0, 210)}...
                        </div>
                        <div className="flex items-center mt-4 md:mt-16 gap-x-2">
                          <span className="text-[#3E7BFA]">{category}</span>
                          <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                          <span className="text-[#1C1C1E]">10 min Read</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Konten slider 2 */}
          <div>
            {data.slice(1, 2).map(({ id, title, category, content, image_url, updated_at }) => {
              return (
                <div key={id} className="flex flex-col md:flex-row">
                  {currentSlide === 1 && (
                    <div className="md:w-1/2">
                      <Figure
                        src={image_url}
                        alt={"Thumbnail Artikel"}
                        className={"w-full md:w-[90%] h-[355px] md:h-[355px] overflow-hidden rounded-xl"}
                        caption={""}
                        captionClass={"text-center mb-5"}
                      />
                    </div>
                  )}

                  <div className="flex flex-col md:w-1/2 md:ml-4">
                    {currentSlide === 1 && (
                      <>
                        <div className="flex items-center my-3 text-lg gap-x-2">
                          <Link to={"/"} className="flex items-center gap-x-2 text-[#075efd]">
                            <Image src={Logo} alt={"logo"} className={"w-[15px] h-[15px]"} />
                            <div className="font-bold">Travel.id</div>
                          </Link>
                          <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                          <span className="text-[#1C1C1E]">{convertDate(updated_at)} ago</span>
                        </div>
                        <div className="my-5 text-2xl font-bold md:text-4xl">
                          <Link to={`/artikel/${id}`}>{title}</Link>
                        </div>
                        <div className="text-[#64748B] leading-6 md:leading-8">
                          {content.substr(0, 210)}...
                        </div>
                        <div className="flex items-center mt-4 md:mt-16 gap-x-2">
                          <span className="text-[#3E7BFA]">{category}</span>
                          <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                          <span className="text-[#1C1C1E]">10 min Read</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Konten slider 3 */}
          <div>
            {data.slice(3, 4).map(({ id, title, category, content, image_url, updated_at }) => {
              return (
                <div key={id} className="flex flex-col md:flex-row">
                  {currentSlide === 2 && (
                    <div className="md:w-1/2">
                      <Figure
                        src={image_url}
                        alt={"Thumbnail Artikel"}
                        className={"w-full md:w-[90%] h-[355px] md:h-[355px] overflow-hidden rounded-xl"}
                        caption={""}
                        captionClass={"text-center mb-5"}
                      />
                    </div>
                  )}

                  <div className="flex flex-col md:w-1/2 md:ml-4">
                    {currentSlide === 2 && (
                      <>
                        <div className="flex items-center my-3 text-lg gap-x-2">
                          <Link to={"/"} className="flex items-center gap-x-2 text-[#075efd]">
                            <Image src={Logo} alt={"logo"} className={"w-[15px] h-[15px]"} />
                            <div className="font-bold">Travel.id</div>
                          </Link>
                          <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                          <span className="text-[#1C1C1E]">{convertDate(updated_at)} ago</span>
                        </div>
                        <div className="my-5 text-2xl font-bold md:text-4xl">
                          <Link to={`/artikel/${id}`}>{title}</Link>
                        </div>
                        <div className="text-[#64748B] leading-6 md:leading-8">
                          {content.substr(0, 210)}...
                        </div>
                        <div className="flex items-center mt-4 md:mt-16 gap-x-2">
                          <span className="text-[#3E7BFA]">{category}</span>
                          <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                          <span className="text-[#1C1C1E]">10 min Read</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </article>

        {/* Cards */}
        <article>
          <div className="flex items-center justify-between mt-5 mb-5">
            <div className="text-2xl font-bold">Postingan Terbaru</div>
            <div className="text-xl font bold text-[#3E7BFA]">
              <Link to={"/artikel/terbaru"}>Lihat lainnya</Link>
            </div>
          </div>
          <div className="flex flex-wrap justify-around w-full gap-6 sm:gap-x-8">
            <div className="flex-[1] rounded-lg flex flex-col">
              {terbaru.slice(0, 1).map(({ id, title, category, content, image_url, updated_at }) => {
                return (
                  <div key={id}>
                    <Figure
                      src={image_url}
                      alt={"Thumbnail Artikel"}
                      className={"rounded-md w-full h-[250px] overflow-hidden"}
                      caption={""}
                      captionClass={"text-center mb-5"}
                    />
                    <div className="flex items-center mb-3 gap-x-2">
                      <Image src={Logo} alt={"logo"} className={"w-[15px] h-[15px]"} />
                      <span className="text-lg font-bold text-[#075efd]">Travel.id</span>
                      <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                      <div className="font-normal text-[#757575]">{convertDate(updated_at)} ago</div>
                    </div>
                    <div className="mb-3 text-2xl font-bold">
                      <Link to={`/artikel/${id}`}>{title}</Link>
                    </div>
                    <div className="font-normal text-[#757575] text-lg mb-3 text-justify">
                      {content.substr(0, 160)}...
                    </div>
                    <div className="flex items-center font-medium gap-x-2">
                      <span className="text-[#3E7BFA]">{category}</span>
                      <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                      <span className="text-[#1C1C1E]">10 min Read</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex-[1] rounded-lg flex flex-col">
              {terbaru.slice(4, 5).map(({ id, title, category, content, image_url, updated_at }) => {
                return (
                  <div key={id}>
                    <Figure
                      src={image_url}
                      alt={"Thumbnail Artikel"}
                      className={"rounded-md w-full h-[250px] overflow-hidden"}
                      caption={""}
                      captionClass={"text-center mb-5"}
                    />
                    <div className="flex items-center mb-3 gap-x-2">
                      <Image src={Logo} alt={"logo"} className={"w-[15px] h-[15px]"} />
                      <span className="text-lg font-bold text-[#075efd]">Travel.id</span>
                      <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                      <div className="font-normal text-[#757575]">{convertDate(updated_at)} ago</div>
                    </div>
                    <div className="mb-3 text-2xl font-bold">
                      <Link to={`/artikel/${id}`}>{title}</Link>
                    </div>
                    <div className="font-normal text-[#757575] text-lg mb-3 text-justify">
                      {content.substr(0, 160)}...
                    </div>
                    <div className="flex items-center font-medium gap-x-2">
                      <span className="text-[#3E7BFA]">{category}</span>
                      <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                      <span className="text-[#1C1C1E]">10 min Read</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex-[1] rounded-lg flex flex-col">
              {terbaru.slice(1, 2).map(({ id, title, category, content, image_url, updated_at }) => {
                return (
                  <div key={id}>
                    <Figure
                      src={image_url}
                      alt={"Thumbnail Artikel"}
                      className={"rounded-md w-full h-[250px] overflow-hidden"}
                      caption={""}
                      captionClass={"text-center mb-5"}
                    />
                    <div className="flex items-center mb-3 gap-x-2">
                      <Image src={Logo} alt={"logo"} className={"w-[15px] h-[15px]"} />
                      <span className="text-lg font-bold text-[#075efd]">Travel.id</span>
                      <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                      <div className="font-normal text-[#757575]">{convertDate(updated_at)} ago</div>
                    </div>
                    <div className="mb-3 text-2xl font-bold">
                      <Link to={`/artikel/${id}`}>{title}</Link>
                    </div>
                    <div className="font-normal text-[#757575] text-lg mb-3 text-justify">
                      {content.substr(0, 160)}...
                    </div>
                    <div className="flex items-center font-medium gap-x-2">
                      <span className="text-[#3E7BFA]">{category}</span>
                      <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                      <span className="text-[#1C1C1E]">10 min Read</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </article>

        {/* Cards 2*/}
        <article className="my-10">
          <div className="flex items-center justify-between mt-5 mb-5">
            <div className="text-2xl font-bold">Wisata</div>
            <div className="text-xl font bold text-[#3E7BFA]">
              <Link to={"/artikel/wisata"}>Lihat lainnya</Link>
            </div>
          </div>
          <div className="flex flex-wrap justify-around w-full gap-6 sm:gap-x-8">
            {/* Revisi Card */}
            <div className="flex-[1] rounded-lg flex flex-col">
              {wisata.slice(0, 1).map(({ id, title, category, content, image_url, updated_at }) => {
                return (
                  <div key={id}>
                    <Figure
                      src={image_url}
                      alt={"Thumbnail Artikel"}
                      className={"rounded-md w-full h-[250px] overflow-hidden"}
                      caption={""}
                      captionClass={"text-center mb-5"}
                    />
                    <div className="flex items-center mb-3 gap-x-2">
                      <Image src={Logo} alt={"logo"} className={"w-[15px] h-[15px]"} />
                      <span className="text-lg font-bold text-[#075efd]">Travel.id</span>
                      <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                      <div className="font-normal text-[#757575]">{convertDate(updated_at)} ago</div>
                    </div>
                    <div className="mb-3 text-2xl font-bold">
                      <Link to={`/artikel/${id}`}>{title}</Link>
                    </div>
                    <div className="font-normal text-[#757575] text-lg mb-3 text-justify">
                      {content.substr(0, 160)}...
                    </div>
                    <div className="flex items-center font-medium gap-x-2">
                      <span className="text-[#3E7BFA]">{category}</span>
                      <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                      <span className="text-[#1C1C1E]">10 min Read</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex-[1] rounded-lg flex flex-col">
              {wisata.slice(1, 2).map(({ id, title, category, content, image_url, updated_at }) => {
                return (
                  <div key={id}>
                    <Figure
                      src={image_url}
                      alt={"Thumbnail Artikel"}
                      className={"rounded-md w-full h-[250px] overflow-hidden"}
                      caption={""}
                      captionClass={"text-center mb-5"}
                    />
                    <div className="flex items-center mb-3 gap-x-2">
                      <Image src={Logo} alt={"logo"} className={"w-[15px] h-[15px]"} />
                      <span className="text-lg font-bold text-[#075efd]">Travel.id</span>
                      <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                      <div className="font-normal text-[#757575]">{convertDate(updated_at)} ago</div>
                    </div>
                    <div className="mb-3 text-2xl font-bold">
                      <Link to={`/artikel/${id}`}>{title}</Link>
                    </div>
                    <div className="font-normal text-[#757575] text-lg mb-3 text-justify">
                      {content.substr(0, 160)}...
                    </div>
                    <div className="flex items-center font-medium gap-x-2">
                      <span className="text-[#3E7BFA]">{category}</span>
                      <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                      <span className="text-[#1C1C1E]">10 min Read</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex-[1] rounded-lg flex flex-col">
              {wisata.slice(2, 3).map(({ id, title, category, content, image_url, updated_at }) => {
                return (
                  <div key={id}>
                    <Figure
                      src={image_url}
                      alt={"Thumbnail Artikel"}
                      className={"rounded-md w-full h-[250px] overflow-hidden"}
                      caption={""}
                      captionClass={"text-center mb-5"}
                    />
                    <div className="flex items-center mb-3 gap-x-2">
                      <Image src={Logo} alt={"logo"} className={"w-[15px] h-[15px]"} />
                      <span className="text-lg font-bold text-[#075efd]">Travel.id</span>
                      <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                      <div className="font-normal text-[#757575]">{convertDate(updated_at)} ago</div>
                    </div>
                    <div className="mb-3 text-2xl font-bold">
                      <Link to={`/artikel/${id}`}>{title}</Link>
                    </div>
                    <div className="font-normal text-[#757575] text-lg mb-3 text-justify">
                      {content.substr(0, 160)}...
                    </div>
                    <div className="flex items-center font-medium gap-x-2">
                      <span className="text-[#3E7BFA]">{category}</span>
                      <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                      <span className="text-[#1C1C1E]">10 min Read</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </article>

        {/* Cards 3 */}
        <article>
          <div className="flex items-center justify-between mt-5 mb-5">
            <div className="text-2xl font-bold">Kuliner</div>
            <div className="text-xl font bold text-[#3E7BFA]">
              <Link to={"/artikel/kuliner"}>Lihat lainnya</Link>
            </div>
          </div>
          <div className="flex flex-wrap justify-around w-full gap-6 sm:gap-x-8">
            {/* Revisi Card */}
            <div className="flex-[1] rounded-lg flex flex-col">
              {kuliner.slice(0, 1).map(({ id, title, category, content, image_url, updated_at }) => {
                return (
                  <div key={id}>
                    <Figure
                      src={image_url}
                      alt={"Thumbnail Artikel"}
                      className={"rounded-md w-full h-[250px] overflow-hidden"}
                      caption={""}
                      captionClass={"text-center mb-5"}
                    />
                    <div className="flex items-center mb-3 gap-x-2">
                      <Image src={Logo} alt={"logo"} className={"w-[15px] h-[15px]"} />
                      <span className="text-lg font-bold text-[#075efd]">Travel.id</span>
                      <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                      <div className="font-normal text-[#757575]">{convertDate(updated_at)} ago</div>
                    </div>
                    <div className="mb-3 text-2xl font-bold">
                      <Link to={`/artikel/${id}`}>{title}</Link>
                    </div>
                    <div className="font-normal text-[#757575] text-lg mb-3 text-justify">
                      {content.substr(0, 160)}...
                    </div>
                    <div className="flex items-center font-medium gap-x-2">
                      <span className="text-[#3E7BFA]">{category}</span>
                      <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                      <span className="text-[#1C1C1E]">10 min Read</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex-[1] rounded-lg flex flex-col">
              {kuliner.slice(1, 2).map(({ id, title, category, content, image_url, updated_at }) => {
                return (
                  <div key={id}>
                    <Figure
                      src={image_url}
                      alt={"Thumbnail Artikel"}
                      className={"rounded-md w-full h-[250px] overflow-hidden"}
                      caption={""}
                      captionClass={"text-center mb-5"}
                    />
                    <div className="flex items-center mb-3 gap-x-2">
                      <Image src={Logo} alt={"logo"} className={"w-[15px] h-[15px]"} />
                      <span className="text-lg font-bold text-[#075efd]">Travel.id</span>
                      <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                      <div className="font-normal text-[#757575]">{convertDate(updated_at)} ago</div>
                    </div>
                    <div className="mb-3 text-2xl font-bold">
                      <Link to={`/artikel/${id}`}>{title}</Link>
                    </div>
                    <div className="font-normal text-[#757575] text-lg mb-3 text-justify">
                      {content.substr(0, 160)}...
                    </div>
                    <div className="flex items-center font-medium gap-x-2">
                      <span className="text-[#3E7BFA]">{category}</span>
                      <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                      <span className="text-[#1C1C1E]">10 min Read</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex-[1] rounded-lg flex flex-col">
              {kuliner.slice(2, 3).map(({ id, title, category, content, image_url, updated_at }) => {
                return (
                  <div key={id}>
                    <Figure
                      src={image_url}
                      alt={"Thumbnail Artikel"}
                      className={"rounded-md w-full h-[250px] overflow-hidden"}
                      caption={""}
                      captionClass={"text-center mb-5"}
                    />
                    <div className="flex items-center mb-3 gap-x-2">
                      <Image src={Logo} alt={"logo"} className={"w-[15px] h-[15px]"} />
                      <span className="text-lg font-bold text-[#075efd]">Travel.id</span>
                      <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                      <div className="font-normal text-[#757575]">{convertDate(updated_at)} ago</div>
                    </div>
                    <div className="mb-3 text-2xl font-bold">
                      <Link to={`/artikel/${id}`}>{title}</Link>
                    </div>
                    <div className="font-normal text-[#757575] text-lg mb-3 text-justify">
                      {content.substr(0, 160)}...
                    </div>
                    <div className="flex items-center font-medium gap-x-2">
                      <span className="text-[#3E7BFA]">{category}</span>
                      <div className="h-[5px] w-[5px] rounded-full bg-[#334155]"></div>
                      <span className="text-[#1C1C1E]">10 min Read</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

export default Artikel;
