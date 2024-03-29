import Button from "src/components/atoms/Button";
import useAction from "./ticket.hooks";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ visible, onClose }) => {
  const { handleSubmit, formValues, setFormValues, setArrivalDate, setDepartureDate, currentPage } =
    useAction();

  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-20">
      <div className="m-5 bg-white shadow-xl flex flex-col p-8 rounded-lg gap-3">
        <i id="close" className="fa fa-times self-end hover:cursor-pointer" onClick={onClose}></i>
        <form
          onSubmit={(e) => {
            handleSubmit(e, currentPage, onClose);
          }}
        >
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="text-xs 2xl:text-lg">Class</label>
              <select
                id="class"
                onChange={(e) => setFormValues({ ...formValues, passengerClass: e.target.value })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
              >
                <option value="">Masukkan Kelas Penerbangan</option>
                <option value="business">Business</option>
                <option value="economy">Economy</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-xs 2xl:text-lg">Departure Time</label>
              <input
                type="datetime-local"
                id="departure-time"
                value={formValues.flightTime}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs 2xl:text-lg">Price</label>
              <input
                id="price"
                type="number"
                value={formValues.price}
                onChange={(e) => setFormValues({ ...formValues, price: Number(e.target.value) })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
                placeholder="Masukkan Harga"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs 2xl:text-lg">Origin Airport</label>
              <select
                id="origin"
                onChange={(e) => setFormValues({ ...formValues, originAirport: e.target.value })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
              >
                <option value="">Masukkan Asal Airport</option>
                <option value="PLM">PLM</option>
                <option value="CGK">CGK</option>
                <option value="DPS">DPS</option>
                <option value="SUB">SUB</option>
                <option value="BDO">BDO</option>
                <option value="JOG">JOG</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-xs 2xl:text-lg">Arrival Time</label>
              <input
                type="datetime-local"
                id="arrival-time"
                value={formValues.arrivedTime}
                onChange={(e) => setArrivalDate(e.target.value)}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs 2xl:text-lg">Discount Price</label>
              <input
                id="discount-price"
                type="number"
                value={formValues.discountPrice}
                onChange={(e) => setFormValues({ ...formValues, discountPrice: Number(e.target.value) })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
                placeholder="Masukkan Harga"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs 2xl:text-lg">Destination Airport</label>
              <select
                id="destination"
                onChange={(e) => setFormValues({ ...formValues, destinationAirport: e.target.value })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
              >
                <option value="">Masukkan Asal Airport</option>
                <option value="PLM">PLM</option>
                <option value="CGK">CGK</option>
                <option value="DPS">DPS</option>
                <option value="SUB">SUB</option>
                <option value="BDO">BDO</option>
                <option value="JOG">JOG</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-xs 2xl:text-lg">Maskapai</label>
              <select
                id="airlines"
                onChange={(e) => setFormValues({ ...formValues, airlines: { id: Number(e.target.value) } })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
              >
                <option value="">Masukkan Maskapai</option>
                <option value="1">Garuda Indonesia</option>
                <option value="2">Citilink</option>
                <option value="3">Batik Air Indonesia</option>
                <option value="4">Lion Airlines</option>
                <option value="5">Sriwijaya Air</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-xs 2xl:text-lg">Meal</label>
              <select
                id="meal"
                onChange={(e) => setFormValues({ ...formValues, freeMeal: Boolean(e.target.value) })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
              >
                <option value="">Meal</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-xs 2xl:text-lg">Kota Asal</label>
              <select
                id="origin-city"
                onChange={(e) => setFormValues({ ...formValues, originCity: e.target.value })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
              >
                <option value="">Masukkan Kota Asal</option>
                <option value="Palembang">Palembang</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Denpasar">Denpasar</option>
                <option value="Surabaya">Surabaya</option>
                <option value="Bandung">Bandung</option>
                <option value="Jogyakarta">Yogyakarta</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-xs 2xl:text-lg">Flight Number</label>
              <input
                id="flight-number"
                type="text"
                value={formValues.flightNumber}
                onChange={(e) => setFormValues({ ...formValues, flightNumber: e.target.value })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
                placeholder="Masukkan Nomor Penerbangan"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs 2xl:text-lg">Gate</label>
              <input
                id="gate"
                type="text"
                value={formValues.gate}
                onChange={(e) => setFormValues({ ...formValues, gate: e.target.value })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
                placeholder="Masukkan Gate"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs 2xl:text-lg">Kota Tujuan</label>
              <select
                id="destination-city"
                onChange={(e) => setFormValues({ ...formValues, destinationCity: e.target.value })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
              >
                <option value="">Masukkan Kota Tujuan</option>
                <option value="Palembang">Palembang</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Denpasar">Denpasar</option>
                <option value="Surabaya">Surabaya</option>
                <option value="Bandung">Bandung</option>
                <option value="Jogyakarta">Yogyakarta</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-xs 2xl:text-lg">Transit</label>
              <select
                id="transit"
                onChange={(e) => setFormValues({ ...formValues, transit: e.target.value })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
              >
                <option value="">Masukkan Transit</option>
                <option value="langsung">Langsung</option>
                {[1, 2, 3].map((item, index) => (
                  <option key={index} value={`${item}_transit`}>
                    {item} Transit
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-xs 2xl:text-lg">Discount</label>
              <select
                id="discount"
                onChange={(e) => setFormValues({ ...formValues, isDiscount: Boolean(e.target.value) })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
              >
                <option value="">- Discount -</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>
          {/* <div className="flex flex-col">
              <label className="text-xs 2xl:text-lg">Duration</label>
              <select
                id="duration"
                onChange={(e) => setFormValues({ ...formValues, duration: e.target.value })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
              >
                <option value="">Masukkan Durasi Terbang</option>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                  <option key={index} value={`${item} Jam`}>
                    {item} Jam
                  </option>
                ))}
              </select>
            </div> */}
          <Button
            id="create-ticket"
            content={"Create Ticket"}
            type={"submit"}
            className={
              "inline-block w-full mt-3 py-2.5 2xl:py-3.5 font-bold leading-normal text-xs 2xl:text-lg text-center text-white align-middle transition-all bg-blue-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs ease-in tracking-tight-rem shadow-md bg-150 bg-x-25"
            }
          />
        </form>
      </div>
    </div>
  );
};

export default Modal;
