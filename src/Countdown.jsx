function Countdown() {
 
    return(
      <div id="countDown" className="countDown">
        <div className="daysContainer">
          <p className="days">180</p>
          <p>d</p>
        </div>
        <div className="hoursContainer">
          <p className="hours">13</p>
          <p>h</p>
        </div>
        <div className="minutesContainer">
          <p className="minutes">43</p>
          <p>m</p>
        </div>
        <div className="secondsContainer">
          <p className="seconds">10</p>
          <p>s</p>
        </div>
      </div>
    )
}

export default Countdown;