import React, { useState } from "react";
import styles from "./FlightFormEdit.module.css";
import ReactDOM from "react-dom";
import CustomButton from "../Fields/CustomButton.tsx";
import Card from "../Helpers/Card.tsx";
import IFlight from "../Helpers/IFlight.tsx";
import CustomTextInput from "../Fields/CustomTextInput.tsx";
import { Box } from "@mui/material";
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import { PutFlightLink } from "../Service/API_LINK.tsx";
import CustomBackdrop from "./CustomBackdrop.tsx";
import CustomDateTimePicker from "../Fields/CustomDateTimePicker.tsx";

type Props = {
  onShowModal: () => void;
  onChange: () => void;
  onReRender: () => void;
  value: IFlight;
};

const Modal = (props: Props) => {
  const arrDate = new Date(props.value.dateArrival);
  const depDate = new Date(props.value.dateDeparture);

  const [registration, setRegistration] = useState<string>(props.value.aircraftRegistration);
  const [type, setType] = useState<string>(props.value.aircraftType);
  const [dateTimePickerArrival, setDateTimePickerArrival] = useState<Dayjs | null>(dayjs(arrDate).format());
  const [dateTimePickerDeparture, setDateTimePickerDeparture] = useState<Dayjs | null>(dayjs(depDate).format());
  const [flightNumber, setFlightNumber] = useState<string>(props.value.flightNumber);

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const print: IFlight = {
      aircraftRegistration: registration,
      aircraftType: type,
      dateArrival: dateTimePickerArrival,
      dateDeparture: dateTimePickerDeparture,
      flightNumber: flightNumber,
    };

    axios.put(PutFlightLink(props.value.key), print).then(() => {
      props.onReRender();
    });

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
const FlightEditForm = (props: Props) => {
  return (
    <React.Fragment>
      <CustomBackdrop onShowModal={props.onShowModal} />
      {ReactDOM.createPortal(
        <Modal value={props.value} onShowModal={props.onShowModal} onReRender={props.onReRender} />,
        document.getElementById("formModal-root")
      )}
    </React.Fragment>
  );
};

export default FlightEditForm;
