import { NavLink } from "react-router-dom";

function Navmenu({ bg }: any) {
    return (
        <>
            <NavLink to="/" className={({ isActive }) => `${isActive ? (bg === 'bg-transparent' ? 'text-white bg-slate-700' : 'text-[#075efd] hover:bg-slate-100') : (bg === "bg-transparent" ? 'bg-transparent hover:bg-slate-700' : 'text-black hover:bg-slate-100')} py-2 px-3 rounded-md font-semibold text-lg`}>
                Beranda
            </NavLink>
            <NavLink to="/tentang-kami" className={({ isActive }) => `${isActive ? (bg === 'bg-transparent' ? 'text-white bg-slate-700' : 'text-[#075efd] hover:bg-slate-100') : (bg === "bg-transparent" ? 'bg-transparent hover:bg-slate-700' : 'text-black hover:bg-slate-100')} py-2 px-3 rounded-md font-semibold text-lg`}>
                Tentang Kami
            </NavLink>
            <NavLink to="/artikel" className={({ isActive }) => `${isActive ? (bg === 'bg-transparent' ? 'text-white bg-slate-700' : 'text-[#075efd] hover:bg-slate-100') : (bg === "bg-transparent" ? 'bg-transparent hover:bg-slate-700' : 'text-black hover:bg-slate-100')} py-2 px-3 rounded-md font-semibold text-lg`}>
                Artikel
            </NavLink>
            <NavLink to="/pusat-bantuan" className={({ isActive }) => `${isActive ? (bg === 'bg-transparent' ? 'text-white bg-slate-700' : 'text-[#075efd] hover:bg-slate-100') : (bg === "bg-transparent" ? 'bg-transparent hover:bg-slate-700' : 'text-black hover:bg-slate-100')} py-2 px-3 rounded-md font-semibold text-lg`}>
                Pusat Bantuan
            </NavLink>
        </>
    );
};

export default Navmenu;