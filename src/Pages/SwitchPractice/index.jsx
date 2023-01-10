import React from "react";

const SwitchPractice = () => {
  const array1 = ["html", "css", "react", "java"];
  const array2 = ["hello", "bye", "happy", "sad"];
  // let x = "";
  // for (let i = 0; i < array.length; i++) {
  //   x += "this is a " + array[i] + " ";
  // }
  // let
  // let len = array.length;
  let text = "";
  for (let i = 0; i < array1.length; i++) {
    text += array1[i] + " " + array2[i] + " , ";
  }

  // while loop
  let whileLoopText = "";
  let i = 0;
  while (array1[i]) {
    whileLoopText += "  The is a " + array1[i];
    i++;
  }

  //do while loop
  let textOfDoWhile = "";
  let x = 1;
  do {
    textOfDoWhile += x + " ";
    x++;
  } while (x < 10);

  //loop break

  let textLoopBreak = "";

  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break;
    }
    textLoopBreak += i + " ";
  }
  //typeof operator
  let d = "kawal";
  let m = +d;
  let s = typeof d + " and " + typeof m;
  console.log("s", s);
  return (
    <>
      {/* loop for  */}
      <div>
        <p>loop for - {text}</p>
      </div>
      {/* while loop  */}
      <div>{whileLoopText}</div>
      {/* do while loop */}
      <div>{textOfDoWhile}</div>
      {/* loo break */}
      <div>{textLoopBreak}</div>
    </>
  );
};

export default SwitchPractice;
