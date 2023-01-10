import React from "react";

const Pp = () => {
  const condition = () => {
    let purchase = 10000;
    let person1 = "male";
    let person2 = "female";

    console.log("purchase", purchase);
    if (person1 === "male") {
      return (purchase = purchase - 10 / 100);
    } else if (person2 === "female") {
      return (purchase = purchase - 20 / 100);
    } else {
      return "";
    }
  };

  return <div onClick={() => condition()}>hhfg</div>;
};

export default Pp;
