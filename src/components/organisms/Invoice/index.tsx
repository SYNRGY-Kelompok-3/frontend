import Breadcrumb from '../../atoms/Breadcrumb';
import Steps from '../../atoms/Step';
import Button from "../../atoms/Button";
import BG1 from "../../../assets/BG1.png";
import BG2 from "../../../assets/BG2.png";


function Invoice() {
  const breadcrumbSteps = [
    { text: 'Beranda', link: '#' },
    { text: 'Cari Tiket', link: '#' },
    { text: 'Checkout' },
  ];

  const steps = [
    { text: 'Pemesanan Tiket', isActive: false },
    { text: 'Pembayaran', isActive: false },
    { text: 'Selesai', isActive: true },
  ];

  return (
    <>
      <Breadcrumb steps={breadcrumbSteps} />
      <Steps steps={steps} />
      <section className="container mx-auto my-8 max-w-[78rem] py-2 px-2 border-2 rounded-md">
        <div className="relative flex items-center justify-center rounded-md" style={{ height: '112px', backgroundImage: `url(${BG1}), url(${BG2})`, backgroundRepeat: 'no-repeat, no-repeat', backgroundPosition: 'bottom left, bottom right', backgroundColor: '#3E7BFA' }}>
          <h1 className='text-white text-4xl font-semibold'>Pembelian Tiket Berhasil</h1>
        </div>
        <div className="flex justify-between mt-4">
          <div>
            <p className="font-semibold text-base">Detail Pemesanan</p>
            <p className="text-gray-500 my-3">No Pesanan</p>
            <p className="text-gray-500 my-3">Tanggal Pesanan</p>
          </div>
          <div className="text-right">
            <br />
            <p className="font-semibold my-3">1023123412</p>
            <p className="font-semibold my-3">01 Januari 2024</p>
          </div>
        </div>
        <hr className='my-3'/>
        <div className="flex justify-between mt-4">
          <div>
            <p className="font-semibold text-base">Detail Pembayaran</p>
            <p className="text-gray-500 my-3">Bank Pembayaran</p>
            <p className="text-gray-500 my-3">Nama Rekening</p>
            <p className="text-gray-500 my-3">Nomor Rekening</p>
          </div>
          <div className="text-right">
            <br />
            <p className="font-semibold my-3">Bank Mandiri</p>
            <p className="font-semibold my-3">Charles Wilson</p>
            <p className="font-semibold my-3">654234876321</p>
          </div>
        </div>
        <hr className='my-3'/>
        <div className="flex justify-between mt-4">
          <div>
            <p className="font-semibold text-base">Detail Pemesan</p>
            <p className="text-gray-500 my-3">Nama Lengkap</p>
            <p className="text-gray-500 my-3">No. Handphone</p>
            <p className="text-gray-500 my-3">Email</p>
          </div>
          <div className="text-right">
            <br />
            <p className="font-semibold my-3">Tn. Charles Wilson</p>
            <p className="font-semibold my-3">085310234121</p>
            <p className="font-semibold my-3">travel@gmail.com</p>
          </div>
        </div>
        <hr className='my-3'/>
        <div className="flex justify-between mt-4">
          <div>
            <p className="font-semibold text-base">Detail Pemesanan</p>
            <p className="bg-blue-100 text-blue-500 my-3 py-2 px-2" style={{ width: '76.8rem'}}>Tn. Charles Wilson</p>
          </div>
        </div>
        <hr className='my-3'/>
        <div className="flex justify-between mt-4">
          <div>
            <p className="font-semibold text-base">Detail Pembelian</p>
            <p className="text-gray-500 my-3">Citilink (Dewasa) x1</p>
            <p className="text-gray-500 my-3">Biaya Layanan</p>
            <p className="font-semibold text-2xl my-3">Harga Total</p>
          </div>
          <div className="text-right">
            <br />
            <p className="font-semibold my-3">Rp1.500.000</p>
            <p className="font-semibold my-3">Rp25.000</p>
            <p className="font-semibold text-blue-500 my-3 text-2xl">Rp1.525.000</p>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <Button className={"bg-blue-500 hover:bg-blue-600 text-white font-normal py-3 rounded w-full"} content={"Lihat E-Ticket"} />
        </div>
      </section>
    </>
  );
}

export default Invoice;
