import React from "react";
import styles from "../LabeledItems.module.scss";

const LabeledText = ({ title, field, value, lines = 1, onChange }) => {
  const handleChange = (e) => onChange(field, e.target.value);
  return (
    <span className="flex fwn fullWidth">
      <label className={styles.label}>{title}:</label>
      {lines > 1 ? (
        <textarea
          className={styles.input}
          rows={lines}
          onChange={handleChange}
          value={value}
        />
      ) : (
        <input className={styles.input} value={value} onChange={handleChange} />
      )}
    </span>
  );
};

export default LabeledText;
