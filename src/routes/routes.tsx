import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import DummyPemesanan from "../pages/Pemesanan/dummy";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailPemesanan" element={<DummyPemesanan />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
