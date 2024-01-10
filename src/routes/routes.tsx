import { BrowserRouter, Route, Routes } from "react-router-dom";

import DummyDetailTiket from "../pages/ListTiket/dummy";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/detailTiket" element={<DummyDetailTiket />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
