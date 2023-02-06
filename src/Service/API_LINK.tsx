const baseLink =
  "https://inxelo-interview-project-default-rtdb.europe-west1.firebasedatabase.app/6143360a-eb5e-4e72-8f41-c567dfbfe12c/";
export const GetAllFlightsLink = baseLink + "flights.json";
export const PostFlightLink = baseLink + "flights.json";
export const PutFlightLink = (key: string) => {
  return baseLink + "flights/" + key + ".json";
};
