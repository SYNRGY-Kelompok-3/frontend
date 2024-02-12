import Checkbox from "../atoms/Checkbox";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

const FilterFlightTicket = () => {
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
              <Checkbox checked={false} label="Garuda" />
              <Checkbox checked={false} label="Citilink" />
              <Checkbox checked={false} label="Batik Air" />
              <Checkbox checked={false} label="Lion Airlines" />
              <Checkbox checked={false} label="Sriwijaya Air" />
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
              <Checkbox checked={false} label="Direct" />
              <Checkbox checked={false} label="1 Transit" />
              <Checkbox checked={false} label="2 Transit" />
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
              <Checkbox checked={false} label="Bagasi & Kabin" />
              <Checkbox checked={false} label="Gratis Makan" />
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
              <Checkbox checked={false} label="00:00 - 08:00" />
              <Checkbox checked={false} label="08:00 - 12:00" />
              <Checkbox checked={false} label="12.00 - 18:00" />
              <Checkbox checked={false} label="18:00 - 24:00" />
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  );
};

export default FilterFlightTicket;
