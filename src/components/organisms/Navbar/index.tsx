import Logo from "../../../assets/Logo.png";

import Button from "../../atoms/Button";

function Navbar() {
    return (
        <>
            <section>
                <nav className="flex justify-between items-center mx-28 my-8">
                    <div className="flex items-center">
                        <img src={Logo} alt="logo" style={{width: "21px", height: "21px"}}/>
                        <h1 className="font-bold text-2xl ml-2">Travel.id</h1>
                    </div>
                    <div className="flex">
                        <h1 className="font-semibold text-sm mx-2">Home</h1>
                        <h1 className="font-semibold text-sm mx-2">About Us</h1>
                        <h1 className="font-semibold text-sm mx-2">Contact Us</h1>
                        <h1 className="font-semibold text-sm mx-2">Article</h1>
                    </div>
                    <div>
                        <Button className={"font-medium text-sm mr-5"} content={"Daftar Sekarang"}/>
                        <Button className={"bg-sky-600 text-white font-medium text-sm py-2 px-3 rounded-md"} content={"Masuk"} />
                    </div>
                </nav>
            </section>
        </>
    );
};

export default Navbar;