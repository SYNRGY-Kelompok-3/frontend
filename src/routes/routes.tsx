import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layouthome from "src/layout/Home";
import Layoutpage from "src/layout/Page";

import Home from "src/pages/Home";
import Invoice from "src/pages/Invoices";
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
            <Route path="/invoices" element={<Invoice />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
