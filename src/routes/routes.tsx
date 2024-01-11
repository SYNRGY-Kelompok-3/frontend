import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layouthome from "src/layout/Home";
import Layoutpage from "src/layout/Page";

import Home from "src/pages/Home";
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
            <Route path="/tentang-kami" element={<Detailtiket />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
