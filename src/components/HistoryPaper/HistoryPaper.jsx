import React from "react";

import Paper from "../Paper/Paper";
import LabeledText from "../LabeledFields/LabeledText/LabeledText";
import { modify } from "../../utils/utils";

const HistoryPaper = ({ hero, updateHero, ...props }) => {
  const handleChange = (field, value) => {
    const newHero = modify(hero, field, value);
    console.log("============", newHero);
    updateHero(newHero);
  };
  console.log(hero.history.name);

  return (
    <Paper {...props}>
      <div className="flex fdc g5" style={{ width: "calc(100% - 10px)" }}>
        <LabeledText
          title={"Name"}
          value={hero.history.name}
          field={"history.name"}
          onChange={handleChange}
        />
        <LabeledText
          title={"Story"}
          value={hero.history.story}
          field={"history.story"}
          lines={6}
          onChange={handleChange}
        />
        <LabeledText
          title={"Temper"}
          value={hero.history.temper}
          field={"history.temper"}
          lines={3}
          onChange={handleChange}
        />
      </div>
    </Paper>
  );
};

export default HistoryPaper;
