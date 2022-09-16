import React, { useState } from "react";
import styles from "../LabeledItems.module.scss";
import { FaCheck, FaMinus, FaPlus } from "../../../icons";

const LabeledNumber = ({ title, field, icon, min, max, value, onChange }) => {
  const [bonus, setBonus] = useState(0);
  const handleChange = (e) => {
    onChange(field, e.target.value);
  };

  const increment = () => {
    setBonus((prev) => prev + 1);
    // onChange(field, Math.min(+value + 1, max));
  };
  const decrement = () => setBonus((prev) => prev - 1); //onChange(field, Math.max(+value - 1, min));

  const confirm = () => {
    const newValue = Math.max(Math.min(+value + bonus, max), min);
    onChange(field, newValue);
    setBonus(0);
  };

  return (
    <span className="flex fwn fullWidth">
      <span className="flex fwn aic g10">
        {icon}
        <label className={styles.label}>{title}</label>
      </span>
      <span className="flex aic fwn g5" style={{ width: "100%" }}>
        <label style={{ display: "inline-block", width: "60px" }}>
          {value}
        </label>
        <span
          className="flex jcfe aic g5 fwn"
          style={{ width: "-webkit-fill-available" }}
        >
          <button
            className="smallButton decrement"
            type={"button"}
            onClick={decrement}
          >
            <FaMinus />
          </button>
          <label style={{ display: "inline-block", width: "30px" }}>{`${
            bonus > 0 ? "+" : ""
          }${bonus}`}</label>
          <button
            className="smallButton increment"
            type={"button"}
            onClick={increment}
          >
            <FaPlus />
          </button>
          <button
            className="smallButton confirm"
            type={"button"}
            disabled={!bonus}
            onClick={confirm}
          >
            <FaCheck />
          </button>
        </span>
      </span>
    </span>
  );
};

export default LabeledNumber;
