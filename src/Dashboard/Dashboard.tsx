import React, { useEffect, useState } from "react";
import { Card, Grid } from "@mui/material";
import CustomButton from "../Fields/CustomButton.tsx";
import FlightForm from "../Forms/FlightForm.tsx";
import axios from "axios";
import { flightLink } from "../Service/APILink.tsx";
import IFlight from "../Helpers/IFlight.tsx";
import NewFlightModal from "../Forms/NewFlightForm.tsx";
import { useSelector, useDispatch } from "react-redux";
import { types } from "../redux/store.tsx";
import formatAllFlights from "../HelperMethods/FormatAPIData.tsx";

const Dashboard = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const flights = useSelector((state: IFlight) => state.flights);

  let allFlights: IFlight[] = [];

  useEffect(() => {
    axios.get(flightLink).then((data) => {
      dispatch({ type: types.SET_FLIGHTS, flights: data?.data });
    });
  }, [dispatch]);

  if (flights) {
    allFlights = formatAllFlights(flights);
  }

  return (
    <React.Fragment>
      <CustomButton onClick={() => setShowModal(true)}>CREATE NEW FLIGHT</CustomButton>
      {showModal && <NewFlightModal onShowModal={() => setShowModal((prevState) => !prevState)} />}
      <Grid container spacing={5} padding={5}>
        {flights &&
          allFlights.map((flight) => (
            <Grid key={flight.key} item>
              <FlightForm value={flight}></FlightForm>
            </Grid>
          ))}
        {(flights.length === 0 || !flights) && (
          <Card style={{ padding: "5px", margin: "10px", backgroundColor: "#be6464" }}>
            <p>No flights. Please add new flights.</p>
          </Card>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default Dashboard;
