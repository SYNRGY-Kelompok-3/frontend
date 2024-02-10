import Breadcrumb from "src/components/atoms/Breadcrumb";
import Figure from "src/components/molecules/Figure";
import HeadPrivasi from "src/assets/HeadPrivasi.png";

const PemberitahuanPrivasi = () => {
  const breadcrumbSteps = [{ text: "Beranda", link: "/" }, { text: "Pemberitahuan Privasi" }];

  return (
    <>
      <Breadcrumb steps={breadcrumbSteps} />
      <main className="mx-4 md:mx-28">
        <div className="relative w-full my-5 mb-5 overflow-hidden text-center rounded-xl">
          <Figure
            src={HeadPrivasi}
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
                <span className="text-gray-800 text-4xl">Pemberitahuan Privasi </span>
              </h1>
              <div className="mt-3 text-base text-justify">
                <p className="mb-3 text-gray-500">
                  Anda diharapkan dapat membuat keputusan terkait data pribadi Anda. Pemberitahuan Privasi ini
                  menjelaskan bagaimana Travel Indonesia , anak perusahaan, afiliasi, dan entitas bersama yang
                  dikendalikan bersama memproses Data Pribadi Anda. Proses mencakup pengumpulan, pencatatan,
                  pemegang, organisasi, struktur, penyimpanan, retensi, adaptasi, perubahan, pengambilan,
                  konsultasi, penggunaan, pengungkapan, penghapusan, atau penghancuran Data Pribadi
                  ("Pemrosesan"), baik melalui situs web kami dan aplikasi seluler (masing-masing "Situs" atau
                  "Aplikasi").
                </p>
                <p className="mb-3 text-gray-500">
                  Pemberitahuan Privasi ini berlaku untuk pengguna, pelamar, vendor, pemasok, dan mitra
                  ("Anda", "Milik Anda").
                </p>
                <p className="mb-3 text-gray-500">
                  Harap luangkan waktu sejenak untuk memahami Pemberitahuan Privasi ini dan hubungi kami jika
                  Anda memiliki pertanyaan.
                </p>
              </div>
            </article>

            <article className="mt-8 mb-10 md:mt-10">
              <h3 className="text-lg font-bold text-center md:text-xl lg:text-2xl md:text-left">
                <span className="text-gray-800">1. Data Pribadi yang Kami Kumpulkan</span>
              </h3>
              <div className="mt-3 text-base text-justify">
                <ul className="pl-5">
                  <li className="list-disc text-gray-500">
                    Jika Anda adalah Pengguna Kami mengumpulkan Data Pribadi yang mengidentifikasi atau dapat
                    digunakan untuk mengidentifikasi, menghubungi, atau menentukan lokasi Anda. Tanpa data
                    tersebut, kami tidak dapat memberikan seluruh layanan yang Anda minta di Situs. Data
                    Pribadi yang kami kumpulkan, termasuk tetapi tidak terbatas pada:
                  </li>
                  <li className="list-disc text-gray-500">
                    Di beberapa situasi, kami akan meminta pengguna untuk memberikan dokumen yang dikeluarkan
                    oleh pemerintah sebagai bagian dari proses mengenal-pelanggan jika diperlukan sesuai hukum
                    yang berlaku atau Syarat & Ketentuan kami untuk mengidentifikasi Anda dan memproses
                    permintaan dan/atau layanan tambahan seperti layanan keuangan tertentu, proses
                    pengembalian dana, klaim asuransi, dan pembatalan pemesanan.
                  </li>
                  <li className="list-disc text-gray-500">
                    Jika Anda adalah vendor atau pemasok Agar Situs dan fitur-fiturnya dapat berfungsi, kami
                    mengumpulkan Data Pribadi yang mengidentifikasi atau dapat digunakan untuk
                    mengidentifikasi, menghubungi, atau melokasi orang atau properti atau bisnis yang terkait
                    dengan layanan yang diberikan oleh Vendor di Situs. Kami juga mengumpulkan Data Pribadi
                    lain yang diperlukan untuk melaksanakan kewajiban pembayaran antara Anda dan kami,
                    termasuk kewajiban pajak terkait.
                  </li>
                  <li className="list-disc text-gray-500">
                    Jika Anda menggunakan layanan pembayaran dan/atau transaksi di SitusKami akan mengumpulkan
                    beberapa Data Pribadi tertentu terkait dengan layanan pembayaran dan/atau transaksi yang
                    Anda gunakan. Data-data tersebut termasuk (tapi tidak terbatas pada) nomor kartu
                    pembayaran atau pengidentifikasi akun, pemegang kartu pembayaran atau akun, rincian
                    pengirim dan penerima, dan riwayat transaksi.
                  </li>
                </ul>
              </div>
            </article>

            <article className="mt-8 mb-10 md:mt-10">
              <h3 className="text-lg font-bold text-center md:text-xl lg:text-2xl md:text-left">
                <span className="text-gray-800">
                  2. Bagaimana Kami Mengumpulkan, Memproses, Menggunakan, atau Mengungkapkan Data Pribadi Anda
                </span>
              </h3>
              <div className="mt-3 text-base text-justify">
                <p className="mb-3 text-gray-500">
                  Kami dapat memproses dan menggunakan Data Pribadi Anda berdasarkan permintaan Anda atau
                  Syarat Penggunaan yang telah Anda terima dan setuju untuk terikat, termasuk tetapi tidak
                  terbatas pada tujuan berikut ("Tujuan"):
                </p>
                <ul className="pl-5">
                  <li className="list-disc text-gray-500">
                    mengidentifikasi Anda sebagai pengguna atau vendor, yang mencakup pendaftaran,
                    pemeliharaan, dan pengelolaan akun Anda di Situs kami;
                  </li>
                  <li className="list-disc text-gray-500">
                    menawarkan kepada Anda paket perjalanan dan gaya hidup yang sesuai dengan preferensi Anda;
                  </li>
                  <li className="list-disc text-gray-500">
                    memverifikasi akun, transaksi, dan/atau pendaftaran Anda sebagaimana yang mungkin
                    diperlukan berdasarkan kebijakan kami sebelum menyediakan layanan di Situs;
                  </li>
                  <li className="list-disc text-gray-500">mengelola, mengoperasikan, dan mengurus Situs;</li>
                  <li className="list-disc text-gray-500">
                    menghubungi Anda mengenai penggunaan dan akses Anda ke Situs serta mengelola pertanyaan
                    dan permintaan yang Anda ajukan melalui Situs;
                  </li>
                  <li className="list-disc text-gray-500">
                    menyesuaikan pengalaman Anda saat menggunakan Situs;
                  </li>
                  <li className="list-disc text-gray-500">
                    mengukur dan meningkatkan pengalaman dan kepuasan pelanggan Anda, termasuk mengelola poin
                    hadiah Anda, menyediakan aktivitas pemasaran langsung atau personalisasi, dan menyediakan
                    atau menawarkan layanan dari kami atau mitra bisnis dan vendor kami;
                  </li>
                  <li className="list-disc text-gray-500">
                    memantau dan menganalisis aktivitas Anda, data demografi, perilaku, kueri pencarian, waktu
                    tanggapan untuk berbagai layanan yang disediakan di Situs, dan Data Pribadi apa pun yang
                    Anda berikan ke Situs untuk mendukung dan meningkatkan kinerja, pengalaman pengguna,
                    pertumbuhan, dan fungsi Situs. Kami akan membuat Data Pribadi Anda menjadi anonim (atau
                    menggunakan metode lain sesuai dengan hukum yang berlaku) sebelum kami memprosesnya untuk
                    tujuan ini;
                  </li>
                  <li className="list-disc text-gray-500">
                    mendeteksi dan mencegah pencucian uang, pembiayaan terorisme, penipuan, perilaku abusive,
                    dan aktivitas berbahaya atau ilegal, termasuk mematuhi hukum yang berlaku, merespons
                    permintaan hukum, dan melindungi hak-hak kami;
                  </li>
                  <li className="list-disc text-gray-500">
                    Menerbitkan ulasan Anda tentang layanan kami serta produk yang terdaftar di Situs;
                  </li>
                  <li className="list-disc text-gray-500">
                    Melaksanakan ketentuan Syarat & Ketentuan Travel Indonesia;
                  </li>
                  <li className="list-disc text-gray-500">
                    menyelesaikan sengketa, mengumpulkan pembayaran yang masih belum diselesaikan, dan
                    mengatasi masalah; dan
                  </li>
                  <li className="list-disc text-gray-500">
                    Untuk tujuan lain yang kami beritahukan kepada Anda saat kami mengumpulkan Data Pribadi.
                  </li>
                </ul>
              </div>
            </article>

            <article className="mt-8 mb-10 md:mt-10">
              <h3 className="text-lg font-bold text-center md:text-xl lg:text-2xl md:text-left">
                <span className="text-gray-800">3. Berbagi Data Pribadi Anda</span>
              </h3>
              <div className="mt-3 text-base text-justify">
                <p className="mb-3 text-gray-500">
                  Kami dapat berbagi Data Pribadi Anda dengan perusahaan, organisasi, dan individu lain,
                  termasuk anak perusahaan dan afiliasi kami ("Pihak Ketiga"), yang telah setuju untuk
                  memproses Data Pribadi Anda dengan cara yang aman dan sesuai standar yang diuraikan dalam
                  Pemberitahuan Privasi ini dalam kaitannya dengan penyediaan layanan kami kepada Anda, serta
                  untuk tujuan-tujuan berikut dan tujuan lain sepanjang diperbolehkan oleh hukum yang berlaku:
                  <ul className="pl-5">
                    <li className="list-disc text-gray-500">
                      jika Anda adalah pengguna, untuk membantu memfasilitasi pemesanan atau interaksi lain
                      antara pengguna dan/atau vendor;
                    </li>
                    <li className="list-disc text-gray-500">
                      jika Anda adalah pengguna, untuk tujuan memungkinkan kami dan/atau vendor, untuk
                      melakukan atau memberikan layanan/fitur di Situs;
                    </li>
                    <li className="list-disc text-gray-500">
                      jika Anda adalah vendor, untuk tujuan memungkinkan pengguna untuk meminta, menerima, dan
                      menyelesaikan pemesanan atau reservasi dari pengguna kepada Anda;
                    </li>
                    <li className="list-disc text-gray-500">
                      kepada Pihak Ketiga terkait dengan verifikasi, otentikasi, penilaian risiko, pencegahan
                      penipuan, pengembangan dan pemeliharaan produk sebagaimana yang kami atau Pihak Ketiga
                      lainnya anggap perlu sebelum memberikan Anda layanan, termasuk segala aktivitas terkait
                      pencegahan pencucian uang, pembiayaan terorisme, dan pengecekan secara menyeluruh atas
                      informasi bisnis dan pelanggan;
                    </li>
                    <li className="list-disc text-gray-500">
                      dalam hubungan dengan proses transaksi dalam bentuk penggabungan, konsolidasi, perubahan
                      kendali atau kepemilikan, restrukturisasi, dan/atau penjualan aset perusahaan bisnis
                      Travel Indonesia, maka Data Pribadi Anda dapat diungkapkan dan ditransfer sebagai bagian
                      dari transaksi tersebut (meskipun transaksi tersebut pada akhirnya tidak dilanjutkan);
                    </li>
                    <li className="list-disc text-gray-500">
                      dalam kaitannya dengan layanan kami, kami berbagi Data Pribadi dengan penyedia dan
                      vendor penyelenggara hosting situs web, analisis data, pemasaran, promosi, pemrosesan
                      transaksi kartu kredit, penilaian kelayakan kredit, dan layanan terkait lainnya;
                    </li>
                    <li className="list-disc text-gray-500">
                      jika Anda adalah pengguna, untuk membantu memfasilitasi proses pengembalian dana atau
                      klaim asuransi dengan vendor atau penyedia layanan kami; dan/atau
                    </li>
                    <li className="list-disc text-gray-500">
                      jika Anda adalah pengguna, untuk membantu memfasilitasi proses verifikasi dengan pihak
                      ketiga yang menyediakan layanan di Situs kami.
                    </li>
                  </ul>
                  Kami akan memberi tahu Anda jika kami perlu dan mencari persetujuan Anda jika kami perlu
                  mengumpulkan, menggunakan, atau memproses Data Pribadi Anda untuk tujuan lain selain yang
                  secara tegas disebutkan dalam Pemberitahuan Privasi ini.
                </p>
              </div>
            </article>

            <article className="mt-8 mb-10 md:mt-10">
              <h3 className="text-lg font-bold text-center md:text-xl lg:text-2xl md:text-left">
                <span className="text-gray-800">4. Hak-hak terkait Data Pribadi Anda</span>
              </h3>
              <div className="mt-3 text-base text-justify">
                <p className="mb-3 text-gray-500">
                  Sebagaimana ketentuan hukum dan peraturan yang berlaku, Anda memiliki hak-hak berikut
                  terkait Data Pribadi Anda:
                  <ul className="pl-5">
                    <li className="list-disc text-gray-500">
                      Anda dapat meminta informasi tentang pengolahan Data Pribadi Anda dan memperoleh salinan
                      Data Pribadi tersebut.
                    </li>
                    <li className="list-disc text-gray-500">
                      Anda dapat membuat akun pengguna berdasarkan informasi yang Anda berikan. Dengan
                      memberikan informasi tersebut, mendaftar, dan membuat akun Anda, Anda juga menjamin
                      bahwa informasi yang Anda berikan adalah benar dan akurat, saat ini, dan lengkap.
                    </li>
                    <li className="list-disc text-gray-500">
                      Dalam beberapa kasus, Anda memiliki hak untuk meminta koreksi dan/atau penghapusan Data
                      Pribadi Anda.
                    </li>
                    <li className="list-disc text-gray-500">
                      Dalam keadaan tertentu, Anda dapat meminta pembatasan atau mengajukan keberatan terhadap
                      pengolahan Data Pribadi Anda.
                    </li>
                    <li className="list-disc text-gray-500">
                      Anda dapat mencabut persetujuan Anda terhadap pengolahan Data Pribadi Anda, asalkan
                      pengolahan kami bergantung pada persetujuan Anda.
                    </li>
                    <li className="list-disc text-gray-500">
                      Anda dapat meminta untuk menerima atau mentransfer Data Pribadi Anda ke organisasi lain
                      dalam format yang dapat dibaca oleh mesin, di mana data Anda diproses berdasarkan
                      persetujuan Anda atau sebagai bagian dari kinerja kontrak.
                    </li>
                    <li className="list-disc text-gray-500">
                      Jika hak privasi data Anda dilanggar atau Anda mengalami kerugian akibat pengolahan Data
                      Pribadi Anda yang melanggar hukum, Anda memiliki hak untuk mengajukan keluhan kepada
                      otoritas privasi data yang relevan.
                    </li>
                  </ul>
                  Ketika Anda diberikan opsi untuk berbagi Data Pribadi Anda dengan kami, itu selalu merupakan
                  pilihan Anda. Jika Anda sebelumnya memberikan persetujuan untuk pengolahan dan memutuskan
                  untuk mencabutnya, kami akan menghormati keputusan Anda sesuai dengan kewajiban hukum kami.
                </p>
              </div>
            </article>
          </article>
        </div>
      </main>
    </>
  );
};

export default PemberitahuanPrivasi;
