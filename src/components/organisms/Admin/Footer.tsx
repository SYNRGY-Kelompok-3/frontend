import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="pt-4">
        <div className="w-full px-6 mx-auto">
          <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
            <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
              <div className="flex gap-3 text-sm leading-normal text-center text-slate-500 lg:text-left">
                <div>©</div>
                <div>{new Date().getFullYear()}</div>
                <Link to={"/"} className="font-semibold dark:text-white text-slate-700" target="_blank">
                  Travel.id
                </Link>
              </div>
            </div>
            <div className="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
              <ul className="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
                <li className="nav-item">
                  <Link
                    to={"/"}
                    className="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500"
                    target="_blank"
                  >
                    Travel.id
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/tentang-kami"}
                    className="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500"
                    target="_blank"
                  >
                    Tentang Kami
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/artikel"}
                    className="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500"
                    target="_blank"
                  >
                    Artikel
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/pusat-bantuan"}
                    className="block px-4 pt-0 pb-1 pr-0 text-sm font-normal transition-colors ease-in-out text-slate-500"
                    target="_blank"
                  >
                    Pusat Bantuan
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
