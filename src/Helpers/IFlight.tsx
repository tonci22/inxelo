interface IFlight {
  key: string;
  aircraftRegistration: string;
  aircraftType: string;
  dateArrival: string;
  dateDeparture: string;
  flightNumber: string;
  flights: IFlight[];
}

export default IFlight;
