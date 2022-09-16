import React from "react";
import Paper from "../Paper/Paper";
import LabeledNumber from "../LabeledFields/LabeledNumber/LabeledNumber";
import {
  FaBody,
  FaBrain,
  FaCharisma,
  FaEmptyHeart,
  FaFist,
  FaHeart,
  FaHeartBroken,
  FaIntelligence,
  FaMagic,
  FaRun,
  FaShield,
  FaSpeed,
  FaWisdom,
} from "../../icons";
import Divider from "../Divider/Divider";

const DescriptionPaper = ({ hero, updateHero, ...props }) => {
  const {
    hp,
    mp,
    armour,
    stance,
    strength,
    agility,
    intelligence,
    wisdom,
    charisma,
    constitution,
    speed,
  } = hero;

  const [cur_hp, max_hp] = hp.split("|");
  const [cur_mp, max_mp] = mp.split("|");
  const [cur_armour, base_armour] = armour.split("|");

  const armourStyle =
    +cur_armour > +base_armour
      ? { color: "darkolivegreen" }
      : +cur_armour < +base_armour
      ? { color: "indianred" }
      : { color: "#2c5f6b" };

  const HpIcon = () => {
    return +cur_hp === 0 ? (
      <FaEmptyHeart />
    ) : cur_hp < 5 ? (
      <FaHeartBroken style={{ color: "darkred" }} />
    ) : (
      <FaHeart style={{ color: "indianred" }} />
    );
  };

  const handleChange = (field, value) => {
    if (field === "hp") {
      return updateHero({ ...hero, hp: `${value}|${max_hp}` });
    }
    if (field === "mp") {
      return updateHero({ ...hero, mp: `${value}|${max_mp}` });
    }
    if (field === "armour") {
      console.log(field, value, base_armour);
      return updateHero({ ...hero, armour: `${value}|${base_armour}` });
    }
    return updateHero({ ...hero, [field]: value });
  };
  return (
    <Paper size={350} {...props}>
      <Divider type={"solid"} />
      {/*<div className="flex fdc g5" style={{ width: "calc(100% - 10px)" }}>*/}
      <LabeledNumber
        title={"HP:"}
        field={"hp"}
        min={0}
        icon={<HpIcon />}
        max={max_hp}
        value={cur_hp}
        onChange={handleChange}
      />
      <LabeledNumber
        title={"MP:"}
        field={"mp"}
        min={0}
        icon={<FaMagic style={{ color: "#4c4cc0" }} />}
        max={max_mp}
        value={cur_mp}
        onChange={handleChange}
      />
      <LabeledNumber
        title={"Armour:"}
        field={"armour"}
        min={0}
        icon={<FaShield style={armourStyle} />}
        max={30}
        value={+cur_armour}
        onChange={handleChange}
      />
      <Divider type={"dashed"} />
      <LabeledNumber
        title={"Strength:"}
        field={"strength"}
        min={-5}
        icon={<FaFist style={{ color: "indianred" }} />}
        max={10}
        value={+strength}
        onChange={handleChange}
      />
      <LabeledNumber
        title={"Agility:"}
        field={"agility"}
        min={-5}
        icon={<FaRun style={{ color: "darkolivegreen" }} />}
        max={10}
        value={+agility}
        onChange={handleChange}
      />
      <LabeledNumber
        title={"Intellect:"}
        field={"intelligence"}
        min={-5}
        icon={<FaIntelligence style={{ color: "#4c4cc0" }} />}
        max={10}
        value={+intelligence}
        onChange={handleChange}
      />
      <LabeledNumber
        title={"Body:"}
        field={"constitution"}
        min={-5}
        icon={<FaBody />}
        max={10}
        value={+constitution}
        onChange={handleChange}
      />
      <LabeledNumber
        title={"Wisdom:"}
        field={"wisdom"}
        min={-5}
        icon={<FaWisdom style={{ color: "darkviolet" }} />}
        max={10}
        value={+wisdom}
        onChange={handleChange}
      />
      <LabeledNumber
        title={"Charisma:"}
        field={"charisma"}
        min={-5}
        icon={<FaCharisma style={{ color: "darkcyan" }} />}
        max={10}
        value={+charisma}
        onChange={handleChange}
      />
      <LabeledNumber
        title={"Speed:"}
        field={"speed"}
        min={-5}
        icon={<FaSpeed />}
        max={10}
        value={+speed}
        onChange={handleChange}
      />
      {/*</div>*/}
      <Divider type={"solid"} />
    </Paper>
  );
};
export default DescriptionPaper;
