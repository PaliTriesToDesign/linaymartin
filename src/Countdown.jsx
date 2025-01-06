// function Countdown() {
 
//     return(
//       <div id="countDown" className="countDown">
//         <div className="daysContainer">
//           <p className="days">180</p>
//           <p>d</p>
//         </div>
//         <div className="hoursContainer">
//           <p className="hours">13</p>
//           <p>h</p>
//         </div>
//         <div className="minutesContainer">
//           <p className="minutes">43</p>
//           <p>m</p>
//         </div>
//         <div className="secondsContainer">
//           <p className="seconds">10</p>
//           <p>s</p>
//         </div>
//       </div>
//     )
// }

// export default Countdown;

import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [targetDate]);

  return (
    <div id="countDown" className="countDown">
      <div className="daysContainer">
        <p className="days">{timeLeft.days ?? '0'}</p>
        <p>d</p>
      </div>
      <div className="hoursContainer">
        <p className="hours">{timeLeft.hours ?? '0'}</p>
        <p>h</p>
      </div>
      <div className="minutesContainer">
        <p className="minutes">{timeLeft.minutes ?? '0'}</p>
        <p>m</p>
      </div>
      <div className="secondsContainer">
        <p className="seconds">{timeLeft.seconds ?? '0'}</p>
        <p>s</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
