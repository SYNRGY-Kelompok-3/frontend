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
        <header>
          <h1 className="text-4xl font-bold">10 Rekomendasi Tempat Wisata Di Jawa Timur</h1>
          <p className="my-3 text-lg">
            Published in{" "}
            <Link to={"/"} className="font-bold text-[#075efd]">
              Travel.id
            </Link>{" "}
            20 Oktober 2023
          </p>
        </header>
        <Figure src={Gambar} alt={"Gambar"} className={"w-fit rounded-xl"} caption={"Travel.id"} />
      </main>
    </>
  );
}

export default DetailArtikel;
