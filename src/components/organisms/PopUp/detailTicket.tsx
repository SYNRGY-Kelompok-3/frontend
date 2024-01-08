import { X } from "lucide-react";

interface DetailTiketProps {
  onClose: () => void;
}

function DetailTiket({ onClose }: DetailTiketProps) {

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
                <div>
                    {/* Isi konten sesuai kebutuhan */}
                    <p>Isi konten bebas disini...</p>
                </div>

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
