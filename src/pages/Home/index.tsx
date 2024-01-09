import Navbar from "src/components/organisms/Navbar";
import Filter from "src/components/organisms/FilterHome";
import Footer from "src/components/organisms/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center align-center">
                <h2 className="w-[1100px] text-center font-semibold text-6xl mt-[50px] leading-[normal]">Cari Tiket Murah dan Cepat Bersama Kami</h2>
            </div>
            <Filter />
            <Footer />
        </>
    );
};

export default Home;