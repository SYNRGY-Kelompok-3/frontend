import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layouthome from "src/layout/Home";
import Layoutpage from "src/layout/Page";
import Layoutcheckout from "src/layout/Checkout";

import Home from "src/pages/Home";
import Invoice from "src/pages/Invoices";
import Checkout from "../pages/Checkout";
import Detailtiket from "src/pages/ListTiket/dummy";
import Login from "src/pages/Login";

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
            <Route path="/invoices" element={<Invoice />} />
          </Route>
          <Route element={<Layoutcheckout />}>
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
