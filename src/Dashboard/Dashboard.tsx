import React, { useEffect, useState } from "react";
import { Card, Grid } from "@mui/material";
import CustomButton from "../Fields/CustomButton.tsx";
import FlightForm from "../Forms/FlightForm.tsx";
import axios from "axios";
import { GetAllFlightsLink } from "../Service/API_LINK.tsx";
import IFlight from "../Helpers/IFlight.tsx";
import NewFlightModal from "../Forms/NewFlightForm.tsx";
/* import GetAllFlights from "../Service/GetAllFlights.tsx"; */

const Dashboard = () => {
  const [reRenderer, setReRender] = useState(false);
  const [getFlights, setGetFlights] = useState<{} | null>({});
  const [showModal, setShowModal] = useState(false);

  const allFlights: IFlight[] = [];

  useEffect(() => {
    axios.get(GetAllFlightsLink).then((data) => {
      setGetFlights(data?.data);
    });
  }, [reRenderer]);

  if (getFlights) {
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
  }

  return (
    <React.Fragment>
      <CustomButton onClick={() => setShowModal(true)}>CREATE NEW FLIGHT</CustomButton>
      {showModal && (
        <NewFlightModal
          onShowModal={() => setShowModal((prevState) => !prevState)}
          onReRender={() => setReRender((prevState) => !prevState)}
        />
      )}
      <Grid container spacing={5} padding={5}>
        {getFlights &&
          allFlights.map((flight) => (
            <Grid key={flight.key} item>
              <FlightForm value={flight} onReRender={() => setReRender((prevState) => !prevState)}></FlightForm>
            </Grid>
          ))}
        {!getFlights && (
          <Card style={{ padding: "5px", margin: "10px", backgroundColor: "#be6464" }}>
            <p>No flights. Please add new flights.</p>
          </Card>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default Dashboard;
