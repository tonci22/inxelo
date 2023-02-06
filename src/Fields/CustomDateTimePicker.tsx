import TextField from "@mui/material/TextField";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { Box } from "@mui/material";

type Props = {
  value: Date;
  label: string;
  onChange: () => void;
};

const CustomDateTimePicker = (props: Props) => {
  return (
    <Box autoComplete="off" style={{ padding: "10px", maxWidth: "250px", marginLeft: "40px" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          label={props.label}
          disablePast
          value={props.value}
          onChange={props.onChange}
          renderInput={(params) => <TextField {...params} sx={{ margin: "10px" }} />}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default CustomDateTimePicker;
