
import { NavLink } from "react-router-dom";

function Navmenu() {
    return (
        <>
            <NavLink to="/" className={({ isActive }) => `${isActive ? 'bg-slate-700' : 'bg-transparent hover:bg-slate-700'} py-2 px-3 rounded-md`}>
                <div className="font-semibold text-lg px-2">Beranda</div>
            </NavLink>
            <NavLink to="/tentang-kami" className={({ isActive }) => `${isActive ? 'bg-slate-700' : 'bg-transparent hover:bg-slate-700'} py-2 px-3 rounded-md`}>
                <div className="font-semibold text-lg px-2">Tentang Kami</div>
            </NavLink>
            <NavLink to="/artikel" className={({ isActive }) => `${isActive ? 'bg-slate-700' : 'bg-transparent hover:bg-slate-700'} py-2 px-3 rounded-md`}>
                <div className="font-semibold text-lg px-2">Artikel</div>
            </NavLink>
            <NavLink to="/pusat-bantuan" className={({ isActive }) => `${isActive ? 'bg-slate-700' : 'bg-transparent hover:bg-slate-700'} py-2 px-3 rounded-md`}>
                <div className="font-semibold text-lg px-2">Pusat Bantuan</div>
            </NavLink>
        </>
    );
};

export default Navmenu;