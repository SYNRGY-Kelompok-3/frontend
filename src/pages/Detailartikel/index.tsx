import { Link } from "react-router-dom";
import Breadcrumb from "src/components/atoms/Breadcrumb";
import Figure from "src/components/molecules/Figure";

import Gambar from "src/assets/bg.jpg";

function DetailArtikel() {
  const breadcrumbSteps = [{ text: "Artikel", link: "/artikel" }, { text: "Detail Artikel" }];

  return (
    <>
      <Breadcrumb steps={breadcrumbSteps} />
      <main className="mx-28 mt-5">
        <article>
          <header>
            <h1 className="text-5xl font-bold">10 Rekomendasi Tempat Wisata Di Jawa Timur</h1>
            <p className="my-3 text-lg">
              Published in{" "}
              <Link to={"/"} className="font-bold text-[#075efd]">
                Travel.id
              </Link>{" "}
              20 Oktober 2023
            </p>
          </header>
          <Figure
            src={Gambar}
            alt={"Thumbnail Artikel"}
            className={"w-fit rounded-xl my-5"}
            caption={"Thumbnail"}
            captionClass={"text-center mb-5"}
          />
          <article className="mx-[120px] mt-5">
            <article>
              <h2 className="text-4xl font-bold">Introduction</h2>
              <p className="text-2xl text-justify mt-3 leading-[30px]">
                Travel Indonesia merupakan platform yang menyediakan akses untuk menemukan serta membeli tiket
                pesawat dengan mudah dan cepat. Travel Indonesia percaya bahwa kepuasan bisa mendatangkan
                pengalaman yang sangat berharga. Oleh karena itu, travel indonesia dapat menemani setiap
                perjalanan anda secara nyaman dan terjamin. Didukung dengan berbagai macam pembayaran serta
                maskapai yang beragam, travel indonesia mampu menghadirkan pengalaman yang berkesan.{" "}
              </p>
              <p className="text-2xl text-justify mt-3 leading-[30px]">
                Lorem ipsum dolor sit amet consectetur. Vel ut enim cursus integer. Ac tempor feugiat non
                felis ut nisi ut mattis ipsum. Porttitor sed diam ipsum viverra amet gravida ut morbi. Platea
                volutpat ullamcorper massa neque magna amet placerat duis eget. Ut nibh enim vitae netus neque
                dui convallis purus. Sit ut commodo nec quisque ipsum. Cras ante auctor suspendisse elementum.
                Donec ante amet mi integer nisl eu vitae egestas integer. Scelerisque vestibulum ultrices nunc
                a pharetra nec. Nec vestibulum massa pretium ultricies. Enim urna tortor nam donec feugiat
                orci eget velit. Ipsum turpis suspendisse et vulputate turpis. Euismod amet ut.
              </p>
              <Figure
                src={Gambar}
                alt={"Gambar"}
                className={"w-fit rounded-xl my-5"}
                caption={"Travel.id"}
                captionClass={"text-left mb-5"}
              />
              <p className="text-2xl text-justify mt-3 leading-[30px]">
                Lorem ipsum dolor sit amet consectetur. Vel ut enim cursus integer. Ac tempor feugiat non
                felis ut nisi ut mattis ipsum. Porttitor sed diam ipsum viverra amet gravida ut morbi. Platea
                volutpat ullamcorper massa neque magna amet placerat duis eget. Ut nibh enim vitae netus neque
                dui convallis purus. Sit ut commodo nec quisque ipsum. Cras ante auctor suspendisse elementum.
                Donec ante amet mi integer nisl eu vitae egestas integer. Scelerisque vestibulum ultrices nunc
                a pharetra nec. Nec vestibulum massa pretium ultricies. Enim urna tortor nam donec feugiat
                orci eget velit. Ipsum turpis suspendisse et vulputate turpis. Euismod amet ut.
              </p>
            </article>
            <article>
              <h2 className="text-4xl font-bold mt-5">Kesimpulan</h2>
              <p className="text-2xl text-justify mt-3 leading-[30px]">
                Travel Indonesia merupakan platform yang menyediakan akses untuk menemukan serta membeli tiket
                pesawat dengan mudah dan cepat. Travel Indonesia percaya bahwa kepuasan bisa mendatangkan
                pengalaman yang sangat berharga. Oleh karena itu, travel indonesia dapat menemani setiap
                perjalanan anda secara nyaman dan terjamin. Didukung dengan berbagai macam pembayaran serta
                maskapai yang beragam, travel indonesia mampu menghadirkan pengalaman yang berkesan.{" "}
              </p>
              <p className="text-2xl text-justify mt-3 leading-[30px]">
                Lorem ipsum dolor sit amet consectetur. Vel ut enim cursus integer. Ac tempor feugiat non
                felis ut nisi ut mattis ipsum. Porttitor sed diam ipsum viverra amet gravida ut morbi. Platea
                volutpat ullamcorper massa neque magna amet placerat duis eget. Ut nibh enim vitae netus neque
                dui convallis purus. Sit ut commodo nec quisque ipsum. Cras ante auctor suspendisse elementum.
                Donec ante amet mi integer nisl eu vitae egestas integer. Scelerisque vestibulum ultrices nunc
                a pharetra nec. Nec vestibulum massa pretium ultricies. Enim urna tortor nam donec feugiat
                orci eget velit. Ipsum turpis suspendisse et vulputate turpis. Euismod amet ut.
              </p>
            </article>
          </article>
        </article>
      </main>
    </>
  );
}

export default DetailArtikel;
