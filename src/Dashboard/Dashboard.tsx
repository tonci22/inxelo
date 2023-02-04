import React from "react";
import { useState } from "react";
import Flightss from "../Data.tsx";
import { Grid } from "@mui/material";
import CustomButton from "../Fields/CustomButton.tsx";

const Dashboard = () => {
  const [createFlight, setCreateFlight] = useState(false);

  const arrayValues = [];

  Object.keys(Flightss).forEach((key) => {
    arrayValues.push([key, Flightss[key]]);
  });

  return (
    <React.Fragment>
      <Grid container spacing={5} padding={5}>
        {arrayValues.map((flight) => (
          <Grid key={flight[0]} item>
            {"key: " + flight[0]}
            <br />
            {"Registration: " + flight[1].aircraftRegistration} <br /> {" Type: " + flight[1].aircraftType}
            <br /> {" Date Arrival: " + flight[1].dateArrival}
            <br /> {" Date Departure: " + flight[1].dateDeparture}
            <br /> {" Flight Number: " + flight[1].flightNumber}
          </Grid>
        ))}
      </Grid>
      <CustomButton onClick={() => setCreateFlight((prevState) => !prevState)}>CREATE NEW FLIGHT</CustomButton>
      {createFlight && <div>Form to be Added</div>}
    </React.Fragment>
  );
};

export default Dashboard;
