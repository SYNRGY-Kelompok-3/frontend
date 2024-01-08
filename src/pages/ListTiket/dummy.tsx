import { useState } from "react";
import Button from "../../components/atoms/Button";
import DetailTiket from "../../components/organisms/PopUp/detailTicket";

function DummyDetailTiket() {

    const [showModalDetailTicket, setShowModalDetailTicket] = useState(false);

    const handleButtonClick = () => {
        setShowModalDetailTicket(true);
    }

    const handleCloseClick = () => {
        setShowModalDetailTicket(false);
    }

    return (
        <>
            <Button 
                content={"Trigger PopUp"} 
                className={"button_large flex justify-center items-center self-stretch pl-[3.4375rem] pr-[3.4375rem] p-5 rounded bg-[#3e7bfa]"} 
                onClick={handleButtonClick}
            />

            {showModalDetailTicket && <DetailTiket onClose={handleCloseClick}/>}
        </>
    )
}

export default DummyDetailTiket;