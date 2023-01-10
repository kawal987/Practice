import React from "react";
import styles from "./index.module.css";
const SandeepSir = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.subContainer}`}>
        <div className={`${styles.headingPart}`}>
          You are right fit for our program!
        </div>
        <div className={`${styles.paragraphPart}`}>
          Remember, no deprivation , Calorie counting or crash diets here.
          <br />
          Lose weight or get fit the right way to get results that last.
          <br />
          All while living your FULLEST life!
        </div>
        <div className={`${styles.buttonPart}`}>
          <div>
            <button className={`${styles.IntakeForm}`}>Intake Form</button>
          </div>
          <div>
            <button className={`${styles.IntakeForm}`}>Explore Plans</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SandeepSir;
