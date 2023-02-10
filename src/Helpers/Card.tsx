import React from "react";
import styles from "./Card.module.css";

type Props = {
  className: string;
  style: React.CSSProperties;
  children: React.ReactNode;
  onMouseOut: () => void;
  onMouseOver: () => void;
};

const Card = (props: Props) => {
  const css = styles.card + " " + props.className;
  return (
    <div className={css} style={props.style} onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}>
      {props.children}
    </div>
  );
};

export default Card;
