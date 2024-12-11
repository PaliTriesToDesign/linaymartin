function Countdown() {
 
    return(
      <div className="countDown">
        <div className="daysContainer">
          <p className="days">180</p>
          <p>días</p>
        </div>
        <div className="hoursContainer">
          <p className="hours">13</p>
          <p>horas</p>
        </div>
        <div className="minutesContainer">
          <p className="minutes">43</p>
          <p>minutos</p>
        </div>
        <div className="secondsContainer">
          <p className="seconds">10</p>
          <p>segundos</p>
        </div>
      </div>
    )
}

export default Countdown;