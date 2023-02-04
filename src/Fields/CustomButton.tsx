import React from "react";
import { Button } from "@mui/material";

type Props = {
  children: string;
  disabled: boolean;
  onClick: () => void;
};

const CustomButton = (props: Props) => {
  return (
    <Button variant="contained" type="submit" disabled={props.disabled} onClick={props.onClick}>
      {props.children}
    </Button>
  );
};

export default CustomButton;
