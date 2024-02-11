import BG1 from "../../../assets/Invoices/BG1.png";
import BG2 from "../../../assets/Invoices/BG2.png";
import { MyDocument } from "../PDF";
import { BlobProvider } from "@react-pdf/renderer";
import { useParams } from "react-router-dom";

function Invoice() {

  const formatDate = (dateString: string) => {
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    const [day, month, year] = dateString.split("-");
    const monthIndex = parseInt(month) - 1;
    return `${parseInt(day)} ${months[monthIndex]} ${year}`;
  };

  const {
    orderNumber,
    orderDate,
    bankName,
    accountName,
    accountNumber,
    fullName,
    phoneNumber,
    emailAddress,
    orderName,
    orderPrice,
    serviceFee,
    totalPayment,
  } = useParams();

  const paymentData = {
    orderNumber: orderNumber ?? "Undefined Param",
    orderDate: orderDate ? formatDate(orderDate!) : "Undefined Param",
    bankName: bankName ?? "Undefined Param",
    accountName: accountName ?? "Undefined Param",
    accountNumber: accountNumber ?? "Undefined Param",
    fullName: fullName ?? "Undefined Param",
    phoneNumber: phoneNumber ?? "Undefined Param",
    emailAddress: emailAddress ?? "Undefined Param",
    orderName: orderName ?? "Undefined Param",
    orderPrice: orderPrice ?? "Undefined Param",
    serviceFee: serviceFee ?? "Undefined Param",
    totalPayment: totalPayment ?? "Undefined Param",
  };

  return (
    <section className="bg-white">
      <section className="container mx-auto  max-w-[78rem] py-2 px-2 border-2 rounded-md">
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
          <h1 className="text-4xl font-semibold text-white">Pembelian Tiket Berhasil</h1>
        </div>
        <div className="flex justify-between mt-4">
          <div>
            <p className="text-base font-semibold text-black">Detail Pemesanan</p>
            <p className="my-3 text-gray-500">No Pesanan</p>
            <p className="my-3 text-gray-500">Tanggal Pesanan</p>
          </div>
          <div className="text-right">
            <br />
            <p className="my-3 font-semibold text-black">{paymentData.orderNumber}</p>
            <p className="my-3 font-semibold text-black">{paymentData.orderDate}</p>
          </div>
        </div>
        <hr className="my-3" />
        <div className="flex justify-between mt-4">
          <div>
            <p className="text-base font-semibold text-black">Detail Pembayaran</p>
            <p className="my-3 text-gray-500">Bank Pembayaran</p>
            <p className="my-3 text-gray-500">Nama Rekening</p>
            <p className="my-3 text-gray-500">Nomor Rekening</p>
          </div>
          <div className="text-right">
            <br />
            <p className="my-3 font-semibold text-black">{paymentData.bankName}</p>
            <p className="my-3 font-semibold text-black">{paymentData.accountName}</p>
            <p className="my-3 font-semibold text-black">{paymentData.accountNumber}</p>
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
            <p className="my-3 font-semibold text-black">{paymentData.fullName}</p>
            <p className="my-3 font-semibold text-black">{paymentData.phoneNumber}</p>
            <p className="my-3 font-semibold text-black">{paymentData.emailAddress}</p>
          </div>
        </div>
        <hr className="my-3" />
        <div className="flex justify-between mt-4">
          <div>
            <p className="text-base font-semibold text-black">Detail Pemesanan</p>
            <p className="px-2 py-2 my-3 text-blue-500 bg-blue-100" style={{ width: "76.8rem" }}>
              {paymentData.fullName}
            </p>
          </div>
        </div>
        <hr className="my-3" />
        <div className="flex justify-between mt-4">
          <div>
            <p className="text-base font-semibold text-black">Detail Pembelian</p>
            <p className="my-3 text-gray-500">{paymentData.orderName}</p>
            <p className="my-3 text-gray-500">Biaya Layanan</p>
            <p className="my-3 text-2xl font-semibold text-black">Harga Total</p>
          </div>
          <div className="text-right">
            <br />
            <p className="my-3 font-semibold text-black">
              Rp. {Number(paymentData.orderPrice).toLocaleString()}
            </p>
            <p className="my-3 font-semibold text-black">
              Rp. {Number(paymentData.serviceFee).toLocaleString()}
            </p>
            <p className="my-3 text-2xl font-semibold text-blue-500">
              Rp. {Number(paymentData.totalPayment).toLocaleString()}
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
    </section>
  );
}

export default Invoice;
