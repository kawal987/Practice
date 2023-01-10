import React from "react";
import styles from "./index.module.css";
import girlImageBg from "./girlBg.png";
import Girl from "./Girl.png";
const PlanMonthly = () => {
  return (
    <div className={`${styles.planMainContainer}`}>
      <div className={`${styles.planLeftContainer}`}>
        {" "}
        <div className={`${styles.subLeftContainer}`}>
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
      </div>
      <div className={`${styles.planRightContainer}`}>
        <div className={`${styles.imageContainer}`}>
          <img className={`${styles.girlImageBg}`} src={girlImageBg} alt="" />
          <img className={`${styles.Girl}`} src={Girl} alt="" />
        </div>
        <div className={`${styles.paragraphContainer}`}>
          Let's Begin Our <br /> Journey To Discovered <br /> A New You!
        </div>
      </div>
    </div>
  );
};

export default PlanMonthly;
