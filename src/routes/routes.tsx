import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Invoices from "../pages/Invoices";

function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/invoices" element={<Invoices />} />

                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;