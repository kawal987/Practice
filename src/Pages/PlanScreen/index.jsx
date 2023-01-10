import React from "react";
import styles from "./index.module.css";

const PlanScreen = () => {
  return (
    <div className={`${styles.mainPlanScreenContainer}`}>
      <div className={`${styles.subPlanScreenContainer}`}>
        <div className={`${styles.topContainer}`}>
          Monthly <br />
          Subscription
        </div>
        <div className={`${styles.bottomContainer}`}>
          <div className={`${styles.ParagraphContainer}`}>
            Ozempic medication as prescribed by the practitioner
          </div>
          <div className={`${styles.dummy}`} />
          <div className={`${styles.ParagraphContainer}`}>
            Practitioner's Appointment $ follow up{" "}
          </div>
          <div className={`${styles.dummy}`} />
          <div className={`${styles.ParagraphContainer}`}>
            Obesity Specialist Referral
          </div>
          <div className={`${styles.dummy}`} />
          <div className={`${styles.ParagraphContainer}`}>
            Lab ResultS Review
          </div>
          <div className={`${styles.dummy}`} />
          <div className={`${styles.ParagraphContainer}`}>
            Medication Dispensing $ shipping
          </div>
          <div className={`${styles.price}`}>$280 CAD </div>
        </div>
      </div>
    </div>
  );
};

export default PlanScreen;
