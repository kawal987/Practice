import React, { useState } from "react";

const PrimeNo = () => {
  const [array, setArray] = useState([]);
  // for (var counter = 0; counter <= 100; counter++) {
  //   var notPrime = false;
  //   for (var i = 2; i <= counter; i++) {
  //     if (counter % i === 0 && i !== counter) {
  //       notPrime = true;
  //     }
  //   }
  //   if (notPrime === false) {
  //     console.log(counter);
  //   }
  // }
  // let array = [];
  let num = 100;

  const prime = () => {
    // console.log("num", num);
    let aa = 0;
    let newArr = [];
    // console.log("aa", aa);
    for (let number = 2; number <= num; number++) {
      if (num % number === 0 && number !== num) {
        // if (num > 1) {
        aa = number;
        // }

        newArr = [...array, number];
        // return aa;
      }
      console.log("newArr", newArr);
    }
    setArray(newArr);
  };

  return (
    <div onClick={() => prime()}>
      prime no. is{" "}
      {array?.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default PrimeNo;
