import React from "react";
import "./ControlButtons.css";
const ControlledButton = ({
  active,
  isPaused,
  handleStart,
  handlePauseResume,
  handleReset,
}) => {
  const StartButton = (
    <div className="btn btn-one btn-start" onClick={() => handleStart()}>
      Start
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <div className="btn btn-two" onClick={() => handleReset()}>
        Reset
      </div>
      <div className="btn btn-one" onClick={() => handlePauseResume()}>
        {isPaused ? "Resume" : "Pause"}
      </div>
    </div>
  );
  return (
    <div className="Control-Buttons">
      <div>{active ? ActiveButtons : StartButton}</div>
    </div>
  );
};
export default ControlledButton;
// export default function ControlButtons(props) {
//   const StartButton = (
//     <div className="btn btn-one btn-start" onClick={props.handleStart}>
//       Start
//     </div>
//   );
//   const ActiveButtons = (
//     <div className="btn-grp">
//       <div className="btn btn-two" onClick={props.handleReset}>
//         Reset
//       </div>
//       <div className="btn btn-one" onClick={props.handlePauseResume}>
//         {props.isPaused ? "Resume" : "Pause"}
//       </div>
//     </div>
//   );

//   return (
//     <div className="Control-Buttons">
//       <div>{props.active ? ActiveButtons : StartButton}</div>
//     </div>
//   );
// }
