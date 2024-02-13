import { Link, useParams } from "react-router-dom";
import Breadcrumb from "src/components/atoms/Breadcrumb";
import Figure from "src/components/molecules/Figure";

import { useEffect, useState } from "react";
import axios from "axios";

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

function DetailArtikel() {
  const breadcrumbSteps = [{ text: "Artikel", link: "/artikel" }, { text: "Detail Artikel" }];

  const { id } = useParams() || {};
  const [dataDetail, setDataDetail] = useState<Probs[]>([]);

  useEffect(() => {
    if (id) {
      axios.get<Probs[]>(`${API_ARTICLE}/${id}`).then((res) => {
        setDataDetail(res.data);
      });
    }
  }, [id]);

  const convertDate = (date: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Date(date).toLocaleDateString("id-ID", options);
  };

  return (
    <>
      <Breadcrumb steps={breadcrumbSteps} />
      <main className="mx-8 sm:mx-10 xl:mx-28 mt-5">
        {dataDetail.map(({ id, title, content, image_url, updated_at }) => {
          return (
            <article key={id}>
              <header>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
                <p className="my-1 sm:my-2 text-sm md:text-md lg:text-lg">
                  Published in{" "}
                  <Link to={"/"} className="font-bold text-[#075efd]">
                    Travel.id
                  </Link>{" "}
                  {convertDate(updated_at)}
                </p>
              </header>
              <div className="flex justify-center">
                <Figure
                  src={image_url}
                  alt={"Thumbnail Artikel"}
                  className={"w-fit rounded-xl my-5"}
                  caption={"Thumbnail"}
                  captionClass={"text-center mb-5"}
                />
              </div>
              <article className="lg:mx-[120px] mt-5">
                <article>
                  <h2 className="text-xl md:text-3xl xl:text-4xl font-bold">Introduction</h2>
                  <p className="text-sm sm:text-lg md:text-xl xl:text-2xl text-justify mt-3 leading-[20px] sm:leading-[30px]">
                    {content}
                  </p>
                  <p className="text-sm sm:text-lg md:text-xl xl:text-2xl text-justify mt-3 leading-[20px] sm:leading-[30px]"></p>
                  <Figure
                    src={image_url}
                    alt={"Gambar"}
                    className={"w-fit rounded-xl my-5"}
                    caption={"Travel.id"}
                    captionClass={"text-left mb-5"}
                  />
                  <p className="text-sm sm:text-lg md:text-xl xl:text-2xl text-justify mt-3 leading-[20px] sm:leading-[30px]"></p>
                </article>
                <article>
                  <h2 className="text-xl md:text-3xl xl:text-4xl font-bold mt-5">Kesimpulan</h2>
                  <p className="text-sm sm:text-lg md:text-xl xl:text-2xl text-justify mt-3 leading-[20px] sm:leading-[30px]">
                    Travel Indonesia merupakan platform yang menyediakan akses untuk menemukan serta membeli
                    tiket pesawat dengan mudah dan cepat. Travel Indonesia percaya bahwa kepuasan bisa
                    mendatangkan pengalaman yang sangat berharga. Oleh karena itu, travel indonesia dapat
                    menemani setiap perjalanan anda secara nyaman dan terjamin. Didukung dengan berbagai macam
                    pembayaran serta maskapai yang beragam, travel indonesia mampu menghadirkan pengalaman
                    yang berkesan.{" "}
                  </p>
                  <p className="text-sm sm:text-lg md:text-xl xl:text-2xl text-justify mt-3 leading-[20px] sm:leading-[30px]"></p>
                </article>
              </article>
            </article>
          );
        })}
      </main>
    </>
  );
}

export default DetailArtikel;
