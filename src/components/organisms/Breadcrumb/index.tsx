import Image from "../../atoms/Img";
import ChevronRight from "../../../assets/ChevronRight.svg";

function Breadcrumb() {
  return (
    <div>
      <nav aria-label="breadcrumb" className="w-full px-12 mt-5">
        <ol className="flex space-x-2 text-black text-sm font-semibold">
          <li className="flex items-center">
            <a href="#" className="flex items-center text-sm font-semibold">
              Home
            </a>
          </li>
          <li className="flex items-center space-x-1">
            <Image src={ChevronRight} alt={"chevron"} className={""} />
            <a href="#" className="flex items-center px-1 text-sm font-semibold">
              Cari Tiket
            </a>
          </li>
          <li className="flex items-center space-x-1">
            <Image src={ChevronRight} alt={"chevron"} className={""} />
            <a href="#" className="flex items-center pl-1 text-sm font-semibold text-blue-500 cursor-default">
              Checkout
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumb;
