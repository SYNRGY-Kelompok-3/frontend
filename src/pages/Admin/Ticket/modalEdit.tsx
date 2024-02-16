import Button from "src/components/atoms/Button";
import useAction from "./ticket.hooks";
import { useEffect } from "react";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  id: number;
}

const Modal: React.FC<ModalProps> = ({ visible, onClose, id }) => {
  const {
    handleUpdate,
    formValues,
    setFormValues,
    setArrivalDate,
    setDepartureDate,
    data,
    setData,
    fetchTicketId,
  } = useAction();
  const Ticket = async (id: number) => {
    try {
      const response = await fetchTicketId(id);
      setData(response);
    } catch (error) {
      console.log("error >", error);
    }
  };

  // Call Ticket function inside useEffect
  useEffect(() => {
    Ticket(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!data) {
    return;
  } else {
    console.log(data);
  }

  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-20">
      <div className="w-[900px] m-5 bg-white shadow-xl flex flex-col p-8 rounded-lg gap-3">
        <i id="close" className="fa fa-times self-end hover:cursor-pointer" onClick={onClose}></i>
        <form onSubmit={(e) => handleUpdate(e, id, onClose)}>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label>Class</label>
              <select
                id="class"
                onChange={(e) => setFormValues({ ...formValues, passengerClass: e.target.value })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
              >
                <option value="">Masukkan Kelas Penerbangan</option>
                <option value="business" selected={data.passengerClass === "business"}>
                  Business
                </option>
                <option value="economy" selected={data.passengerClass === "economy"}>
                  Economy
                </option>
              </select>
            </div>
            <div className="flex flex-col">
              <label>Departure Time</label>
              <input
                type="datetime-local"
                id="departure-time"
                value={formValues.flightTime}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label>Price</label>
              <input
                id="price"
                type="number"
                value={formValues.price}
                onChange={(e) => setFormValues({ ...formValues, price: Number(e.target.value) })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
                placeholder={data.price.toString()}
              />
            </div>
            <div className="flex flex-col">
              <label>Origin Airport</label>
              <select
                id="origin"
                onChange={(e) => setFormValues({ ...formValues, originAirport: e.target.value })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
              >
                <option value="">Masukkan Asal Airport</option>
                {["PLM", "CGK", "DPS", "SUB", "BDO", "JOG"].map((item, index) => (
                  <option key={index} value={item} selected={data.originAirport === item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label>Arrival Time</label>
              <input
                type="datetime-local"
                id="arrival-time"
                value={formValues.arrivedTime}
                onChange={(e) => setArrivalDate(e.target.value)}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label>Discount Price</label>
              <input
                id="discount-price"
                type="number"
                value={formValues.discountPrice}
                onChange={(e) => setFormValues({ ...formValues, discountPrice: Number(e.target.value) })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
                placeholder={data.discountPrice.toString()}
              />
            </div>
            <div className="flex flex-col">
              <label>Destination Airport</label>
              <select
                id="destination"
                onChange={(e) => setFormValues({ ...formValues, destinationAirport: e.target.value })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
              >
                <option value="">Masukkan Asal Airport</option>
                {["PLM", "CGK", "DPS", "SUB", "BDO", "JOG"].map((item, index) => (
                  <option key={index} value={item} selected={data.destinationAirport === item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label>Maskapai</label>
              <select
                id="airlines"
                onChange={(e) => setFormValues({ ...formValues, airlines: { id: Number(e.target.value) } })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
              >
                <option value="">Masukkan Maskapai</option>
                {[
                  "Garuda Indonesia",
                  "Citilink",
                  "Batik Air Indonesia",
                  "Lion Airlines",
                  "Sriwijaya Air",
                ].map((item, index) => (
                  <option key={index} value={index.toString()} selected={data.airlines.id === index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label>Meal</label>
              <select
                id="meal"
                onChange={(e) => setFormValues({ ...formValues, freeMeal: Boolean(e.target.value) })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
              >
                <option value="">Meal</option>
                <option value="true" selected={Boolean(data.freeMeal) === true}>
                  Yes
                </option>
                <option value="false" selected={Boolean(data.freeMeal) === false}>
                  No
                </option>
              </select>
            </div>
            <div className="flex flex-col">
              <label>Kota Asal</label>
              <select
                id="origin-city"
                onChange={(e) => setFormValues({ ...formValues, originCity: e.target.value })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
              >
                <option value="">Masukkan Kota Asal</option>
                {["Palembang", "Jakarta", "Bali", "Surabaya", "Bandung", "Jogyakarta"].map((item, index) => (
                  <option key={index} value={item} selected={data.originCity === item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label>Flight Number</label>
              <input
                id="flight-number"
                type="text"
                value={formValues.flightNumber}
                onChange={(e) => setFormValues({ ...formValues, flightNumber: e.target.value })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
                placeholder={data.flightNumber}
              />
            </div>
            <div className="flex flex-col">
              <label>Gate</label>
              <input
                id="gate"
                type="text"
                value={formValues.gate}
                onChange={(e) => setFormValues({ ...formValues, gate: e.target.value })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
                placeholder={data.gate}
              />
            </div>
            <div className="flex flex-col">
              <label>Kota Tujuan</label>
              <select
                id="destination-city"
                onChange={(e) => setFormValues({ ...formValues, destinationCity: e.target.value })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
              >
                <option value="">Masukkan Kota Tujuan</option>
                {["Palembang", "Jakarta", "Bali", "Surabaya", "Bandung", "Jogyakarta"].map((item, index) => (
                  <option key={index} value={item} selected={data.destinationCity === item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label>Transit</label>
              <select
                id="transit"
                onChange={(e) => setFormValues({ ...formValues, transit: e.target.value })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
              >
                <option value="">Masukkan Transit</option>
                <option value="langsung">Langsung</option>
                {[1, 2, 3].map((item, index) => (
                  <option key={index} value={`${item}_transit`} selected={data.transit === `${item}_transit`}>
                    {item} Transit
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label>Discount</label>
              <select
                id="discount"
                onChange={(e) => setFormValues({ ...formValues, isDiscount: Boolean(e.target.value) })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
              >
                <option value="">- Discount -</option>
                <option value="true" selected={Boolean(data.isDiscount) === true}>
                  Yes
                </option>
                <option value="false" selected={Boolean(data.isDiscount) === false}>
                  No
                </option>
              </select>
            </div>
            {/* <div className="flex flex-col">
              <label>Duration</label>
              <select
                id="duration"
                onChange={(e) => setFormValues({ ...formValues, duration: e.target.value })}
                className="flex bg-transparent self-stretch opacity-[0.7] text-[#757575] text-sm leading-5 mt-2 w-full border-slate-400 rounded-lg"
              >
                <option value="">Masukkan Durasi Terbang</option>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                  <option key={index} value={`${item} Hours`}>
                    {item} Hours
                  </option>
                ))}
              </select>
            </div> */}
          </div>
          <Button
            id="Update-ticket"
            content={"Update Ticket"}
            type={"submit"}
            className={
              "inline-block w-full mt-3 py-3.5 font-bold leading-normal text-lg text-center text-white align-middle transition-all bg-blue-500 border-0 rounded-lg cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs ease-in tracking-tight-rem shadow-md bg-150 bg-x-25"
            }
          />
        </form>
      </div>
    </div>
  );
};

export default Modal;
