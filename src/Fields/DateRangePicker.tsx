import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DesktopDateRangePicker } from "@mui/x-date-pickers-pro/DesktopDateRangePicker";

type Props = {
  value: [null, null];
  onChange: () => void;
};

const DateRangePicker = (props: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} localeText={{ start: "Date Arrival", end: "Date Departure" }}>
      <DesktopDateRangePicker
        value={props.value}
        disablePast
        onChange={props.onChange}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
};

export default DateRangePicker;
