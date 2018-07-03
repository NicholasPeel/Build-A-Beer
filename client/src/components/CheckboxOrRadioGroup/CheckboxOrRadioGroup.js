import React from 'react';
import ReactTooltip from 'react-tooltip';
import styles from "./CheckboxOrRadioGroup.css";

const CheckboxOrRadioGroup = (props) => (
  <div>
    <label className="form-label group-desc">{props.title}</label>
    <div className="checkbox-group">
      {props.options.map(opt => {
        return (
          <label key={opt} className="form-label capitalize">

            <input
              className="form-checkbox"
              name={props.setName}
              onChange={props.controlFunc}
              value={opt}
              checked={props.selectedOptions.indexOf(opt) > -1}
              type={props.type} /> {opt}
          </label>
        );
      })}
    </div>
  </div>

  //  data - tip={ props.toolTip } data -for= { opt }
  // <ReactTooltip id={opt} type='dark' getContent={(dataTip) => `${dataTip}`} />
);

export default CheckboxOrRadioGroup;