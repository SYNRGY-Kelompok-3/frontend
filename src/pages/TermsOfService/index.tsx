import Breadcrumb from "src/components/atoms/Breadcrumb";
import Figure from "src/components/molecules/Figure";
import Head from "src/assets/Head.png";

const TermOfService = () => {
  const breadcrumbSteps = [{ text: "Beranda" }, { text: "Ketentuan Layanan" }];

  return (
    <>
      <Breadcrumb steps={breadcrumbSteps} />
      <main className="mx-4 md:mx-28">
        <div className="relative w-full my-5 mb-5 overflow-hidden text-center rounded-xl">
          <Figure
            src={Head}
            alt={"Thumbnail Tentang Kami"}
            className={"w-full h-[100px] sm:h-[160px] object-cover rounded-xl"}
            caption={""}
            captionClass={"text-center mb-5"}
          />
        </div>

        <div className="container-fluid max-w-screen-xl mx-auto md:justify-center">
          <article className="mx-auto mt-5">
            <article className="mt-8 mb-10 md:mt-10">
              <h1 className="text-lg font-bold text-center md:text-xl lg:text-2xl md:text-left">
                <span className="text-gray-800 text-4xl">Syarat dan Ketentuan </span>
                <span className="text-blue-700 text-4xl">Travel Indonesia</span>
              </h1>
              <div className="mt-3 text-base text-justify">
                <p className="mb-3 text-gray-800">
                  SYARAT DAN KETENTUAN DI BAWAH INI HARUS DIBACA SEBELUM MENGGUNAKAN SITUS INI. PENGGUNAAN
                  ANDA ATAS SITUS INI MENUNJUKKAN PENERIMAAN ANDA TERHADAP SYARAT DAN KETENTUAN INI.
                </p>
                <p className="mb-3 text-gray-500">
                  Situs web dan aplikasinya ("Situs") dikelola oleh Grup Perusahaan Travel Indonesia, termasuk
                  anak perusahaan dan perusahaan afiliasinya ("Kami", “Travel Indonesia”). Dengan mengakses
                  dan/atau menggunakan Situs, Anda mengakui bahwa Anda telah membaca dan memahami, dan
                  menyetujui untuk terikat oleh Syarat dan Ketentuan yang ditetapkan di bawah ini
                  (“Ketentuan”) dan syarat dan ketentuan lainnya dalam kaitannya dengan Situs, baik yang
                  dituliskan secara tegas pada Ketentuan ini, maupun yang dibuat di luar Ketentuan ini namun
                  memberikan rujukan pada Ketentuan ini. Apabila Anda tidak setuju untuk terikat dengan
                  Ketentuan ini, Anda tidak dapat mengakses atau menggunakan bagian manapun dari Situs.
                  Ketentuan ini merupakan perjanjian yang mengikat secara hukum bagi Anda sebagai seorang
                  pengguna (“Anda” atau “Pengguna”). Anda harus setidaknya berusia delapan belas (18) tahun
                  untuk menggunakan Situs ini.
                </p>
                <p className="mb-3 text-gray-500">
                  Harap diketahui bahwa Kami dapat mengubah, memodifikasi, menambah dan menghapus Syarat ini
                  sewaktu-waktu apabila diperlukan untuk mematuhi ketentuan peraturan perundang-undangan yang
                  berlaku bagi Kami atau mencerminkan perubahan atas operasional Kami, dengan ketentuan bahwa
                  Kami akan melakukan upaya yang wajar untuk menyampaikan pemberitahuan mengenai perubahan
                  atas Ketentuan. Anda wajib melakukan pengecekan Ketentuan secara berkala untuk memastikan
                  kepatuhan Anda terhadap versi terkini. Dengan terus menggunakan Situs ini setelah adanya
                  perubahan terhadap Ketentuan, Anda dianggap menyepakati dan menyetujui perubahan tersebut.
                </p>
                <p className="mb-3 text-gray-500">
                  Jika Anda menggunakan salah satu layanan Kami yang lain, maka penggunaan Anda atas layanan
                  tersebut tunduk pada syarat dan ketentuan yang berlaku untuk layanan tersebut, yang akan
                  disediakan bagi Anda ketika Anda menggunakan layanan lainnya tersebut.
                </p>
              </div>
            </article>

            <article className="mt-8 mb-10 md:mt-10">
              <h3 className="text-lg font-bold text-center md:text-xl lg:text-2xl md:text-left">
                <span className="text-gray-800">1. LINGKUP LAYANAN KAMI </span>
              </h3>
              <div className="mt-3 text-base text-justify">
                <p className="mb-3 text-gray-500">
                  Melalui Situs, Travel Indonesia menyediakan platform daring sehingga Anda dapat menelusuri
                  dan melakukan pemesanan berbagai jenis maskapai penerbangan, kereta, dan layanan
                  transportasi lainnya, akomodasi dan penginapan sementara (yang mana yang sesuai), tiket
                  masuk acara, tiket masuk objek wisata, paket perjalanan wisata, pulsa prabayar, voucher
                  untuk kartu sim prabayar, aktivitas wisata dan tur, produk kuliner dan kebutuhan
                  sehari-hari, layanan kesehatan pilihan, serta produk atau layanan lainnya, termasuk
                  menggunakan metode pembayaran yang tersedia sehubungan dengan pilihan produk atau layanan
                  tersebut ("Layanan"). Pengguna dapat melakukan pemesanan layanan yang disediakan oleh
                  maskapai penerbangan yang bekerjasama dengan Travel Indonesia ("Vendor") di Situs. Dengan
                  melakukan pemesanan melalui Situs, Anda akan dapat memesan dan/atau membeli tiket pesawat,
                  tiket kereta dan transportasi lainnya, akomodasi dan penginapan sementara (yang mana yang
                  sesuai), tiket masuk acara, tiket masuk objek wisata, paket perjalanan wisata, pulsa
                  prabayar, voucher untuk kartu sim prabayar, aktivitas wisata dan tur, produk kuliner dan
                  kebutuhan sehari-hari, serta produk atau layanan lainnya. Kami akan memberikan konfirmasi
                  pemesanan atau
                </p>
              </div>
            </article>

            <article className="mt-8 mb-10 md:mt-10">
              <h3 className="text-lg font-bold text-center md:text-xl lg:text-2xl md:text-left">
                <span className="text-gray-800">2. BIAYA TAMBAHAN </span>
              </h3>
              <div className="mt-3 text-base text-justify">
                <p className="mb-3 text-gray-500">
                  Setiap harga yang tercantum pada Situs ini hanya tersedia dengan ketentuan tertentu dan
                  harga tersebut dapat berubah tergantung pada berbagai faktor seperti namun tidak terbatas
                  pada ketersediaan pemesanan, lamanya pemesanan dan/atau faktor lainnya. Harga yang tersedia
                  dapat mencakup pajak tambahan dan biaya lainnya lagi tapi dalam keadaan tertentu mungkin
                  tidak termasuk pajak dan biaya jasa lainnya (seperti biaya tips untuk pemandu wisata, biaya
                  fasilitas lainnya (jika ada), dan biaya-biaya lainnya yang timbul dari penggunaan layanan
                  selain layanan Travel Indonesia (apabila ada)). Anda setuju bahwa Anda bertanggung jawab
                  untuk memverifikasi total biaya yang harus dibayar dan persyaratan lainnya dan rincian
                  ketika email konfirmasi telah dikirim. Anda harus memverifikasi pemesanan dalam lembar
                  pemesanan, dan Anda dapat membatalkan pemesanan setiap saat sebelum konfirmasi akhir
                  dilakukan. Harga yang ditampilkan terperinci sehingga Anda dapat melihat jumlah yang harus
                  dibayar, biaya tambahan apa pun yang disebabkan penggunaan kartu kredit atau biaya antarbank
                  yang dikenakan untuk biaya pengiriman akan dibebankan kepada Anda. Jika terdapat kekurangan
                  dalam jumlah yang dibayarkan, maka Travel Indonesia dapat memberikan notifikasi surat
                  elektronik mengenai kekurangan dalam jumlah yang harus dibayarkan Anda.
                </p>
              </div>
            </article>

            <article className="mt-8 mb-10 md:mt-10">
              <h3 className="text-lg font-bold text-center md:text-xl lg:text-2xl md:text-left">
                <span className="text-gray-800">3. AKUN PENGGUNA </span>
              </h3>
              <div className="mt-3 text-base text-justify">
                <p className="mb-3 text-gray-500">
                  Anda harus membuat akun untuk menggunakan Layanan. Untuk tujuan pendaftaran, Kami akan
                  mengumpulkan dan memproses informasi pribadi anda, seperti nama, alamat surat elektronik
                  (surel), dan nomor telepon genggam Anda ketika Anda melakukan pendaftaran. Anda harus
                  memberikan Kami informasi yang akurat, lengkap dan terkini dan setuju untuk bukti identitas
                  diri yang mungkin Kami minta dengan alasan yang jelas. Kami akan mengumpulkan, menggunakan,
                  mengungkapkan, dan memproses informasi pribadi Anda sesuai dengan Kebijakan Privasi Kami.
                </p>
              </div>
            </article>

            <article className="mt-8 mb-10 md:mt-10">
              <h3 className="text-lg font-bold text-center md:text-xl lg:text-2xl md:text-left">
                <span className="text-gray-800">4. LAIN-LAIN </span>
              </h3>
              <div className="mt-3 text-base text-justify">
                <p className="mb-3 text-gray-500">
                  Ketentuan yang tercantum dalam Syarat ini dan setiap perjanjian dan kebijakan yang
                  disertakan atau dirujuk dalam Syarat ini membentuk seluruh perjanjian dan pemahaman antara
                  para pihak sehubungan dengan Layanan dan Situs dan menggantikan setiap perjanjian atau
                  pemahaman sebelumnya antara para pihak sehubungan dengan hal tersebut. Dengan ini para pihak
                  juga mengecualikan semua ketentuan yang tersirat. Dalam memasuki perjanjian yang dibentuk
                  oleh Syarat ini, para pihak tidak bersandar pada informasi, pernyataan, garansi, pemahaman,
                  kesanggupan, janji atau jaminan siapa pun selain yang secara tegas diatur dalam Syarat ini.
                </p>
              </div>
            </article>
          </article>
        </div>
      </main>
    </>
  );
};

export default TermOfService;
