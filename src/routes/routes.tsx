import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";

function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/detailTiket" element={<DummyDetailTiket />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;