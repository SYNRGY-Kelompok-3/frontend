export type TCity = "jakarta" | "bali";
export type TPassengerClass = "economy" | "business";
export type TTransit = "langsung" | "1_transit" | "2_transit";

export interface ITicketListParams {
  page: string | number;
  size: string | number;
  isDiscount?: string | boolean | null;
  freeMeal?: string | boolean | null;
  startDateStr?: string | null;
  endDateStr?: string | null;
  originCity?: TCity;
  destinationCity?: TCity;
  passengerClass?: TPassengerClass;
  transit?: TTransit;
}

export interface ITicket {
  airlines: {
    id: number;
    pathLogo: string;
    airline: string;
  };
  arrivedTime: Date;
  created_date: Date;
  destinationAirport: string;
  destinationCity: string;
  discountPrice: string;
  duration: string;
  flightNumber: string;
  freeMeal: string | boolean;
  flightTime: Date;
  gate: string;
  id: number;
  isDiscount: string | boolean;
  luggage: string;
  originAirport: string;
  originCity: string;
  passengerClass: string;
  price: number;
  transit: string;
  updated_date: Date;
}
