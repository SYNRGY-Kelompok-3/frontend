import planeDeparture from "../../../../assets/FilterTicket/plane-departure.svg";
import planeArrival from "../../../../assets/FilterTicket/plane-arrival.svg";
import calendarAlt from "../../../../assets/FilterTicket/calendar-alt.svg";
import search from "../../../../assets/FilterTicket/search.svg";

const FindTicket = () => {
  return (
    <section className="mt-5 mx-4 md:mt-[160px] relative font-poppins">
      <div className="bg-white rounded-md max-w-7xl w-full mx-auto border-slate-100 border-2">
        <form className="flex flex-col md:flex-row p-4">
          {/* from */}
          <div className="py-3 px-3 flex-1 border-r-2 ">
            <p className="flex font-medium">
              <img
                src={planeDeparture}
                alt="plane departure"
                className="px-1 mr-1"
              />
              Dari
            </p>
            <div className="flex flex-row px-6">
              <select
                name="from"
                id="from"
                className="outline-none border-none p-2 w-full"
                required
              >
                <option>Yogyakarta</option>
                <option>London</option>
                <option>Paris</option>
                <option>Rome</option>
              </select>
            </div>
          </div>

          {/* destination to */}
          <div className="py-3 px-3 flex-1 border-r-2">
            <p className="flex font-medium">
              <img
                src={planeArrival}
                alt="plane arrival"
                className="px-1 mr-1"
              />
              Ke
            </p>
            <div className="flex flex-row px-6">
              <select
                name="to"
                id="to"
                className="outline-none p-2 w-full"
                required
              >
                <option>Jakarta</option>
                <option>London</option>
                <option>Paris</option>
                <option>Rome</option>
              </select>
            </div>
          </div>

          {/* date */}
          <div className="py-3 px-3 flex-1 border-r-2">
            <p className="flex font-medium">
              <img src={calendarAlt} alt="calendar alt" className="px-1 mr-1" />
              Tanggal Pergi
            </p>
            <input
              type="date"
              className="outline-none py-2 w-full date px-9"
              name="date"
              required
            />
          </div>

          {/* date */}
          <div className="py-3 px-3 flex-1 border-r-2">
            <p className="flex font-medium">
              <img src={calendarAlt} alt="calendar alt" className="px-1 mr-1" />
              Tanggal Pulang
            </p>
            <input
              type="date"
              className="outline-none px-9 py-2 w-full date"
              name="date"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#3E7BFA] text-white px-8 py-1 space-x-2 flex items-center"
          >
            <img src={search} alt="" />
            Ganti Pencarian
          </button>
        </form>
      </div>
    </section>
  );
};

export default FindTicket;
