import React, { useCallback, useState } from "react";
import styles from "./HeroCard.module.scss";
import {
  faAddressCard,
  faBook,
  faHeart as faSolidHeart,
  faHeartBroken,
  faPortrait,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import HistoryPaper from "../HistoryPaper/HistoryPaper";
import DescriptionPaper from "../DescriptionPaper/DescriptionPaper";
import StatusPaper from "../StatusPaper/StatusPaper";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const HeroCard = ({ hero }) => {
  console.log(hero);
  const [heroData, setHeroData] = useState(hero);
  const [popups, setPopups] = useState({
    history: { show: false, position: { top: 0, left: 0 } },
    description: { show: false, position: { top: 0, left: 0 } },
    status: { show: false, position: { top: 0, left: 0 } },
  });
  const {
    hero_class,
    hp,
    armour,
    history: { name: hero_name },
  } = heroData;
  const name = hero_class.charAt(0).toUpperCase() + hero_class.slice(1);

  const togglePopup = function (element, popup, name) {
    const { top, left } = element.getBoundingClientRect();

    setPopups((prev) => ({
      ...prev,
      [popup]: {
        show: true,
        position: { top: top + 30, left: left + 30 },
      },
    }));
  };
  const closePopup = useCallback((popup) => {
    setPopups((prev) => ({
      ...prev,
      [popup]: { ...prev[popup], show: false },
    }));
  }, []);

  const [cur_hp, max_hp] = hp.split("|");
  const [cur_armour, base_armour] = armour.split("|");

  console.log(heroData);
  return (
    <>
      <div className={styles.card}>
        <div
          style={{
            textAlign: "center",
            color: "#fff",
            textShadow: "1px 1px 3px black",
          }}
        >
          {hero_name || name}
        </div>
        <img
          src={`./media/Images/${hero_class}.png`}
          alt={hero_class}
          style={{ filter: "brightness(2.4)" }}
        />
        <div className={`${styles.basics} small-text`}>
          <span className={`flex aic g5 ${styles["icon-placeholder"]}`}>
            <Fa
              icon={
                +cur_hp === 0
                  ? faHeart
                  : +cur_hp < 5
                  ? faHeartBroken
                  : faSolidHeart
              }
            />{" "}
            {hp.split("|")[0]}
          </span>
          <span className={`flex aic g5 ${styles["icon-placeholder"]}`}>
            <Fa icon={faShieldAlt} /> {cur_armour}
          </span>
        </div>
        <div className={`${styles.options} flex fdc`}>
          <button
            id="history"
            title={`About ${hero_name}`}
            className={`${styles.action} small-text`}
            onClick={(e) => togglePopup(e.target, "history")}
          >
            <Fa icon={faBook} />
          </button>
          <button
            id="description"
            title="Description"
            className={`${styles.action} small-text`}
            onClick={(e) => togglePopup(e.target, "description")}
          >
            <Fa icon={faPortrait} />
          </button>
          <button
            id="status"
            title="Status"
            className={`${styles.action} small-text`}
            onClick={(e) => togglePopup(e.target, "status")}
          >
            <Fa icon={faAddressCard} />
          </button>
        </div>
      </div>
      {popups.history.show && (
        <HistoryPaper
          hero={heroData}
          updateHero={setHeroData}
          position={popups.history.position}
          onClose={() => closePopup("history")}
        />
      )}
      {popups.description.show && (
        <DescriptionPaper
          hero={heroData}
          updateHero={setHeroData}
          position={popups.description.position}
          onClose={() => closePopup("description")}
        />
      )}
      {popups.status.show && (
        <StatusPaper
          hero={heroData}
          position={popups.status.position}
          onClose={() => closePopup("status")}
        />
      )}
    </>
  );
};

export default HeroCard;
