import Backdrop from "@mui/material/Backdrop";

type Props = {
  onShowModal: () => void;
};

const CustomBackdrop = (props: Props) => {
  return <Backdrop sx={{ zIndex: () => 99, backgroundColor: "rgb(0,0,0,0.8)" }} open={true} onClick={props.onShowModal} />;
};

export default CustomBackdrop;
