import { useState } from "react";

import Navbar from "../../components/organisms/Navbar";
import Nav from "../../components/organisms/Nav";
import Button from "../../components/atoms/Button";
import Steper from "../../components/atoms/Stepper";
import AccordionComponent from "../../components/atoms/Accordion";
import Footer from "../../components/organisms/Footer";
import ConfirmPayment from "../../components/organisms/PopUp/confirmPayment";
import Alert from "../../components/atoms/Alert";

function Payment() {
  const [showModalConfirmPayment, setShowModalConfirmPayment] = useState(false);

  const handleButtonClick2 = () => {
    setShowModalConfirmPayment(true);
  };

  const handleCloseClick2 = () => {
    setShowModalConfirmPayment(false);
  };

    return (
        <>
            <Navbar />
            <Nav />
            <Steper />
            <Alert />
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row">
                <div className="left-side">
                  <div className="mt-10 mr-3 p-6 bg-white border rounded-lg shadow">
                    <h2 className="font-bold mb-4">Metode Pembayaran</h2>

                    <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 p-2 rounded border border-blue-400">Kartu Kredit/Debit</span>
                    </div>

                    <form className="flex flex-col">
                      <div className="mb-4">
                        <label className="block mb-2 text-xs font-bold">
                          Nomor Kartu Kredit/Debit
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          value=''
                          placeholder="Masukan nomor kartu kredit"
                          className="shadow text-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>

                      <div className="mb-4">
                        <label className="block mb-2 text-xs font-bold">
                          Nama Kartu Kredit/Debit
                        </label>
                        <input
                          type="text"
                          id="cardName"
                          value=''
                          placeholder="Masukan nama kartu kredit"
                          className="shadow text-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>

                      <div className="mb-4 flex items-center justify-between">
                        <div className="w-1/2 mr-2">
                          <label htmlFor="expiryDate" className="block mb-2 text-xs font-bold">
                            Tanggal Kadaluarsa
                          </label>
                          <input
                            type="text"
                            id="expiryDate"
                            value=''
                            placeholder="MM/YY"
                            className="shadow text-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="w-1/2 ml-2">
                          <label htmlFor="cvv" className="block mb-2 text-xs font-bold">
                            CVV
                          </label>
                          <input
                            type="text"
                            id="cvv"
                            value=''
                            placeholder="CVV"
                            className="shadow text-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                      </div>
                      <p className="text-xs">Dengan mengklik tombol di bawah ini, Anda menyetujui <a href="#" className="text-blue-600">Kebijakan Syarat & Ketentuan Travel.id</a> dan <a href="#" className="text-blue-600">Kebijakan Privasi</a>.</p>

                      <Button content={"Bayar"} className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-auto w-full"} onClick={handleButtonClick2} type={"button"} />
                    </form>
                  </div>
                </div>
                <div className="right-side">
                  <div className="mt-10 ml-3 bg-white border">
                    <AccordionComponent />
                  </div>
                </div>
              </div>
            </div>
            <Footer />
            {showModalConfirmPayment && <ConfirmPayment onClose={handleCloseClick2} />}
        </>
    );
}

export default Payment