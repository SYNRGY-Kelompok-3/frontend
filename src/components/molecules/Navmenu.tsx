import { Link } from "react-router-dom";

function Navmenu() {
    return (
        <>
            <div className="py-2 px-3 rounded-md bg-transparent hover:bg-slate-700">
                <Link to="/" className="font-semibold text-lg px-2">Beranda</Link>
            </div>
            <div className="py-2 px-3 rounded-md bg-transparent hover:bg-slate-700">
                <Link to="/tentang-kami" className="font-semibold text-lg px-2">Tentang Kami</Link>
            </div>
            <div className="py-2 px-3 rounded-md bg-transparent hover:bg-slate-700">
                <Link to="/artikel" className="font-semibold text-lg px-2">Artikel</Link>
            </div>
            <div className="py-2 px-3 rounded-md bg-transparent hover:bg-slate-700">
                <Link to="/pusat-bantuan" className="font-semibold text-lg px-2">Pusat Bantuan</Link>
            </div>
        </>
    );
};

export default Navmenu;