import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouthome from "src/layout/Home";
import Layoutpage from "src/layout/Page";
import LayoutAdminDashboard from "src/layout/Dashboard";
import LayoutUserDashboard from "src/layout/UserDashboard";
import PrivateProvider from "src/layout/PrivateProvider";

import Home from "src/pages/Home";
import Invoice from "src/pages/Invoices";
import Checkout from "src/pages/Checkout";
import Login from "src/pages/Login";
import FullSearchTickets from "src/pages/FullSearchTickets";
import Artikel from "src/pages/Artikel";
import Detailartikel from "src/pages/Detailartikel";
import TentangKami from "src/pages/TentangKami";
import Register from "src/pages/Register";

import Profile from "src/pages/Profile";
import Riwayat from "src/pages/Riwayat";
import RiwayatById from "src/pages/Riwayat/riwayatbyid";
import Notifikasi from "src/pages/Notification";
import Otp from "src/pages/OtpField";
import ForgotPassword from "src/pages/ForgotPassword";
import Tiket from "src/pages/Admin/Ticket";
import Analitik from "src/pages/Admin/Analitik";
import PusatBantuan from "src/pages/PusatBantuan";
import TermOfService from "src/pages/TermsOfService";
import ArtikelTerbaru from "src/pages/ArtikelTerbaru";
import ArtikelWisata from "src/pages/ArtikelWisata";
import ArtikelKuliner from "src/pages/ArtikelKuliner";
import AndroidInvoice from "src/components/organisms/Invoice/AndroidInvoice";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layouthome />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<Layoutpage />}>
            <Route path="/ketentuan-layanan" element={<TermOfService />} />
            <Route path="/tentang-kami" element={<TentangKami />} />
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/artikel/:id" element={<Detailartikel />} />
            <Route path="/artikel/terbaru" element={<ArtikelTerbaru />} />
            <Route path="/artikel/wisata" element={<ArtikelWisata />} />
            <Route path="/artikel/kuliner" element={<ArtikelKuliner />} />
            <Route path="/pusat-bantuan" element={<PusatBantuan />} />
            <Route path="/flight/full-search" element={<FullSearchTickets />} />
            <Route element={<PrivateProvider />}>
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/invoices" element={<Invoice />} />
              <Route element={<LayoutUserDashboard />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/riwayat-transaksi" element={<Riwayat />} />
                <Route path="/riwayat-transaksi/:id" element={<RiwayatById />} />
                <Route path="/notifikasi" element={<Notifikasi />} />
              </Route>
            </Route>
            <Route
              path="/andro-invoice/:orderNumber/:orderDate/:bankName/:accountName/:accountNumber/:fullName/:phoneNumber/:emailAddress/:orderName/:orderPrice/:serviceFee/:totalPayment"
              element={<AndroidInvoice />}
            />
          </Route>
          <Route element={<PrivateProvider />}>
            <Route element={<LayoutAdminDashboard />}>
              <Route path="/dashboard/tiket" element={<Tiket />} />
              <Route path="/dashboard/analitik" element={<Analitik />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/otp" element={<Otp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
