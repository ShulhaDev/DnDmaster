import React from "react";
import { heroes } from "../../mocks/mockHeroes";
import HeroCard from "../HeroCard/HeroCard";

const HeroesList = () => {
  return (
    <div
      className="flex aic g10"
      style={{ overflowX: "auto", padding: "0 20px" }}
    >
      {heroes.map((hero) => (
        <HeroCard key={hero.hero_class} hero={hero} />
      ))}
    </div>
  );
};

export default HeroesList;
