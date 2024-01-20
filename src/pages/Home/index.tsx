import Filter from "src/components/organisms/FilterHome";

function Home() {
  return (
    <>
      <main>
        <div className="flex justify-center align-center">
          <h2 className="w-[80%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[58%] text-white text-center font-semibold text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl mt-[50px]">
            Cari Tiket Murah dan Cepat Bersama Kami
          </h2>
        </div>
        <Filter />
      </main>
    </>
  );
}

export default Home;
