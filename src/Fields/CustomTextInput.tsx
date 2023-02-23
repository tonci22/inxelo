import React from "react";
import { TextField } from "@mui/material";

type Props = {
  type: string;
  label: string;
  value: string;
  defaulfValue: string;
  error: boolean;
  helperText: string | null;
  onChange: () => void;
};

const CustomTextInput = (props: Props) => {
  return (
    <TextField
      type={props.type}
      defaultValue={props.defaulfValue}
      value={props.value}
      label={props.label}
      error={props.error}
      helperText={props.error ? props.helperText : null}
      style={{ margin: "10px" }}
      onChange={props.onChange}
    ></TextField>
  );
};

export default CustomTextInput;
