import React, { useState } from "react";
import CustomDateTimePicker from "../Fields/CustomDateTimePicker.tsx";
import CustomTextInput from "../Fields/CustomTextInput.tsx";
import { Box } from "@mui/system";
import CustomButton from "../Fields/CustomButton.tsx";
import IFlight from "../Helpers/IFlight.js";
import axios from "axios";
import { flightLink } from "../Service/APILink.tsx";
import ReactDOM from "react-dom";
import CustomBackdrop from "../Modals/CustomBackdrop.tsx";
import styles from "./FlightEditForm.module.css";
import Card from "../Helpers/Card.tsx";

type Props = {
  onChange: () => void;
  onShowModal: () => void;
  onReRender:()=>void;
};

const NewFlightForm = (props: Props) => {

  const [registration, setRegistration] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [dateTimePickerArrival, setDateTimePickerArrival] = useState<Date>(new Date());
  const [dateTimePickerDeparture, setDateTimePickerDeparture] = useState<Date>(new Date());
  const [flightNumber, setFlightNumber] = useState<string>("");

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const print: IFlight = {
      aircraftRegistration: registration,
      aircraftType: type,
      dateArrival: dateTimePickerArrival,
      dateDeparture: dateTimePickerDeparture,
      flightNumber: flightNumber,
    };

    axios.post(flightLink, print).then(() => {
      props.onReRender();
    });

    setRegistration("");
    setType("");
    setDateTimePickerArrival(new Date());
    setDateTimePickerDeparture(new Date());
    setFlightNumber("");
    props.onShowModal(false);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={formSubmitHandler}
      style={{ padding: "20px", maxWidth: "300px" }}
    >
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>Add new flight</h2>
        </header>
        <div className={styles.message}>
          <CustomTextInput
            label="Registration"
            value={registration}
            onChange={(e) => setRegistration(e.target.value)}
          ></CustomTextInput>
          <CustomTextInput label="Type" value={type} onChange={(e) => setType(e.target.value)}></CustomTextInput>
          <CustomDateTimePicker
            label="Date of Arrival"
            value={dateTimePickerArrival}
            onChange={(e) => setDateTimePickerArrival(e)}
          />
          <CustomDateTimePicker
            label="Date of Departure"
            value={dateTimePickerDeparture}
            onChange={(e) => setDateTimePickerDeparture(e)}
          />
          <CustomTextInput
            label="Flight Number"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
          ></CustomTextInput>
        </div>
        <footer className={styles.button}>
          <CustomButton onClick={props.onShowModal}>CANCEL</CustomButton>
          <CustomButton type="submit">CREATE</CustomButton>
        </footer>
      </Card>
    </Box>
  );
};

const NewFlightModal = (props: Props) => {
  return (
    <React.Fragment>
      <CustomBackdrop onShowModal={props.onShowModal}/>
      {ReactDOM.createPortal(<NewFlightForm onShowModal={props.onShowModal} onReRender={props.onReRender} />, document.getElementById("formModal-root"))}
    </React.Fragment>
  );
};

export default NewFlightModal;
