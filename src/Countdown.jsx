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

  // Function to add leading zero
  const formatNumber = (number) => String(number ?? "0").padStart(2, "0");

  return (
    <div id="countDown" className="countDown">
      <div id="days" className="daysContainer">
        <p className="days">{formatNumber(timeLeft.days)}</p>
        <p>días</p>
      </div>
      <div id="hours" className="hoursContainer">
        <p className="hours">{formatNumber(timeLeft.hours)}</p>
        <p>horas</p>
      </div>
      <div id="minutes" className="minutesContainer">
        <p className="minutes">{formatNumber(timeLeft.minutes)}</p>
        <p>minutos</p>
      </div>
      <div id="seconds" className="secondsContainer">
        <p className="seconds">{formatNumber(timeLeft.seconds)}</p>
        <p>segundos</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
