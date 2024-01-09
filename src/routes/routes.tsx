import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "src/pages/Home";
import Tentang from "src/pages/Tentang";

function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tentang" element={<Tentang />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;