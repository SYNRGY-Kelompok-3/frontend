import Filter from "src/components/organisms/FilterHome";

function Home() {
  return (
    <>
      <main>
        <div className="flex justify-center align-center">
          <h2
            id="banner"
            className="w-[80%] xl:w-[58%] text-white text-center font-semibold text-4xl md:text-6xl mt-[30px] sm:mt-[50px]"
          >
            Cari Tiket Murah dan Cepat Bersama Kami
          </h2>
        </div>
        <Filter />
      </main>
    </>
  );
}

export default Home;
