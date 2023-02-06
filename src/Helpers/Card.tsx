import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const css = styles.card + " " + props.className;
  return (
    <div className={css} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
