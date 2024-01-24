import Breadcrumb from "../../atoms/Breadcrumb";
import Steps from "../../atoms/Step";
// import Button from "../../atoms/Button";
import BG1 from "../../../assets/Invoices/BG1.png";
import BG2 from "../../../assets/Invoices/BG2.png";
import { MyDocument } from "../PDF";
import { BlobProvider } from "@react-pdf/renderer";
function Invoice() {
  const breadcrumbSteps = [
    { text: "Beranda", link: "#" },
    { text: "Cari Tiket", link: "#" },
    { text: "Checkout" },
  ];

  const steps = [
    { text: "Pemesanan Tiket", isActive: false },
    { text: "Pembayaran", isActive: false },
    { text: "Selesai", isActive: true },
  ];

  const dummyData = {
    orderNumber: 1023123412,
    orderDate: "01 Januari 2024",
    bankName: "Bank Mandiri",
    accountName: "Charles Wilson",
    accountNumber: 654234876321,
    fullName: "Tn. Charles Wilson",
    phoneNumber: "085310234121",
    emailAddress: "travel@gmail.com",
    orderPrice: 1500000,
    serviceFee: 25000,
    totalPayment: 1525000,
  };

  return (
    <>
      <section className="bg-white">
        <Breadcrumb steps={breadcrumbSteps} />
        <Steps steps={steps} />
        <section className="container mx-auto my-8 max-w-[78rem] py-2 px-2 border-2 rounded-md">
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
              <p className="my-3 font-semibold text-black">1023123412</p>
              <p className="my-3 font-semibold text-black">01 Januari 2024</p>
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
              <p className="my-3 font-semibold text-black">Bank Mandiri</p>
              <p className="my-3 font-semibold text-black">Charles Wilson</p>
              <p className="my-3 font-semibold text-black">654234876321</p>
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
              <p className="my-3 font-semibold text-black">Tn. Charles Wilson</p>
              <p className="my-3 font-semibold text-black">085310234121</p>
              <p className="my-3 font-semibold text-black">travel@gmail.com</p>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between mt-4">
            <div>
              <p className="text-base font-semibold text-black">Detail Pemesanan</p>
              <p className="px-2 py-2 my-3 text-blue-500 bg-blue-100" style={{ width: "76.8rem" }}>
                Tn. Charles Wilson
              </p>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between mt-4">
            <div>
              <p className="text-base font-semibold text-black">Detail Pembelian</p>
              <p className="my-3 text-gray-500">Citilink (Dewasa) x1</p>
              <p className="my-3 text-gray-500">Biaya Layanan</p>
              <p className="my-3 text-2xl font-semibold text-black">Harga Total</p>
            </div>
            <div className="text-right">
              <br />
              <p className="my-3 font-semibold text-black">Rp1.500.000</p>
              <p className="my-3 font-semibold text-black">Rp25.000</p>
              <p className="my-3 text-2xl font-semibold text-blue-500">Rp1.525.000</p>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <BlobProvider document={<MyDocument {...dummyData} />}>
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
    </>
  );
}

export default Invoice;
