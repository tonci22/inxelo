import { Button } from "@mui/material";

type Props = {
  children: string;
  disabled: boolean;
  type: string;
  onClick: () => void;
};

const CustomButton = (props: Props) => {
  return (
    <Button
      variant="contained"
      type={props.type}
      sx={{ margin: "10px" }}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
