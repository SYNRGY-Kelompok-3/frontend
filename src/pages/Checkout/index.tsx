import Breadcrumb from "../../components/organisms/Breadcrumb";
import StepsOrder from "../../components/organisms/Steps";
import Order from "../../components/organisms/Order";
import Footer from "../../components/organisms/Footer";
import NavbarLogin from "../../components/organisms/NavbarLogin";

function Checkout() {
    return (
        <>
            <NavbarLogin />
            <Breadcrumb />
            <StepsOrder />
            <Order />
            <Footer />
        </>
    )
}

export default Checkout;