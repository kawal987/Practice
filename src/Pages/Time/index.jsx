import React, { useState } from "react";

const Time = () => {
  const [paused, setPaused] = useState(false);
  // 10 minutes from now
  var time_in_minutes = 10;
  var current_time = Date.parse(new Date());
  var deadline = new Date(current_time + time_in_minutes * 60 * 1000);

  const time_remaining = (endTime) => {
    var t = Date.parse(endTime) - Date.parse(new Date());

    var seconds = Math.floor((t / 1000) % 60);

    var minutes = Math.floor((t / 1000 / 60) % 60);

    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);

    var days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };

  var timeInterval;
  console.log("timeInterval", timeInterval);
  const run_clock = (id, endTime) => {
    var clock = document.getElementById(id);
    const update_clock = () => {
      var t = time_remaining(endTime);

      clock.innerHTML = "minutes: " + t.minutes + "<br>seconds: " + t.seconds;
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    };
    update_clock(); // run function once at first to avoid delay
    var timeInterval = setInterval(update_clock, 1000);
    console.log("timeInterval", timeInterval);
  };
  run_clock("clockDiv", deadline);
  console.log("run_clock", run_clock);

  var time_left; // time left on the clock when paused

  const pause_clock = () => {
    if (!paused) {
      setPaused(true);
      clearInterval(timeInterval); // stop the clock
      time_left = time_remaining(deadline).total; // preserve remaining time
    }
  };

  const resume_clock = () => {
    if (paused) {
      setPaused(false);

      // update the deadline to preserve the amount of time remaining
      const deadline = new Date(Date.parse(new Date()) + time_left);
      console.log("deadline", deadline);
      // start the clock
      run_clock("clockDiv", deadline);
    }
  };

  // document.getElementById("pause").innerHTML = pause_clock();
  // document.getElementById("resume").innerHTML = resume_clock();

  return (
    <div>
      {/* <div id="clockdiv">dddddddddddddddddddd</div> */}

      <button id="pause_clock" onClick={() => pause_clock()}></button>
      <button id="resume" onClick={() => resume_clock()}></button>
    </div>
  );
};

export default Time;
