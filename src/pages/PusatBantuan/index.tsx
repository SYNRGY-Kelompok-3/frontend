/* eslint-disable @typescript-eslint/no-explicit-any */
import Breadcrumb from "src/components/atoms/Breadcrumb";
import Figure from "src/components/molecules/Figure";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

const PusatBantuan = () => {
  const breadcrumbSteps = [{ text: "Pusat Bantuan" }];
  const [accordionOpen, setAccordionOpen] = useState([false, false, false, false, false, false]);

  const toggleAccordion = (index: number) => (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault(); // Menghindari navigasi jika elemen seperti <a> digunakan
    setAccordionOpen((prevAccordionOpen) => {
      const newAccordionOpen = [...prevAccordionOpen];
      newAccordionOpen[index] = !newAccordionOpen[index];
      return newAccordionOpen;
    });
  };

  return (
    <>
      <Breadcrumb steps={breadcrumbSteps} />
      <main className="mx-4 md:mx-28">
        {/* Hero Section */}
        <div className="relative w-full my-5 mb-5 overflow-hidden text-center rounded-xl">
          <Figure
            src="https://i.ibb.co/tzF9sjs/hero-pusatbantuan.png"
            alt={"Thumbnail Pusat Bantuan"}
            className={"w-full h-[400px] sm:h-[580px] object-cover rounded-xl"}
            caption={""}
            captionClass={"text-center mb-5"}
          />

          <div className="absolute text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl md:w-2/3 sm:block">
            <div className="p-4 bg-white bg-opacity-20">
              <h2 className="mb-2 text-lg font-bold text-white md:text-2xl lg:text-3xl sm:text-xl md:sm:text-2xl">
                Pusat Bantuan
              </h2>
              <p className="text-sm font-bold md:text-base lg:text-lg sm:text-sm md:sm:text-base lg:sm:text-lg">
                Temukan Jawaban Kamu Disini
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="container mt-8 mb-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Text */}
            <div className="md:col-span-1">
              <span className="px-2 py-1 text-blue-700 bg-blue-100 rounded">FAQ</span>
              <h3 className="mt-4 text-lg font-bold text-center md:text-xl lg:text-2xl md:text-left">
                <span className="text-gray-800">Pertanyaan yang </span>
                <span className="text-blue-700">Sering Diajukan</span>
              </h3>
              <p className="mt-4 text-base leading-6 text-gray-500">
                Jelajahi informasi tentang maskapai, destinasi, dan proses penerbangan untuk memahami lebih
                lanjut tentang pengalaman menggunakan Travel.id.
              </p>
            </div>

            {/* Accordion FAQ */}
            <div className="md:col-span-1">
              <details className="px-4 py-3 rounded-md shadow-lg" open={accordionOpen[0]}>
                <summary
                  className="flex items-center justify-between mb-3 outline-none cursor-pointer"
                  onClick={toggleAccordion(0)}
                >
                  <h2 className="text-base font-bold md:text-xl">
                    <span className="text-gray-800">Apa itu </span>
                    <span className="text-blue-700">travel.id</span>
                    <span className="text-gray-800">?</span>
                  </h2>
                  {accordionOpen[0] ? (
                    <ChevronUp size={24} className="ml-2 text-white bg-blue-500 rounded-md" />
                  ) : (
                    <ChevronDown size={24} className="ml-2 text-white bg-blue-500 rounded-md" />
                  )}
                </summary>

                <div className="flex gap-4 mt-4 mb-2">
                  {/* Konten */}
                  <div className="flitems-center">
                    <p className="text-gray-500">
                      Travel.id atau Travel Indonesia adalah sebuah platform yang dimana menyediakan untuk
                      pembelian tiket pesawat secara online yang memberikan service layanan terbaik yang bisa
                      kamu dapatkan. Tidak hanya itu travel.id memberikan penawaran yang sangat beragam,
                      dimulai dari berbagai pilihan maskapai terbaik di Indonesia yang dapat dipilih oleh
                      kamu, Ada artikel rekomendasi tempat yang bisa kamu kunjungi, dan memilih tempat duduk
                      sesuai kebutuhan kamu dengan hanya sekali pemesanan.
                    </p>
                    <p className="mt-3 text-gray-500">
                      Keamanan dan kenyamanan kamu adalah tujuan kami oleh sebab itu kamu tidak perlu khawatir
                      untuk dapat bertransaksi di Travel.id karena Travel.id memiliki layanan customer service
                      24/7, dan juga keamanan platform yang terbaik.
                    </p>
                    <p className="mt-3 text-gray-500">
                      Jadi tunggu apalagi ayo rencanakan perjalananmu dengan memesan tiket melalui Travel.id
                    </p>
                  </div>
                </div>
              </details>

              <details className="px-4 py-3 mt-3 rounded-md shadow-lg" open={accordionOpen[1]}>
                <summary
                  className="flex items-center justify-between mb-3 outline-none cursor-pointer"
                  onClick={toggleAccordion(1)}
                >
                  <h2 className="w-5/6 text-base font-bold md:text-xl text">
                    <span className="text-gray-800">
                      Jika saya memiliki kendala terhadap pesanan saya, kemana saya harus menghubungi?
                    </span>
                  </h2>
                  {accordionOpen[1] ? (
                    <ChevronUp size={24} className="ml-2 text-white bg-blue-500 rounded-md" />
                  ) : (
                    <ChevronDown size={24} className="ml-2 text-white bg-blue-500 rounded-md" />
                  )}
                </summary>

                <div className="flex gap-4 mt-4 mb-2">
                  {/* Konten*/}
                  <div className="flitems-center">
                    <p className="text-gray-500">
                      Jika kamu memiliki kendala kamu dapat menghubungi kami di call center kami di nomor{" "}
                      <span className="text-blue-500">
                        <a href="https://wa.me/6285267301444">+6285267301444</a>
                      </span>{" "}
                      atau email kami{" "}
                      <span className="text-blue-500 underline">
                        <a href="mailto:travelidcenter@gmail.com">travelidcenter@gmail.com</a>
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </details>

              <details className="px-4 py-3 mt-3 rounded-md shadow-lg" open={accordionOpen[2]}>
                <summary
                  className="flex items-center justify-between mb-3 outline-none cursor-pointer"
                  onClick={toggleAccordion(2)}
                >
                  <h2 className="w-5/6 text-base font-bold md:text-xl text">
                    <span className="text-gray-800">Bagaimana cara melakukan pemesanan tiket pesawat?</span>
                  </h2>
                  {accordionOpen[2] ? (
                    <ChevronUp size={24} className="ml-2 text-white bg-blue-500 rounded-md" />
                  ) : (
                    <ChevronDown size={24} className="ml-2 text-white bg-blue-500 rounded-md" />
                  )}
                </summary>

                <div className="flex gap-4 mt-4 mb-2">
                  {/* Konten*/}
                  <div className="flitems-center">
                    <p className="text-gray-500">
                      Sebelum melakukan pemesanan tiket mohon untuk dapat melakukan registrasi dan login
                      terlebih dahulu pada halaman{" "}
                      <span>
                        <a href="/register" className="text-blue-500 underline">
                          ini
                        </a>
                      </span>
                      . Pemesanan tiket pesawat dapat kamu akses dengan mudah:
                    </p>
                    <ul className="pl-6 mt-3 text-gray-500 list-disc">
                      <li>
                        Masuk ke{" "}
                        <span>
                          <a
                            href="https://booking-travel-teal.vercel.app/"
                            className="text-blue-500 underline"
                          >
                            website
                          </a>
                        </span>{" "}
                        lalu isi data yang diminta seperti kota asal dan tujuan, tanggal pergi dan pulang,
                        Jumlah penumpang, dan kelas penerbangan lalu klik “cari tiket”
                      </li>
                      <li className="mt-3">
                        Lalu akan muncul list penerbangan yang sesuai dengan data yang kamu inginkan
                        sebelumnya, pilihlah penerbangan yang paling sesuai dengan kamu. Lalu klik “Lihat
                        detail” akan muncul detail penerbangan dari maskapai yang kamu pilih. Untuk memilih
                        penerbangan kamu dapat menekan tombol “Pilih tiket”
                      </li>
                      <li className="mt-3">
                        Setelah kamu memilih tiket yang kamu mau, kamu akan diminta untuk melakukan pengisian
                        data diri pemesan dan penumpang. Isi form tersebut sesuai dengan data pada Kartu Tanda
                        Penduduk yang kamu miliki.
                      </li>
                      <li className="mt-3">
                        Setelah pengisian data selesai, kamu dapat melihat di kanan bawah pada halaman form
                        akan ada fasilitas tambahan yaitu pilih kursi, kamu dapat memilih kursi yang kamu
                        inginkan lalu klik pilih kursi, jika kamu sudah selesai/tidak memilih kursi kamu dapat
                        langsung klik lanjut pembayaran
                      </li>
                      <li className="mt-3">
                        Metode pembayaran saat ini hanya menggunakan kartu kredit atau debit, setelah kamu
                        memasukkan data kartu kamu dapat klik bayar untuk melanjutkan pembayaran.
                      </li>
                      <li className="mt-3">
                        Jika pembayaran kamu berhasil kamu langsung mendapatkan invoices pembayaran dan
                        langsung dapat mencetak e-ticket
                      </li>
                      <li className="mt-3">
                        Kamu dapat melihat transaksi pembelian kamu ini di halaman profil kamu di histori
                        transaksi
                      </li>
                    </ul>
                  </div>
                </div>
              </details>

              <details className="px-4 py-3 mt-3 rounded-md shadow-lg" open={accordionOpen[3]}>
                <summary
                  className="flex items-center justify-between mb-3 outline-none cursor-pointer"
                  onClick={toggleAccordion(3)}
                >
                  <h2 className="w-5/6 text-base font-bold md:text-xl text">
                    <span className="text-gray-800">
                      Bagaimana cara saya untuk melanjutkan pembayaran yang belum saya bayarkan?
                    </span>
                  </h2>
                  {accordionOpen[3] ? (
                    <ChevronUp size={24} className="ml-2 text-white bg-blue-500 rounded-md" />
                  ) : (
                    <ChevronDown size={24} className="ml-2 text-white bg-blue-500 rounded-md" />
                  )}
                </summary>

                <div className="flex gap-4 mt-4 mb-2">
                  {/* Konten*/}
                  <div className="flitems-center">
                    <p className="text-gray-500">
                      Untuk melanjutkan pembayaran yang belum terbayarkan kamu dapat melihat pada halaman
                      histori transaksi atau di halaman notifikasi pada profil kamu. Jika waktu pembayaran
                      masih memenuhi kamu dapat melanjutkan. jika tidak, tiket yang kamu pesan artinya sudah
                      hangus dan harus melakukan pemesanan ulang.
                    </p>
                  </div>
                </div>
              </details>

              <details className="px-4 py-3 mt-3 rounded-md shadow-lg" open={accordionOpen[4]}>
                <summary
                  className="flex items-center justify-between mb-3 outline-none cursor-pointer"
                  onClick={toggleAccordion(4)}
                >
                  <h2 className="w-5/6 text-base font-bold md:text-xl text">
                    <span className="text-gray-800">Bagaimana proses refund pada aplikasi ini?</span>
                  </h2>
                  {accordionOpen[4] ? (
                    <ChevronUp size={24} className="ml-2 text-white bg-blue-500 rounded-md" />
                  ) : (
                    <ChevronDown size={24} className="ml-2 text-white bg-blue-500 rounded-md" />
                  )}
                </summary>

                <div className="flex gap-4 mt-4 mb-2">
                  {/* Konten*/}
                  <div className="flitems-center">
                    <p className="text-gray-500">
                      Untuk proses refund pada Travel Indonesia saat ini dapat dilakukan secara manual dengan
                      menghubungi customer service kami di Whatsapp{" "}
                      <span className="text-blue-500">
                        <a href="https://wa.me/6285267301444">+6285267301444</a>
                      </span>{" "}
                      atau melalui email kami di{" "}
                      <span className="text-blue-500 underline">
                        <a href="mailto:travelidcenter@gmail.com">travelidcenter@gmail.com</a>
                      </span>
                      . Customer service kami siap membantu dan melayani Anda selama 24 jam.
                    </p>
                  </div>
                </div>
              </details>

              <details className="px-4 py-3 mt-3 rounded-md shadow-lg" open={accordionOpen[5]}>
                <summary
                  className="flex items-center justify-between mb-3 outline-none cursor-pointer"
                  onClick={toggleAccordion(5)}
                >
                  <h2 className="w-5/6 text-base font-bold md:text-xl text">
                    <span className="text-gray-800">
                      Apa yang menjadi perbedaan harga untuk anak-anak dan bayi?
                    </span>
                  </h2>
                  {accordionOpen[5] ? (
                    <ChevronUp size={24} className="ml-2 text-white bg-blue-500 rounded-md" />
                  ) : (
                    <ChevronDown size={24} className="ml-2 text-white bg-blue-500 rounded-md" />
                  )}
                </summary>

                <div className="flex gap-4 mt-4 mb-2">
                  {/* Konten*/}
                  <div className="flitems-center">
                    <ul className="pl-6 mt-3 text-gray-500 list-disc">
                      <li>
                        Dewasa dan Anak dikenakan biaya full dari harga penerbangan karena mendapatkan tempat
                        duduk dan free bagasi sebesar 20 kg jika mendapatkan fasilitas bagasi dari maskapainya
                        (Ekonomi) sedangkan untuk bisnis free bagasinya sebesar 30 kg.
                      </li>
                      <li className="mt-3">
                        Infant/Bayi di bawah umur 2 tahun itu 10% dari harga tiket dan free bagasi hanya
                        sebesar 10 kg dengan catatan tidak mendapatkan tempat duduk.
                      </li>
                    </ul>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Banner Section (CTA) */}
        <div
          className="relative flex items-center justify-center w-full h-full bg-center bg-no-repeat bg-cover rounded-md"
          style={{ backgroundImage: "url('https://i.ibb.co/bPnQBxy/Card-1.jpg')" }}
        >
          <div className="relative flex items-center w-full p-12 text-white">
            {/* Left Side (Text and Button) */}
            <div className="flex flex-col items-start justify-center w-full lg:w-4/6">
              <h3 className="mb-2 text-lg font-medium text-white lg:text-2xl">Kamu Masih Bingung?</h3>
              <h1 className="mb-5 text-xl font-semibold text-white lg:text-4xl">Hubungi Whatsapp Kami</h1>
              <a href="https://wa.me/6285267301444">
                <div className="p-4 text-sm text-blue-500 transition duration-300 ease-in-out bg-white rounded-md cursor-pointer lg:text-lg hover:bg-opacity-80">
                  Whatsapp Call Center
                </div>
              </a>
            </div>

            {/* Right Side (Image) */}
            <div
              className="absolute top-0 bottom-0 right-0 hidden w-2/6 h-full lg:block"
              style={{ marginTop: "-25px" }}
            >
              <img
                className="object-contain "
                style={{ height: "400px" }}
                src="https://i.ibb.co/nzV4yJM/Group-1055.png"
                alt="Customer Support"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PusatBantuan;
