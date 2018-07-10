import React from 'react';
import ReactTooltip from 'react-tooltip';
import styles from "./CheckboxOrRadioGroup.css";

const CheckboxOrRadioGroup = (props) => (
  <div>
    <label className="form-label form-label-desc">{props.title}</label>
    <div className="checkbox-group">
      {props.options.map(opt => {
        return (
          <label key={opt.name} className="form-label capitalize" data-tip={opt.desc} data-for={opt.name}>
            <ReactTooltip className="toolTip" id={opt.name} type='dark' getContent={(dataTip) => `${dataTip}`} />
            <input
              className="form-checkbox"
              name={props.setName}
              onChange={props.controlFunc}
              value={opt.name}
              checked={props.selectedOptions.indexOf(opt.name) > -1}
              type={props.type} /> {opt.name}
          </label>
        );
      })}
    </div>
  </div>
);

export default CheckboxOrRadioGroup;