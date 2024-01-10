import Navbar from "../../components/organisms/Navbar";
import Footer from "../../components/organisms/Footer";
import Invoice from "../../components/organisms/Invoice";

function Invoices() {
    return (
        <>
        <section className="bg-white">
            <Navbar />
            <Invoice />
            <Footer />
        </section>
        </>
    );
}

export default Invoices;
