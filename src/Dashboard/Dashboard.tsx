import React from "react";
import { useState } from "react";
import Flights from "../Data.tsx";
import { Grid } from "@mui/material";
import CustomButton from "../Fields/CustomButton.tsx";
import NewFlightForm from "../Forms/NewFlightForm.tsx";
import FlightForm from "../Forms/FlightForm.tsx";
import IFlight from "../Helpers/IFlight.tsx";

const Dashboard = () => {
  const [createFlight, setCreateFlight] = useState(false);


  const allFlights: IFlight = [];

  Object.keys(Flights).forEach((key) => {
    allFlights.push({
      key: key,
      aircraftRegistration: Flights[key].aircraftRegistration,
      aircraftType: Flights[key].aircraftType,
      dateArrival: Flights[key].dateArrival,
      dateDeparture: Flights[key].dateDeparture,
      flightNumber: Flights[key].flightNumber,
    });
  });

  return (
    <React.Fragment>
      <Grid container spacing={5} padding={5}>
        {allFlights.map((flight) => (
          <Grid key={flight.key} item width={270}>
           <FlightForm value={flight}></FlightForm>
          </Grid>
        ))}
      </Grid>
      <CustomButton onClick={() => setCreateFlight((prevState) => !prevState)}>CREATE NEW FLIGHT</CustomButton>
      {createFlight && (
        <div>
          <NewFlightForm></NewFlightForm>
        </div>
      )}
    </React.Fragment>
  );
};

export default Dashboard;
