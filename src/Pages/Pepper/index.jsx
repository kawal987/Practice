import React from "react";
import styles from "./index.module.css";
import ozempicLogo from "./OzempicLogo.png";
import pepperLogoBlack from "./PepperLogoBlack.png";
import pepperSeeds2 from "./PepperSeeds2.png";

const Pepper = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.leftContainer}`}>
        <img src={pepperLogoBlack} alt="" className={`${styles.pepperLogo}`} />
        <div className={`${styles.dummyRightContainer}`}>
          <div className={`${styles.dummyRight}`} />
        </div>
        <div className={`${styles.adviceToTakeIt}`}>
          Take your first step to <br /> a healthy life
        </div>
        <img src={pepperSeeds2} alt="" className={`${styles.pepperSeeds}`} />
      </div>
      <div className={`${styles.rightContainer}`}>
        <img className={`${styles.ozempicLogo}`} src={ozempicLogo} alt="" />
        <div className={`${styles.dummyLeft}`} />
        <div className={`${styles.pepperConsultant}`}>
          Pepper consultant <br />
          will help you <br /> reach your goal!
        </div>
      </div>
    </div>
  );
};

export default Pepper;
