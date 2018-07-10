import React from "react";
import styles from "./FormBtn.css";

export const FormBtn = props => (
  <button {...props} className="input-button hvr-fade hvr-grow-shadow">
    {props.children}
  </button>
);
