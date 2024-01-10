import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layouthome from "../layout/Home";
import Layoutpage from "../layout/Page";

import Home from "../pages/Home";
import Detailtiket from "../pages/ListTiket/dummy";

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
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;