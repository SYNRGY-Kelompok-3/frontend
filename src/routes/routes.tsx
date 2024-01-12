import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layouthome from "src/layout/Home";
import Layoutpage from "src/layout/Page";
import Layoutcheckout from "src/layout/Checkout";

import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import Detailtiket from "src/pages/ListTiket/dummy";

function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layouthome />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                    <Route element={<Layoutpage />}>
                        <Route path="/detailtiket" element={<Detailtiket />} />
                    </Route>
                    <Route element={<Layoutcheckout />}>
                        <Route path="/checkout" element={<Checkout />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;
