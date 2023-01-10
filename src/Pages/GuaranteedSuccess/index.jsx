import React from "react";
import styles from "./index.module.css";
const GuaranteedSuccess = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.topContainer}`}>
        <div className={`${styles.leftPart}`}>
          <img
            className={`${styles.userImage}`}
            src={`https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
            alt=""
          />

          <div className={`${styles.info}`}>
            <div className={`${styles.name}`}>Micheal</div>
            <div className={`${styles.Member}`}>Pepper Member</div>
          </div>
        </div>

        <div className={`${styles.rightPart}`}>
          <div className={`${styles.heading}`}>
            Guaranteed <span className={`${styles.success}`}>Success</span>
          </div>
          <div className={`${styles.description}`}>
            We're so confident in our program that we're now Guaranteeing at
            least 10% weight loss during your pepper year , or you'll get your
            money back (see terms){" "}
          </div>
        </div>
      </div>

      <div className={`${styles.bottomContainer}`}>
        <div className={`${styles.bottomHeading}`}>
          Take The First Step Today
        </div>
        <button className={`${styles.JoinNowButton}`}>Join Now</button>
      </div>
    </div>
  );
};

export default GuaranteedSuccess;
