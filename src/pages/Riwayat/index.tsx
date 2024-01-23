import PrivateProvider from "../PrivateProvider";
import Histories from "src/components/organisms/Riwayat";

function Riwayat() {
  return (
    <>
      <PrivateProvider>
        <Histories />
      </PrivateProvider>
    </>
  );
}

export default Riwayat;
