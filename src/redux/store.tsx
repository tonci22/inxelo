import { createStore } from "redux";
import IFlight from "../Helpers/IFlight.tsx";
import dayjs from "dayjs";
import formatAllFlights from "../HelperMethods/FormatAPIData.tsx";
import { types } from "./constants/types.tsx";

const initialState: IFlight = {
  key: "",
  aircraftRegistration: "",
  aircraftType: "",
  dateArrival: dayjs(new Date()).format(),
  dateDeparture: dayjs(new Date()).format(),
  flightNumber: "",
};

const flightFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_REGISTRATION:
      return { ...state, aircraftRegistration: action.aircraftRegistration };
    case types.SET_TYPE:
      return { ...state, aircraftType: action.aircraftType };
    case types.SET_DATE_ARRIVAL:
      return { ...state, dateArrival: dayjs(new Date(action.dateArrival)).format };
    case types.SET_DATE_DEPARTURE:
      return { ...state, dateDeparture: dayjs(new Date(action.dateDeparture)).format };
    case types.SET_FLIGHT_NUMBER:
      return { ...state, flightNumber: action.flightNumber };
    case types.SET_FLIGHT:
      return {
        ...state,
        key: action.flight.key,
        aircraftRegistration: action.flight.aircraftRegistration,
        aircraftType: action.flight.aircraftType,
        dateArrival: dayjs(new Date(action.flight.dateArrival)).format,
        dateDeparture: dayjs(new Date(action.flight.dateArrival)).format,
        flightNumber: action.flight.flightNumber,
      };
    case types.SET_FLIGHTS:
      return { ...state, flights: formatAllFlights(action.flights) };
    case types.SET_DELETE:
      return { ...state, flights: state.flights.filter((obj) => obj.key !== action.key) };
    default:
      return state;
  }
};

const store = createStore(flightFormReducer);

export default store;
export { types };
