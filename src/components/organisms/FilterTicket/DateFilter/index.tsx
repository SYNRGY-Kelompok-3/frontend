import { FaChevronRight } from "react-icons/fa";

const DateFilter = () => {
  return (
    <section className="mt-5 font-poppins">
      <div className="max-w-7xl w-full mx-auto rounded-md shadow-md border-slate-100 border-4 flex justify-between p-3">
        <button className="p-5 rounded-md bg-[#3E7BFA] text-white border-l-2 min-w-52">
          <p>01 Jan</p>
          <p>Dari Rp2.000.000</p>
        </button>

        <button className="p-5 rounded-md border-l-2 min-w-52">
          <p>02 Jan</p>
          <p>Dari Rp2.000.000</p>
        </button>

        <button className="p-5 rounded-md border-l-2 min-w-52">
          <p>03 Jan</p>
          <p>Dari Rp2.000.000</p>
        </button>

        <button className="p-5 rounded-md border-l-2 min-w-52">
          <p>04 Jan</p>
          <p>Dari Rp2.000.000</p>
        </button>

        <button className="p-5 rounded-md border-l-2 min-w-52">
          <p>05 Jan</p>
          <p>Dari Rp2.000.000</p>
        </button>

        <button className="self-center mr-5 text-[#3355CC] rounded-full border-[#3E7BFA] border-2 p-3">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default DateFilter;
