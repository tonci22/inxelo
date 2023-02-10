/* const baseLink =
  "https://inxelo-interview-project-default-rtdb.europe-west1.firebasedatabase.app/6143360a-eb5e-4e72-8f41-c567dfbfe12c/";
export const flightLink = baseLink + "flights.json";
export const flightLinkWithKey = (key: string) => {
  return baseLink + "flights/" + key + ".json";
}; */

export const flightLink = "http://localhost:8080/api/flights/";

export const flightLinkWithKey = (key: string) => {
  return flightLink + key;
};
