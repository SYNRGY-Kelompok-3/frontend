import { FaChevronRight } from "react-icons/fa";
import badgePercent from "../../../../assets/FilterTicket/badge-percent.svg";

const PromoCode = () => {
  return (
    <section className="mt-5 mx-4 font-poppins">
      <div className="max-w-7xl w-full mx-auto bg-[#F6D14B] rounded-md align-middle justify-between flex ">
        <p className="p-4 text-[#3355CC] font-semibold flex">
          <img src={badgePercent} alt="percent" className="mr-1.5" />
          Wah, Ada kode Promo Untuk Perjalanan Yang Sedang Dicari
        </p>
        <button className="self-center mr-5 text-[#3355CC] ">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default PromoCode;
