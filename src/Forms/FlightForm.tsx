import { useState } from "react";
import IFlight from "../Helpers/IFlight.tsx";
import CustomButton from "../Fields/CustomButton.tsx";
import FlightEditForm from "./FlightEditForm.tsx";
import axios from "axios";
import Card from "../Helpers/Card.tsx";
import styles from "./FlightForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../redux/store.tsx";
import { flightLinkWithKey } from "../Service/APILink.tsx";

type Props = {
  value: IFlight;
  onReRender: () => void;
};

const FlightForm = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const flights = useSelector((state) => state.flights);

  const dispatch = useDispatch();

  const deleteHandler = () => {
    axios.delete(flightLinkWithKey(props.value.key)).then(() => {
      dispatch({ type: types.SET_DELETE, key: props.value.key });
      console.log("After deletion: " + flights);
      //props.onReRender();
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
      {showModal && <FlightEditForm value={props.value} onShowModal={() => setShowModal(false)} onReRender={props.onReRender} />}
    </Card>
  );
};

export default FlightForm;
