import Navbar from "../../components/organisms/Navbar";
import Filter from "../../components/organisms/Filter";

function Home() {
    return (
        <>
            <Navbar />
            <h2 className="text-center font-semibold text-6xl mt-[200px] mx-[400px] leading-[normal]">Cari Tiket Murah dan Cepat Bersama Kami</h2>
            <Filter />
        </>
    );
};

export default Home;