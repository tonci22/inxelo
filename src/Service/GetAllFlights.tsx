import axios from "axios";
import IFlight from "../Helpers/IFlight.tsx";
import { useEffect, useState } from "react";
import { GetAllFlightsLink } from "./API_LINK.tsx";

export default function GetAllFlights() {
  const [getFlights, setGetFlights] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const allFlights: IFlight = [];

  useEffect(() => {
    //setIsLoading(true);
    axios.get(GetAllFlightsLink).then((data) => {
      setGetFlights(data?.data);
    });
  }, [getFlights]);

  //setIsLoading(false);
  Object.keys(getFlights).forEach((key) => {
    allFlights.push({
      key: key,
      aircraftRegistration: getFlights[key].aircraftRegistration,
      aircraftType: getFlights[key].aircraftType,
      dateArrival: getFlights[key].dateArrival,
      dateDeparture: getFlights[key].dateDeparture,
      flightNumber: getFlights[key].flightNumber,
    });
  });

  /* return [allFlights, isLoading]; */
  return allFlights;
}
