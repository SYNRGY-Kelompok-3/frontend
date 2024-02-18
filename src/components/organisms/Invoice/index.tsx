import BG1 from "../../../assets/Invoices/BG1.png";
import BG2 from "../../../assets/Invoices/BG2.png";
import { MyDocument } from "../PDF";
import { BlobProvider } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { RootState } from "src/state/store";
import { priceFormatter } from "src/utils";
import { useDateFormatter } from "src/usecases/common/useDateFormat";

function Invoice() {
  const paymentState = useSelector((state: RootState) => state.payment);
  const checkoutState = useSelector((state: RootState) => state.checkout);
  const ticketState = useSelector((state: RootState) => state.ticket);
  const { formatDateMonthYear } = useDateFormatter();

  const paymentData = {
    orderNumber: Math.floor(Math.random() * 10000),
    orderDate: formatDateMonthYear(new Date()) || "Undefined Param",
    bankName: paymentState.bankPembayaran,
    accountName: paymentState.namaRekening,
    accountNumber: paymentState.nomorRekening,
    fullName: checkoutState.firstName + " " + checkoutState.lastName,
    phoneNumber: checkoutState.phoneNumber,
    emailAddress: checkoutState.email,
    orderName: ticketState.detailTicket.airlines.airline,
    orderPrice: priceFormatter(ticketState.detailTicket.price),
    serviceFee: priceFormatter(200000),
    totalPayment: priceFormatter(ticketState.detailTicket.price + 200),
  };

  return (
    <section className="container w-full py-2 px-2 border-2 rounded-md">
      <div
        className="relative flex items-center justify-center rounded-md"
        style={{
          height: "112px",
          backgroundImage: `url(${BG1}), url(${BG2})`,
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "bottom left, bottom right",
          backgroundColor: "#3E7BFA",
        }}
      >
        <h1 id="title" className="text-4xl font-semibold text-white">
          Pembelian Tiket Berhasil
        </h1>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <p className="text-base font-semibold text-black">Detail Pemesanan</p>
          <p className="my-3 text-gray-500">No Pesanan</p>
          <p className="my-3 text-gray-500">Tanggal Pesanan</p>
        </div>
        <div className="text-right">
          <br />
          <p className="my-3 font-semibold text-black">{Math.floor(Math.random() * 10000)}</p>
          <p className="my-3 font-semibold text-black">{formatDateMonthYear(new Date())}</p>
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex justify-between mt-4">
        <div>
          <p className="text-base font-semibold text-black">Detail Pembayaran</p>
          <p className="my-3 text-gray-500">Metode Pembayaran</p>
          <p className="my-3 text-gray-500">Nama Rekening</p>
          <p className="my-3 text-gray-500">Nomor Rekening</p>
        </div>
        <div className="text-right">
          <br />
          {/* <p className="my-3 font-semibold text-black">{paymentState.bankPembayaran}</p> */}
          <p className="my-3 font-semibold text-black">Kartu Kredit</p>
          <p className="my-3 font-semibold text-black">{paymentState.namaRekening}</p>
          <p className="my-3 font-semibold text-black">{paymentState.nomorRekening}</p>
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex justify-between mt-4">
        <div>
          <p className="text-base font-semibold text-black">Detail Pemesan</p>
          <p className="my-3 text-gray-500">Nama Lengkap</p>
          <p className="my-3 text-gray-500">No. Handphone</p>
          <p className="my-3 text-gray-500">Email</p>
        </div>
        <div className="text-right">
          <br />
          <p className="my-3 font-semibold text-black">
            {checkoutState.firstName + " " + checkoutState.lastName}
          </p>
          <p className="my-3 font-semibold text-black">{checkoutState.phoneNumber}</p>
          <p className="my-3 font-semibold text-black">{checkoutState.email}</p>
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex justify-between mt-4">
        <div>
          <p className="text-base font-semibold text-black">Detail Pemesanan</p>
          <p className="px-2 py-2 my-3 text-blue-500 bg-blue-100 w-auto">
            {checkoutState.firstName + " " + checkoutState.lastName}
          </p>
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex justify-between mt-4">
        <div>
          <p className="text-base font-semibold text-black">Detail Pembelian</p>
          <p className="my-3 text-gray-500">{ticketState.detailTicket.airlines.airline}</p>
          <p className="my-3 text-gray-500">Biaya Layanan</p>
          <p className="my-3 text-2xl font-semibold text-black">Harga Total</p>
        </div>
        <div className="text-right">
          <br />
          <p className="my-3 font-semibold text-black">{priceFormatter(ticketState.detailTicket.price)}</p>
          <p className="my-3 font-semibold text-black">{priceFormatter(20000)}</p>
          <p className="my-3 text-2xl font-semibold text-blue-500">
            {priceFormatter(ticketState.detailTicket.price + 20000)}
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <BlobProvider document={<MyDocument {...paymentData} />}>
          {({ url }) => (
            <a
              href={url!}
              download={"E-Ticket.pdf"}
              rel="noopener noreferrer"
              className={
                "bg-blue-500 hover:bg-blue-600 text-white font-normal py-3 rounded w-full text-center"
              }
            >
              Lihat E-Ticket
            </a>
          )}
        </BlobProvider>
      </div>
    </section>
  );
}

export default Invoice;
