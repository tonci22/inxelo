import React from "react";
import IFlight from "../Helpers/IFlight.tsx";
import CustomButton from "../Fields/CustomButton.tsx";

const FlightForm = (props: IFlight) => {
  return (
    <React.Fragment>
      {"key: " + props.value.key}
      <br />
      {"Registration: " + props.value.aircraftRegistration} <br /> {" Type: " + props.value.aircraftType}
      <br /> {" Date Arrival: " + props.value.dateArrival}
      <br /> {" Date Departure: " + props.value.dateDeparture}
      <br /> {" Flight Number: " + props.value.flightNumber}
      <CustomButton>EDIT</CustomButton>
      <CustomButton>DELETE</CustomButton>
    </React.Fragment>
  );
};

export default FlightForm;
