import Filter from "../../components/organisms/FilterHome";

function Home() {
    return (
        <>
            <div className="flex justify-center align-center">
                <h2 className="w-[1100px] text-center font-semibold text-6xl mt-[50px] leading-[normal]">Cari Tiket Murah dan Cepat Bersama Kami</h2>
            </div>
            <Filter />
        </>
    );
};

export default Home;