import React from "react";
import { TextField } from "@mui/material";

type Props = {
  type: string;
  label: string;
  value: string;

  onChange: () => void;
};

const CustomTextInput = (props: Props) => {
  return (
    <TextField
      type={props.type}
      value={props.value}
      label={props.label}
      style={{ margin: "10px" }}
      onChange={props.onChange}
    ></TextField>
  );
};

export default CustomTextInput;
