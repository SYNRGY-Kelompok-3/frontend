import { Accordion } from "flowbite-react";
import { Circle, Minus, Briefcase, Utensils } from "lucide-react";

export default function AccordionComponent() {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title className="text-base font-bold">
          Penerbangan Dari Jakarta Ke Yogyakarta
        </Accordion.Title>
        <Accordion.Content>
          <div className="flex flex-col items-center mb-4 md:flex-row">
            {/* Kolom Kiri (hanya ditampilkan di layar besar) */}
            <div className="flex-col items-center hidden mr-4 md:flex">
              <Circle size={18} className="text-blue-500" />
              {[...Array(6)].map((_, index) => (
                <Minus key={index} size={18} className="transform rotate-90 text-slate-400" />
              ))}
              <Circle size={18} className="text-blue-500" style={{ fill: "#4299E1" }} />
            </div>

            {/* Kolom Kanan */}
            <div className="flex flex-col w-full">
              {/* Teks pertama */}
              <div className="mb-2">
                <p className="font-medium text-black" style={{ fontSize: "14px" }}>
                  Selasa, 02 Januari 2024 - 19.50
                </p>
                <p className="font-semibold text-slate-500" style={{ fontSize: "12px" }}>
                  Yogyakarta Kulon Progo - YIA
                </p>
              </div>

              {/* Kotak atau banner */}
              <div className="flex items-center w-full mt-2 border-2 rounded-md border-slate-200">
                <div className="mr-2">
                  <img
                    src="https://i.ibb.co/pwDQ2gQ/Citilink-logo.png"
                    alt="Citilink"
                    className="object-contain w-20 h-12"
                  />
                </div>

                {/* Garis Vertikal */}
                <div className="h-16 mx-2 border-l text-slate-400"></div>

                {/* Kolom Kedua */}
                <div className="flex flex-col ms-2">
                  <p className="font-medium text-black" style={{ fontSize: "14px" }}>
                    Citilink
                  </p>
                  <p className="font-semibold text-slate-500" style={{ fontSize: "12px" }}>
                    QC-660 • Ekonomi • 2 Jam 30 Menit
                  </p>
                </div>
              </div>

              {/* Teks kedua */}
              <div className="mt-2">
                <p className="mt-2 font-medium text-black" style={{ fontSize: "14px" }}>
                  Selasa, 02 Januari 2024 - 23.20
                </p>
                <p className="font-semibold text-slate-500" style={{ fontSize: "12px" }}>
                  Soekarno Hatta - CGK
                </p>
              </div>
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="text-base font-bold">Fasilitas Penerbangan</Accordion.Title>
        <Accordion.Content>
          <div className="flex items-center">
            <Briefcase size={24} className="text-blue-500 m-1" />
            <div>
              <p className="block text-xs font-bold ml-1">Kabin dan Bagasi</p>
              <p className="block text-xs ml-1">Maksimal kabin 7kg dan bagasi 20</p>
            </div>
          </div>
          <div className="flex items-center mt-3">
            <Utensils size={24} className="text-blue-500 m-1" />
            <div>
              <p className="block text-xs font-bold ml-1">Gratis makanan</p>
              <p className="block text-xs ml-1">Sudah termasuk gratis makan. blabla</p>
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="text-base font-bold">Detail Transaksi</Accordion.Title>
        <Accordion.Content>
          <div className="flex items-center justify-between py-1">
            <p className="block text-xs text-gray-600">No. Pesanan</p>
            <p className="block text-xs font-bold">1023123412</p>
          </div>

          <div className="flex items-center justify-between py-1">
            <p className="block text-xs text-gray-600">Nama Lengkap</p>
            <p className="block text-xs font-bold">Tn. Charles Wilson</p>
          </div>

          <div className="flex items-center justify-between py-1">
            <p className="block text-xs text-gray-600">No. Handphone</p>
            <p className="block text-xs font-bold">085310234121</p>
          </div>

          <div className="flex items-center justify-between py-1">
            <p className="block text-xs text-gray-600">Email</p>
            <p className="block text-xs font-bold">travel@gmail.com</p>
          </div>

          <hr className="mt-2 mb-2" />

          <div className="flex items-center justify-between py-1">
            <p className="block text-xs text-gray-600">Citilink (Dewasa) x1</p>
            <p className="block text-xs font-bold">Rp1.500.000</p>
          </div>

          <div className="flex items-center justify-between py-1">
            <p className="block text-xs text-gray-600">Biaya Layanan</p>
            <p className="block text-xs font-bold">Rp25.000</p>
          </div>

          <hr className="mt-2 mb-2" />

          <div className="flex items-center justify-between py-1">
            <p className="block text-xl font-bold">Harga Total</p>
            <p className="block text-xl font-bold text-red-600">Rp1.525.000</p>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
