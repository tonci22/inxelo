import React from "react";
import { useState } from "react";
import Flights from "../Data.tsx";
import { Grid } from "@mui/material";
import CustomButton from "../Fields/CustomButton.tsx";
import NewFlightForm from "../Forms/NewFlightForm.tsx";

const Dashboard = () => {
  const [createFlight, setCreateFlight] = useState(false);

  interface IFlight {
    key: string;
    aircraftRegistration: string;
    aircraftType: string;
    dateArrival: string;
    dateDeparture: string;
    flightNumber: string;
  }

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
          <Grid key={flight.key} item>
            {"key: " + flight.key}
            <br />
            {"Registration: " + flight.aircraftRegistration} <br /> {" Type: " + flight.aircraftType}
            <br /> {" Date Arrival: " + flight.dateArrival}
            <br /> {" Date Departure: " + flight.dateDeparture}
            <br /> {" Flight Number: " + flight.flightNumber}
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
