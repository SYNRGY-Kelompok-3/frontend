import { useState } from "react";
// import CloseIcon from "../../atoms/Icon";
import { X } from "lucide-react";
import Rectangle from "../../atoms/Rectangle";
import bgBody from "../../../assets/Body_Front.png";
import SeatLists from "../SeatLists";
import Button from "../../atoms/Button";
import { useDispatch } from "react-redux";
import { setSeats } from "src/state/seatSlice/slice";

interface SeatProps {
  seat: string;
  row: string;
  price?: number;
}

interface DetailTiketProps {
  onClose?: () => void;
}

const SeatModal = ({ onClose }: DetailTiketProps) => {
  const [selectedSeats, setSelectedSeats] = useState<SeatProps[]>([]);
  const dispatch = useDispatch();

  //   Saves the selected data to global state
  const handlePilihKursi = () => {
    dispatch(setSeats(selectedSeats));
  };

  return (
    <div className="w-[698px] bg-white p-[20px] rounded-lg">
      <div className="relative w-full h-full">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-black">
            <X size={24} />
          </button>
        </div>

        <div className="pt-[40px] space-y-[20px]">
          <div className="text-center">
            <h1 className="text-sm font-medium text-black">Silahkan memilih nomor kursi</h1>
            <p className="text-[12px] text-slate-400">
              Harga nomor kursi sesuai dengan warna yang tertera dibawah ini:
            </p>
          </div>

          <div className="flex items-center justify-center w-full h-20 gap-[20px]">
            <Rectangle bgColor="bg-blue-500" priceTag={250000} />
            <Rectangle bgColor="bg-yellow-400" priceTag={195000} />
            <Rectangle bgColor="bg-green-600" priceTag={85000} />
            <Rectangle bgColor="bg-purple-600" priceTag={75000} />
          </div>

          <div
            className="h-[700px] bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${bgBody})`,
              backgroundSize: "325px",
            }}
          >
            <SeatLists selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
          </div>
        </div>
        <div className="h-[48px] flex items-center justify-between mt-4">
          <div>
            <p className="font-semibold text-[12px] text-black">Total</p>
            <p className="text-sm font-semibold text-blue-500">
              Rp{selectedSeats.reduce((total, seat) => total + (seat.price || 0), 0).toLocaleString()}{" "}
              <span className="font-bold text-black">|</span>{" "}
              <span className="text-slate-400">
                {selectedSeats.map((seat) => seat.seat + seat.row).join(", ")}
              </span>
            </p>
          </div>
          <Button
            className="px-4 py-2 text-white bg-blue-500 rounded-[4px] text-sm"
            content="Pilih Kursi"
            onClick={handlePilihKursi}
          />
        </div>
      </div>
    </div>
  );
};

export default SeatModal;
