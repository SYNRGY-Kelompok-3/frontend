import { FaChevronUp } from "react-icons/fa";
const Sorting = () => {
  return (
    <section className="mt-5 mx-4 font-poppins">
      <div className="p-4 mx-auto w-full max-w-7xl grid grid-cols-4 gap-4">
        {/* Grid 1 */}
        <div>
          {/* Sorting */}
          <form action="" className="flex flex-col gap-3">
            <h2 className="font-semibold">Sorting</h2>
            {/* Maskapai */}
            <div className="border-t-[1px] border-[#333333] s mb-3">
              <div className="flex justify-between mt-3">
                <h3 className="font-medium">Maskapai</h3>
                <button type="button" className="self-center">
                  <FaChevronUp />
                </button>
              </div>
              {/* Select All */}
              <div className="flex justify-between items-center">
                <p className="mt-3">Pilih Semua</p>
                <label
                  htmlFor="check"
                  className="bg-gray-100 cursor-pointer relative w-8 h-5 rounded-full"
                >
                  <input type="checkbox" id="check" className="sr-only peer" />
                  <span className="w-2/5 h-3/5 bg-white absolute rounded-full left-1 top-1 peer-checked:bg-blue-300 peer-checked:left-4 transition-all duration-500"></span>
                </label>
              </div>
              {/* Brand */}
              <div>
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <p>Garuda Indonesia</p>
                </div>
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <p>Lion Indonesia</p>
                </div>
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <p>Citilink</p>
                </div>
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <p>Batik Air Indonesia</p>
                </div>
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <p>AirAsia</p>
                </div>
              </div>
              <div>
                <button type="button" className="text-[#3E7BFA]">Tampilkan Semua</button>
              </div>
            </div>

            {/* Transit */}
            <div className="border-t-[1px] border-[#333333] mt-2 mb-3">
              <div className="flex justify-between mt-3">
                <h3 className="font-medium">Jumlah Transit</h3>
                <button type="button" className="self-center">
                  <FaChevronUp />
                </button>
              </div>
              {/* Select All */}
              <div className="flex justify-between items-center">
                <p className="mt-2">Pilih Semua</p>
                <label
                  htmlFor="transit"
                  className="bg-gray-100 cursor-pointer relative w-8 h-5 rounded-full"
                >
                  <input
                    type="checkbox"
                    id="transit"
                    className="sr-only peer"
                  />
                  <span className="w-2/5 h-3/5 bg-white absolute rounded-full left-1 top-1 peer-checked:bg-blue-300 peer-checked:left-4 transition-all duration-500"></span>
                </label>
              </div>
              <div>
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <p>Langsung</p>
                </div>
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <p>1 Transit</p>
                </div>
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <p>2 Transit</p>
                </div>
              </div>
            </div>

            {/* Fasilitas Penerbangan */}
            <div className="border-t-[1px] border-[#333333] mt-2 mb-3">
              <div className="flex justify-between mt-2">
                <h3 className="font-medium">Fasilitas Penerbangan</h3>
                <button type="button" className="self-center">
                  <FaChevronUp />
                </button>
              </div>
              {/* Select All */}
              <div className="flex justify-between items-center">
                <p className="mt-3">Pilih Semua</p>
                <label
                  htmlFor="fasilitas"
                  className="bg-gray-100 cursor-pointer relative w-8 h-5 rounded-full"
                >
                  <input
                    type="checkbox"
                    id="fasilitas"
                    className="sr-only peer"
                  />
                  <span className="w-2/5 h-3/5 bg-white absolute rounded-full left-1 top-1 peer-checked:bg-blue-300 peer-checked:left-4 transition-all duration-500"></span>
                </label>
              </div>
              <div>
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <p>Bagasi & Kabin</p>
                </div>
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <p>Gratis Makan</p>
                </div>
              </div>
            </div>

            {/* Waktu Penerbangan */}
            <div className="border-t-[1px] border-[#333333] mt-2 mb-3">
              <div className="flex justify-between mt-2">
                <h3 className="font-medium">Waktu Penerbangan</h3>
                <button type="button" className="self-center">
                  <FaChevronUp />
                </button>
              </div>
              {/* Select All */}
              <div className="flex justify-between items-center">
                <p className="mt-3">Pilih Semua</p>
                <label
                  htmlFor="waktu"
                  className="bg-gray-100 cursor-pointer relative w-8 h-5 rounded-full"
                >
                  <input type="checkbox" id="waktu" className="sr-only peer" />
                  <span className="w-2/5 h-3/5 bg-white absolute rounded-full left-1 top-1 peer-checked:bg-blue-300 peer-checked:left-4 transition-all duration-500"></span>
                </label>
              </div>
              <div>
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <p>00:00 - 06:00</p>
                </div>
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <p>06:00 - 12:00</p>
                </div>
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <p>12:00 - 18:00</p>
                </div>
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <p>18:00 - 24:00</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Sorting;
