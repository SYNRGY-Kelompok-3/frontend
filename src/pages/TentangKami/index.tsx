import Breadcrumb from "src/components/atoms/Breadcrumb";
import Figure from "src/components/molecules/Figure";

const TentangKami = () => {
  const breadcrumbSteps = [{ text: "Tentang Kami" }];

  return (
    <>
      <Breadcrumb steps={breadcrumbSteps} />
      <main className="mx-4 md:mx-28">
        <div className="relative w-full my-5 mb-5 overflow-hidden text-center rounded-xl">
          <Figure
            src="https://i.ibb.co/LzK5QZv/tentang-Kami-bg.jpg"
            alt={"Thumbnail Tentang Kami"}
            className={"w-full h-[400px] sm:h-[580px] object-cover rounded-xl"}
            caption={""}
            captionClass={"text-center mb-5"}
          />

          <div className="absolute text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl md:w-2/3 sm:block">
            <div className="p-4 bg-white bg-opacity-20">
              <h2 className="mb-2 text-lg font-bold md:text-2xl lg:text-3xl sm:text-xl md:sm:text-2xl">
                Perjalanan Travel Indonesia
              </h2>
              <p className="text-sm md:text-base lg:text-lg sm:text-sm md:sm:text-base lg:sm:text-lg">
                Mengenal orang dibalik layar travel indonesia dalam meraih pencapaian
              </p>
            </div>
          </div>
        </div>

        <div className="container max-w-screen-xl mx-auto md:justify-center">
          <article className="mx-auto md:mx-[120px] mt-5">
            <div className="mt-8 font-medium">
              <span className="px-2 py-1 text-blue-700 bg-blue-100 rounded">Tentang Kami</span>
            </div>

            <article className="mt-8 mb-10 md:mt-10">
              <h3 className="text-lg font-bold text-center md:text-xl lg:text-2xl md:text-left">
                <span className="text-gray-800">Perusahaan </span>
                <span className="text-blue-700">Travel Indonesia</span>
              </h3>
              <div className="mt-3 text-base text-justify">
                <p className="mb-3 text-gray-500">
                  Travel Indonesia merupakan platform yang menyediakan akses untuk menemukan serta membeli
                  tiket pesawat dengan mudah dan cepat. Travel Indonesia percaya bahwa kepuasan bisa
                  mendatangkan pengalaman yang sangat berharga. Oleh karena itu, travel indonesia dapat
                  menemani setiap perjalanan anda secara nyaman dan terjamin. Didukung dengan berbagai macam
                  pembayaran serta maskapai yang beragam, travel indonesia mampu menghadirkan pengalaman yang
                  berkesan.
                </p>
                <p className="mb-3 text-gray-500">
                  Travel.id juga memberikan penawaran yang sangat beragam, dimulai dari berbagai pilihan
                  maskapai terbaik di Indonesia yang dapat dipilih oleh kamu. Artikel rekomendasi tempat yang
                  bisa kamu kunjungi dan memilih tempat duduk sesuai kebutuhan kamu dengan hanya sekali
                  pemesanan. Keamanan dan kenyamanan kamu adalah tujuan kami oleh sebab itu kamu tidak perlu
                  khawatir untuk dapat bertransaksi di Travel.id karena Travel.id memiliki layanan customer
                  service 24/7 dan juga keamanan platform yang terbaik.
                </p>
              </div>
            </article>

            <article className="mt-8 mb-10 md:mt-10">
              <h3 className="text-lg font-bold text-center md:text-xl lg:text-2xl md:text-left">
                <span className="text-gray-800">Visi Misi </span>
                <span className="text-blue-700">Travel Indonesia</span>
              </h3>
              <div className="mt-3 text-base text-justify">
                <ul className="flex flex-col p-0 m-0 list-none">
                  <li className="flex items-start mb-3 text-gray-500">
                    <span className="mr-2 text-blue-700">&#8226;</span> Memberikan kemudahan kepada konsumen
                    dalam layanan secara efektif dan efisien.
                  </li>
                  <li className="flex items-start mb-3 text-gray-500">
                    <span className="mr-2 text-blue-700">&#8226;</span> Menjadi akomodasi akses online travel
                    booking terbaik melalui web dan aplikasi mobile.
                  </li>
                  <li className="flex items-start mb-3 text-gray-500">
                    <span className="mr-2 text-blue-700">&#8226;</span> Menjadi perusahaan tours & travel
                    online terbaik di Indonesia dengan selalu memberikan kepuasan pelayanan dan manfaat kepada
                    konsumen.
                  </li>
                </ul>
              </div>
            </article>

            <article className="mt-8 mb-10 md:mt-10">
              <h3 className="text-lg font-bold text-center md:text-xl lg:text-2xl md:text-left">
                <span className="text-gray-800">Lokasi </span>
                <span className="text-blue-700">Travel Indonesia</span>
              </h3>
              <div className="mt-3 text-base text-justify">
                <p className="mb-6 text-gray-500">
                  Lokasi kantor pusat Travel.id berada di Daerah Istimewa Yogyakarta
                </p>
              </div>
              <Figure
                src={"https://i.ibb.co/S7fxj8Z/peta-Indonesia.jpg"}
                alt={"Lokasi Travel Indonesia"}
                className={"w-full md:w-fit rounded-xl my-5 mx-auto md:mx-0"}
              />
            </article>
          </article>
        </div>
      </main>
    </>
  );
};

export default TentangKami;
