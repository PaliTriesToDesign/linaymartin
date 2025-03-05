import React, { useState, useEffect } from "react";

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
        <p className="days">{timeLeft.days ?? "0"}</p>
        <p>días</p>
      </div>
      <div className="hoursContainer">
        <p className="hours">{timeLeft.hours ?? "0"}</p>
        <p>horas</p>
      </div>
      <div className="minutesContainer">
        <p className="minutes">{timeLeft.minutes ?? "0"}</p>
        <p>minutos</p>
      </div>
      <div className="secondsContainer">
        <p className="seconds">{timeLeft.seconds ?? "0"}</p>
        <p>segundos</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
