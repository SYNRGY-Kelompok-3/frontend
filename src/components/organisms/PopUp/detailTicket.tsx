import { Briefcase, ChevronDown, ChevronUp, Circle, Minus, Sandwich, X } from "lucide-react";
import { useState } from "react";

interface DetailTiketProps {
  onClose: () => void;
}

function DetailTiket({ onClose }: DetailTiketProps) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setTimeout(() => {
      setAccordionOpen(!accordionOpen);
    }, 0);
  };

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-75">
      <div className="p-4 bg-white rounded-lg sm:p-8 md:p-12 lg:w-[700px] xl:w-[800px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-black">Penerbangan Dari Jakarta ke Yogyakarta</h1>
          <button onClick={onClose} className="text-black">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="mb-4">

          {/* Section 1 */}
          <div className="flex flex-col items-center mb-4 md:flex-row">
            {/* Kolom Kiri (hanya ditampilkan di layar besar) */}
            <div className="flex-col items-center hidden mr-4 md:flex">
              <Circle size={18} className="text-blue-500"/>
              {[...Array(6)].map((_, index) => (
                <Minus key={index} size={18} className="transform rotate-90 text-slate-400" />
              ))}
              <Circle size={18} className="text-blue-500" style={{ fill: "#4299E1" }}/>
            </div>

            {/* Kolom Kanan */}
            <div className="flex flex-col w-full">
              {/* Teks pertama */}
              <div className="mb-2">
                <p className="font-medium text-black" style={{ fontSize: '14px' }}>Selasa, 02 Januari 2024 - 19.50</p>
                <p className="font-semibold text-slate-500" style={{ fontSize: '12px' }}>Yogyakarta Kulon Progo - YIA</p>
              </div>

              {/* Kotak atau banner */}
              <div className="flex items-center w-full mt-2 border-2 rounded-md border-slate-200">
                <div className="mr-2">
                  <img src="https://i.ibb.co/pwDQ2gQ/Citilink-logo.png" alt="Citilink" className="object-contain w-20 h-12" />
                </div>

                {/* Garis Vertikal */}
                <div className="h-16 mx-2 border-l text-slate-400"></div>

                {/* Kolom Kedua */}
                <div className="flex flex-col ms-2">
                  <p className="font-medium text-black" style={{ fontSize: '14px' }}>Citilink</p>
                  <p className="font-semibold text-slate-500" style={{ fontSize: '12px' }}>QC-660 • Ekonomi • 2 Jam 30 Menit</p>
                </div>
              </div>

              {/* Teks kedua */}
              <div className="mt-2">
                <p className="mt-2 font-medium text-black" style={{ fontSize: '14px' }}>Selasa, 02 Januari 2024 - 23.20</p>
                <p className="font-semibold text-slate-500" style={{ fontSize: '12px' }}>Soekarno Hatta - CGK</p>
              </div>
            </div>
          </div>

          <hr className="mb-6"/>

          {/* Accordion */}
          <details className="mb-6" open={accordionOpen}>
              <summary className="flex items-center justify-between mb-3 outline-none cursor-pointer" onClick={toggleAccordion}>
                  <h2 className="text-xl font-bold text-black">
                      Fasilitas Penerbangan
                  </h2>
                  {accordionOpen ? <ChevronUp size={24} className="ml-2 text-black" /> : <ChevronDown size={24} className="ml-2 text-black" />}
              </summary>

              {/* Isi dari accordion */}
              <div className="flex flex-col gap-4 mt-4 mb-2">
                  <div className="flex items-center">
                      <div className="mr-3">
                          <Briefcase size={24} className="text-blue-500" />
                      </div>
                      <div>
                          <div className="mb-1 font-medium text-black" style={{ fontSize: '14px' }}>Kabin dan Bagasi</div>
                          <p className="font-semibold text-slate-500" style={{ fontSize: '12px' }}>Maksimal kabin 7 kg dan Bagasi 20 kg. Anda dapat melakukan pembelian bagasi tambahan tersedia di halaman pemesanan.</p>
                      </div>
                  </div>
              </div>

              <div className="flex flex-col gap-4">
                  <div className="flex items-center">
                      <div className="mr-3">
                          <Sandwich size={24} className="text-blue-500" />
                      </div>
                      <div>
                          <div className="mb-1 font-medium text-black" style={{ fontSize: '14px' }}>Gratis Makan</div>
                          <p className="font-semibold text-slate-500" style={{ fontSize: '12px' }}>Sudah termasuk gratis makan. Pembelian makanan tambahan tidak tersedia di halaman pemesanan.</p>
                      </div>
                  </div>
              </div>

          </details>
        </div>

        <hr />

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="font-bold text-black text-md sm:text-sm">Total</p>
            <div className="flex flex-col text-lg font-bold text-blue-500 sm:text-md sm:flex-row">
              <p>Rp 1.500.000 </p>
              <p className="font-bold text-black sm:ml-2">/pax</p>
            </div>
          </div>
          <button className="px-5 py-3 text-white bg-blue-500 rounded">Pesan Tiket</button>
        </div>


      </div>
    </div>
  );
}

export default DetailTiket;
