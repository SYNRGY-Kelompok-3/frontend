import Checkbox from "../atoms/Checkbox";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

const FilterFlightTicket = () => {
  return (
    <div>
      <Accordion>
        <AccordionPanel>
          <AccordionTitle>Maskapai</AccordionTitle>
          <AccordionContent style={{ border: "none !important" }}>
            <div className="mb-3">
              <h1>Pilih Semua</h1>
            </div>
            <div>
              <Checkbox checked={false} label="Garuda" />
              <Checkbox checked={false} label="Lion" />
              <Checkbox checked={false} label="Citylink" />
              <Checkbox checked={false} label="Batik" />
              <Checkbox checked={false} label="AirAsia" />
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
      <Accordion>
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
      <Accordion>
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
      <Accordion>
        <AccordionPanel>
          <AccordionTitle>Waktu Penerbangan</AccordionTitle>
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
    </div>
  );
};

export default FilterFlightTicket;
