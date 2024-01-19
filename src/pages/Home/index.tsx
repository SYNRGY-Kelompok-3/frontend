import Filter from "src/components/organisms/FilterHome";

function Home() {
  return (
    <>
      <main>
        <div className="flex justify-center align-center">
          <h2 className="w-[1100px] text-white text-center font-semibold sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl mt-[50px] leading-[normal]">
            Cari Tiket Murah dan Cepat Bersama Kami
          </h2>
        </div>
        <Filter />
      </main>
    </>
  );
}

export default Home;
