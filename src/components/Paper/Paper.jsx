import React, { useMemo, useState } from "react";
import styles from "./Paper.module.scss";
import Closer from "../Closer/Closer";
import { getLevel, nextLevel } from "../../utils/levelUtils";

const Paper = ({ position, onClose, children, size = 300 }) => {
  const [pos, setPos] = useState(position);
  const [spot, setSpot] = useState(null);
  const { top, left } = useMemo(() => pos, [pos]);
  const [level, setLevel] = useState(nextLevel());

  const capture = (me) => {
    const { clientX: startX, clientY: startY, currentTarget } = me;
    const { offsetTop, offsetLeft } = currentTarget;
    const maxLevel = getLevel();
    if (maxLevel > level) setLevel(nextLevel());
    setSpot({ startX, startY, offsetLeft, offsetTop });
  };
  const move = (me) => {
    if (!spot) return;
    const { clientX, clientY } = me;
    const { startX, startY, offsetLeft, offsetTop } = spot;
    const diffX = clientX - startX;
    const diffY = clientY - startY;
    setPos({ left: offsetLeft + diffX, top: offsetTop + diffY });
  };
  const drop = () => {
    setSpot(null);
  };
  return (
    <div
      className={`block ${styles.paper}`}
      style={{
        top: top + "px",
        left: left + "px",
        zIndex: level,
        width: size + "px",
      }}
      onMouseDown={capture}
      onMouseUp={drop}
      onMouseMove={move}
    >
      <div className="flex fdc fwn g10">{children}</div>
      <Closer onClick={onClose} />
    </div>
  );
};

export default Paper;
