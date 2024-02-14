// import { useState } from "react";
import Checkbox from "../atoms/Checkbox";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { useSearchParams } from "react-router-dom";

const FilterFlightTicket = () => {
  // const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const handleAirlineChange = (checked: boolean, label: string) => {
    searchParams.set("airlines", !checked ? "" : label);
    setSearchParams(searchParams);
    // if (checked) {
    //   setSelectedAirlines([...selectedAirlines, label]);
    // } else {
    //   setSelectedAirlines(selectedAirlines.filter((airline) => airline !== label));
    // }
  };
  const handleTransitChange = (checked: boolean, label: string) => {
    searchParams.set("transit", !checked ? "" : label);
    setSearchParams(searchParams);
    // if (checked) {
    //   setSelectedAirlines([...selectedAirlines, label]);
    // } else {
    //   setSelectedAirlines(selectedAirlines.filter((airline) => airline !== label));
    // }
  };
  return (
    <div className="space-y-3">
      <Accordion style={{ borderRadius: "12px" }}>
        <AccordionPanel>
          <AccordionTitle>Maskapai</AccordionTitle>
          <AccordionContent style={{ border: "none !important" }}>
            <div className="mb-3">
              <h1>Pilih Semua</h1>
            </div>
            <div>
              <Checkbox
                label="Garuda"
                initialChecked={false}
                onChange={(checked) => handleAirlineChange(checked, "Garuda")}
              />
              <Checkbox
                label="Citilink"
                initialChecked={false}
                onChange={(checked) => handleAirlineChange(checked, "Citilink")}
              />
              <Checkbox
                label="Batik Air"
                initialChecked={false}
                onChange={(checked) => handleAirlineChange(checked, "Batik Air")}
              />
              <Checkbox
                label="Lion Airlines"
                initialChecked={false}
                onChange={(checked) => handleAirlineChange(checked, "Lion Airlines")}
              />
              <Checkbox
                label="Sriwijaya Air"
                initialChecked={false}
                onChange={(checked) => handleAirlineChange(checked, "Sriwijaya Air")}
              />
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
      <Accordion style={{ borderRadius: "12px" }}>
        <AccordionPanel>
          <AccordionTitle>Jumlah Transit</AccordionTitle>
          <AccordionContent>
            <div className="mb-3">
              <h1>Pilih Semua</h1>
            </div>
            <div>
              <Checkbox
                label="Langsung"
                initialChecked={false}
                onChange={(checked) => handleTransitChange(checked, "langsung")}
              />
              <Checkbox
                label="1 Transit"
                initialChecked={false}
                onChange={(checked) => handleTransitChange(checked, "1_transit")}
              />
              <Checkbox
                label="2 Transit"
                initialChecked={false}
                onChange={(checked) => handleTransitChange(checked, "2_transit")}
              />
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
      <Accordion style={{ borderRadius: "12px" }}>
        <AccordionPanel>
          <AccordionTitle>Fasilitas Penerbangan </AccordionTitle>
          <AccordionContent>
            <div className="mb-3">
              <h1>Pilih Semua</h1>
            </div>
            <div>
              <Checkbox
                label="Bagasi & Kabin"
                initialChecked={false}
                onChange={(checked) => console.log(checked)}
              />
              <Checkbox
                label="Gratis Makan"
                initialChecked={false}
                onChange={(checked) => console.log(checked)}
              />
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
      <Accordion style={{ borderRadius: "12px" }}>
        <AccordionPanel>
          <AccordionTitle>Waktu Penerbangan</AccordionTitle>
          <AccordionContent>
            <div className="mb-3">
              <h1>Pilih Semua</h1>
            </div>
            <div>
              <Checkbox
                label="00:00 - 08:00"
                initialChecked={false}
                onChange={(checked) => console.log(checked)}
              />
              <Checkbox
                label="08:00 - 12:00"
                initialChecked={false}
                onChange={(checked) => console.log(checked)}
              />
              <Checkbox
                label="12.00 - 18:00"
                initialChecked={false}
                onChange={(checked) => console.log(checked)}
              />
              <Checkbox
                label="18:00 - 24:00"
                initialChecked={false}
                onChange={(checked) => console.log(checked)}
              />
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  );
};

export default FilterFlightTicket;
