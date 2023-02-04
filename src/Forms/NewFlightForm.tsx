import React, { useState } from "react";
import DateRangePicker from "../Fields/DateRangePicker.tsx";
import CustomTextInput from "../Fields/CustomTextInput.tsx";
import { Box } from "@mui/system";
import CustomButton from "../Fields/CustomButton.tsx";
import { DateRange } from "@mui/x-date-pickers-pro";
import { Dayjs } from "dayjs";

type Props = {
  onChange: () => void;
};

const NewFlightForm = (props: Props) => {
  const [registration, setRegistration] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [dateRangePicker, setDateRangePicker] = useState<DateRange<Dayjs>>([null, null]);
  const [flightNumber, setFlightNumber] = useState<string>("");

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const print = {
      reg: registration,
      typ: type,
      drp: dateRangePicker,
      fN: flightNumber,
    };

    console.log(print);

    setRegistration("");
    setType("");
    setDateRangePicker([null, null]);
    setFlightNumber("");
  };

  return (
    <Box component="form" noValidate autoComplete="off" onSubmit={formSubmitHandler} style={{ padding: "20px" }}>
      <CustomTextInput
        type="text"
        label="Registration"
        value={registration}
        onChange={(e) => setRegistration(e.target.value)}
      ></CustomTextInput>
      <CustomTextInput type="text" label="Type" value={type} onChange={(e) => setType(e.target.value)}></CustomTextInput>
      <DateRangePicker value={dateRangePicker} onChange={(e) => setDateRangePicker(e)} />
      <CustomTextInput
        type="text"
        label="Flight Number"
        value={flightNumber}
        onChange={(e) => setFlightNumber(e.target.value)}
      ></CustomTextInput>
      <CustomButton>CREATE</CustomButton>
    </Box>
  );
};

export default NewFlightForm;
