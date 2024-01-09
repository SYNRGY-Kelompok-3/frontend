import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Tentang from "../pages/Tentang";
import Artikel from "../pages/Artikel";
import Pusat from "../pages/Pusat";

function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tentang-kami" element={<Tentang />} />
                    <Route path="/artikel" element={<Artikel />} />
                    <Route path="/pusat-bantuan" element={<Pusat />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;