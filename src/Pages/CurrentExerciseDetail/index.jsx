import React from "react";
import styles from "./index.module.css";
const CurrentExerciseDetail = () => {
  return (
    <div className={`${styles.MainContainer}`}>
      <div className={`${styles.heading}`}>Current Exercise Routine:</div>
      <div className={`${styles.paragraph}`}>
        Previous weight loss attempts: What have you tried, described in detail
        including diets/ medications / supplements. Have you ever tried
        medications for obesity / weight loss?
      </div>

      <textarea
        style={{ outline: "none" }}
        name=""
        id=""
        // cols="100"
        // rows="12"
        className={`${styles.textArea}`}
      />
    </div>
  );
};

export default CurrentExerciseDetail;
