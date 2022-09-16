import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faBrain,
  faCheck,
  faEye,
  faFistRaised,
  faHeart as faSolidHeart,
  faHeartBroken,
  faMagic,
  faMale,
  faMinus,
  faPlus,
  faRunning,
  faShieldAlt,
  faShoePrints,
  faTheaterMasks,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const createIcon =
  (icon) =>
  ({ style, ...props }) =>
    <Fa icon={icon} style={{ width: "15px", ...style }} {...props} />;

export const FaPlus = createIcon(faPlus);
export const FaMinus = createIcon(faMinus);
export const FaMagic = createIcon(faMagic);
export const FaHeart = createIcon(faSolidHeart);
export const FaHeartBroken = createIcon(faHeartBroken);
export const FaEmptyHeart = createIcon(faHeart);
export const FaShield = createIcon(faShieldAlt);
export const FaCheck = createIcon(faCheck);
export const FaFist = createIcon(faFistRaised);
export const FaRun = createIcon(faRunning);
export const FaIntelligence = createIcon(faBookOpen);
export const FaWisdom = createIcon(faEye);
export const FaCharisma = createIcon(faTheaterMasks);
export const FaBody = createIcon(faMale);
export const FaSpeed = createIcon(faShoePrints);
