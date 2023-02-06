import { useState } from "react";
import IFlight from "../Helpers/IFlight.tsx";
import CustomButton from "../Fields/CustomButton.tsx";
import FlightEditForm from "../Modals/FlightEditForm.tsx";
import axios from "axios";
import Card from "../Helpers/Card.tsx";

type Props = {
  value: IFlight;
  onReRender: () => void;
};

const FlightForm = (props: Props) => {
  const [showModal, setShowModal] = useState(false);

  const deleteHandler = () => {
    axios
      .delete(
        "https://inxelo-interview-project-default-rtdb.europe-west1.firebasedatabase.app/6143360a-eb5e-4e72-8f41-c567dfbfe12c/flights/" +
          props.value.key +
          ".json"
      )
      .then(() => {
        console.log("flight deleted");
        props.onReRender();
      });
  };
  return (
    <Card style={{ backgroundColor: "rgb(255, 153, 51)", padding: "10px" }}>
      {"key: " + props.value.key}
      <br />
      {"Registration: " + props.value.aircraftRegistration} <br /> {" Type: " + props.value.aircraftType}
      <br /> {" Date Arrival: " + props.value.dateArrival}
      <br /> {" Date Departure: " + props.value.dateDeparture}
      <br /> {" Flight Number: " + props.value.flightNumber}
      <div>
        <CustomButton onClick={() => setShowModal(true)}>EDIT</CustomButton>
        <CustomButton onClick={deleteHandler}>DELETE</CustomButton>
      </div>
      {showModal && <FlightEditForm value={props.value} onShowModal={() => setShowModal(false)} onReRender={props.onReRender} />}
    </Card>
  );
};

export default FlightForm;
