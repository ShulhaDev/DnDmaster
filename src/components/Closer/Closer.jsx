import React from "react";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Closer = ({ onClick }) => {
  const styles = {
    position: "absolute",
    top: "5px",
    right: "5px",
    width: "20px",
    height: "20px",
    cursor: "pointer",
  };
  return (
    <div style={styles} onClick={onClick}>
      <Fa icon={faClose} />
    </div>
  );
};

export default Closer;
