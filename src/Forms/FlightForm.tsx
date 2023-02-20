import { useState } from "react";
import IFlight from "../Helpers/IFlight.tsx";
import CustomButton from "../Fields/CustomButton.tsx";
import FlightEditForm from "./FlightEditForm.tsx";
import axios from "axios";
import Card from "../Helpers/Card.tsx";
import styles from "./FlightForm.module.css";
import { useDispatch } from "react-redux";
import { types } from "../redux/store.tsx";
import { flightLinkWithKey } from "../Service/APILink.tsx";

type Props = {
  value: IFlight;
};

const FlightForm = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  const dispatch = useDispatch();

  const deleteHandler = () => {
    axios.delete(flightLinkWithKey(props.value.key)).then(() => {
      dispatch({ type: types.DELETE_FLIGHT, key: props.value.key });
    });
  };

  return (
    <Card
      style={mouseOver ? { backgroundColor: "#FFF1DE" } : { backgroundColor: " #F7DCEC" }}
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
    >
      <div style={{ margin: "15px" }}>
        <p>key: {props.value.key}</p>
        <p>Registration: {props.value.aircraftRegistration}</p>
        <p>Type: {props.value.aircraftType}</p>
        <p>Date Arrival: {props.value.dateArrival}</p>
        <p>Date Departure: {props.value.dateDeparture}</p>
        <p>Flight Number: {props.value.flightNumber}</p>
      </div>
      <div className={styles.btnDistance}>
        <CustomButton onClick={deleteHandler}>DELETE</CustomButton>
        <CustomButton onClick={() => setShowModal(true)}>EDIT</CustomButton>
      </div>
      {showModal && <FlightEditForm value={props.value} onShowModal={() => setShowModal(false)} />}
    </Card>
  );
};

export default FlightForm;
