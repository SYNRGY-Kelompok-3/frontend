import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Checkout from "../pages/Checkout";

function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;