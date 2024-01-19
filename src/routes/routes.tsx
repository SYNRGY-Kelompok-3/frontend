import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouthome from "src/layout/Home";
import Layoutpage from "src/layout/Page";
import Layoutcheckout from "src/layout/Checkout";

import Home from "src/pages/Home";
import Invoice from "src/pages/Invoices";
import Checkout from "src/pages/Checkout";
import Detailtiket from "src/pages/ListTiket/dummy";
import Login from "src/pages/Login";
import Payment from "src/pages/Payment";
import FullSearchTickets from "src/pages/FullSearchTickets";
import Detailartikel from "src/pages/Detailartikel";
import TentangKami from "src/pages/TentangKami";

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
            <Route path="/flight/full-search" element={<FullSearchTickets />} />
            <Route path="/invoices" element={<Invoice />} />
            <Route path="/profiles" element={<Invoice />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/tentang-kami" element={<TentangKami />} />
            <Route path="/artikel/:id" element={<Detailartikel />} />
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
