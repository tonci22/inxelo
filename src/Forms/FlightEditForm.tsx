import React, { useState } from "react";
import styles from "./FlightEditForm.module.css";
import ReactDOM from "react-dom";
import CustomButton from "../Fields/CustomButton.tsx";
import Card from "../Helpers/Card.tsx";
import IFlight from "../Helpers/IFlight.tsx";
import CustomTextInput from "../Fields/CustomTextInput.tsx";
import { Box } from "@mui/material";
import axios from "axios";
import { flightLinkWithKey } from "../Service/APILink.tsx";
import CustomBackdrop from "../Modals/CustomBackdrop.tsx";
import CustomDateTimePicker from "../Fields/CustomDateTimePicker.tsx";
import { useDispatch } from "react-redux";
import { types } from "../redux/store.tsx";
import dayjs, { Dayjs } from "dayjs";

type Props = {
  onShowModal: () => void;
  onChange: () => void;
  value: IFlight;
};

const Modal = (props: Props) => {
  const [registration, setRegistration] = useState<string>(props.value.aircraftRegistration);
  const [type, setType] = useState<string>(props.value.aircraftType);
  const [dateTimePickerArrival, setDateTimePickerArrival] = useState<Dayjs | null>(dayjs(new Date(props.value.dateArrival)));
  const [dateTimePickerDeparture, setDateTimePickerDeparture] = useState<Dayjs | null>(
    dayjs(new Date(props.value.dateDeparture))
  );
  const [flightNumber, setFlightNumber] = useState<string>(props.value.flightNumber);

  const dispatch = useDispatch();

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const flightData: IFlight = {
      key: props.value.key,
      aircraftRegistration: registration,
      aircraftType: type,
      dateArrival: dateTimePickerArrival,
      dateDeparture: dateTimePickerDeparture,
      flightNumber: flightNumber,
    };

    axios.put(flightLinkWithKey(props.value.key), flightData).then((response) => {
      dispatch({ type: types.UPDATE_FLIGHT, flight: response.data });
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
          <h2>Edit flight information</h2>
        </header>
        <div className={styles.message}>
          <CustomTextInput label="Registration" value={registration} onChange={(e) => setRegistration(e.target.value)} />
          <CustomTextInput label="Type" value={type} onChange={(e) => setType(e.target.value)} />
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
          <CustomTextInput label="Flight Number" value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} />
        </div>
        <footer className={styles.button}>
          <CustomButton onClick={props.onShowModal}>CANCEL</CustomButton>
          <CustomButton type="submit">Edit</CustomButton>
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
        <Modal value={props.value} onShowModal={props.onShowModal} />,
        document.getElementById("formModal-root")
      )}
    </React.Fragment>
  );
};

export default FlightEditForm;
