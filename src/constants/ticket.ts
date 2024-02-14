export type TCity = "jakarta" | "bali" | "";
export type TPassengerClass = "economy" | "business" | "";
export type TTransit = "langsung" | "1_transit" | "2_transit" | "";

export interface ITicketListParams {
  page: string | number;
  size: string | number;
  isDiscount?: string | boolean | null;
  freeMeal?: string | boolean | null;
  startDateStr?: Date | string;
  endDateStr?: Date | string;
  originCity: TCity;
  destinationCity: TCity;
  passengerClass?: TPassengerClass;
  airlines: string | null;
  transit?: TTransit;
}

export interface ITicket {
  airlines: {
    id: number;
    pathLogo: string;
    airline: string;
  };
  arrivedTime: Date | null | string;
  created_date: Date | null | string;
  destinationAirport: string;
  destinationCity: string;
  discountPrice: string;
  duration: string;
  flightNumber: string;
  freeMeal: string | boolean;
  flightTime: Date | null | string;
  gate: string;
  id: number;
  isDiscount: string | boolean;
  luggage: string;
  originAirport: string;
  originCity: string;
  passengerClass: string;
  price: number;
  transit: string;
  updated_date: Date | null | string;
}

export const transitText: Record<TTransit, string> = {
  langsung: "Langsung",
  "1_transit": "1x Transit",
  "2_transit": "2x Transit",
  "": "",
};
