import IFlight from "../Helpers/IFlight.js";

export default function formatAllFlights(nestedObject) {
  const allFlights: IFlight[] = [];

  if (nestedObject == null) return null;

  Object.keys(nestedObject).forEach((key) => {
    allFlights.push({
      key: nestedObject[key].key,
      aircraftRegistration: nestedObject[key].aircraftRegistration,
      aircraftType: nestedObject[key].aircraftType,
      dateArrival: nestedObject[key].dateArrival,
      dateDeparture: nestedObject[key].dateDeparture,
      flightNumber: nestedObject[key].flightNumber,
    });
  });
  return allFlights;
}
