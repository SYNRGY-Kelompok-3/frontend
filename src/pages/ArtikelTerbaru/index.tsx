import Breadcrumb from "src/components/atoms/Breadcrumb";
import Figure from "src/components/molecules/Figure";
import Image from "src/components/atoms/Img";
import Logo from "src/assets/LogoBlue.png";

import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

function ArtikelTerbaru() {
  const breadcrumbSteps = [{ text: "Artikel", link: "/artikel" }, { text: "Terbaru" }];

  const [terbaru, setTerbaru] = useState<Probs[]>([]);

  const convertDate = (date: string) => {
    return formatDistanceToNow(new Date(date));
  };

  useEffect(() => {
    axios.get<Probs[]>(API_ARTICLE).then((res) => {
      const currentDate = new Date();
      const filterTerbaru = res.data.filter((item) => new Date(item.updated_at) <= currentDate);
      setTerbaru(filterTerbaru);
    });
  }, [terbaru]);

  return (
    <>
      <Breadcrumb steps={breadcrumbSteps} />
      <main className="mx-4 md:mx-28">
        <article>
          <div className="flex items-center justify-between mt-5 mb-5">
            <div className="text-2xl font-bold">Terbaru</div>
          </div>
          <div className="flex flex-wrap justify-around w-full gap-6 sm:gap-x-8">
            {/* Revisi Card */}
            <div className="flex-[1] rounded-lg flex flex-col">
              {terbaru.map(({ id, title, category, content, image_url, updated_at }) => {
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
              {terbaru.map(({ id, title, category, content, image_url, updated_at }) => {
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
              {terbaru.map(({ id, title, category, content, image_url, updated_at }) => {
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

export default ArtikelTerbaru;
