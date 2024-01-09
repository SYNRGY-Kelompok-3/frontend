import { Briefcase, ChevronDown, ChevronUp, Sandwich, X } from "lucide-react";
import { useState } from "react";

interface DetailTiketProps {
  onClose: () => void;
}

function DetailTiket({ onClose }: DetailTiketProps) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setTimeout(() => {
      setAccordionOpen(!accordionOpen);
      console.log("accordion klik");
    }, 0);
  };

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-75">
      <div className="p-8 bg-white rounded-lg w-[700px]" style={{ marginTop: "-120px" }}>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-black">Penerbangan Dari Jakarta ke Yogyakarta</h1>
          <button onClick={onClose} className="text-black">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="mb-4">


            {/* Accordion */}
            <details className="mb-6" open={accordionOpen}>
                <summary className="flex items-center justify-between mb-3 outline-none cursor-pointer" onClick={toggleAccordion}>
                    <h2 className="text-xl font-bold text-black">
                        Fasilitas Penerbangan
                    </h2>
                    {accordionOpen ? <ChevronUp size={24} className="ml-2 text-black" /> : <ChevronDown size={24} className="ml-2 text-black" />}
                </summary>

                {/* Isi dari accordion */}
                <div className="flex flex-col gap-4 mt-4 mb-2 md:flex-row">
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

                <div className="flex flex-col gap-4 mt-4 md:flex-row">
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
                <p className="font-bold text-black text-md">Total</p>
                <p className="text-lg font-bold text-blue-500">Rp 1.500.000 <span className="font-bold text-black">/pax</span></p>
            </div>
            <button className="px-5 py-3 text-white bg-blue-500 rounded">Pesan Tiket</button>
        </div>
      </div>
    </div>
  );
}

export default DetailTiket;
