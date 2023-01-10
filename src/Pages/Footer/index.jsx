import React from "react";
import styles from "./index.module.css";
const Footer = () => {
  const footerArray = [
    "How it works",
    "Pricing",
    "Medication",
    "FAQ",
    "Sign in",
  ];
  return (
    <div className={`${styles.footerContainer}`}>
      <div className={`${styles.subContainerFooter}`}>
        {footerArray?.map((footerItems) => (
          <div className={`${styles.footerItems}`}>{footerItems}</div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
