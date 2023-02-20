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
  flights: [],
};

const flightFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_FLIGHT:
      return {
        ...state,
        flights: [...state.flights, action.flight],
      };
    case types.SET_FLIGHTS:
      return { ...state, flights: formatAllFlights(action.flights) };
    case types.UPDATE_FLIGHT:
      return {
        ...state,
        flights: state.flights.map((tempFlight) => {
          if (tempFlight.key === action.flight.key) return action.flight;
          else return tempFlight;
        }),
      };
    case types.DELETE_FLIGHT:
      return { ...state, flights: state.flights.filter((obj) => obj.key !== action.key) };
    default:
      return state;
  }
};

const store = createStore(flightFormReducer);

export default store;
export { types };
