import {useState, useEffect} from 'react';

const Timer = () => {
  const [timer, setTimer] = useState(new Date('03/31/2021').getTime())
  const [state, setState] = useState ({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const tick = setInterval(() => updateTimer(), 1000);
    return() => clearInterval(tick)
  }, []);

  const updateTimer = () => {
    
  // TODO: Code to calculate how long between the countdown date and the current time
  if (timer) {
    // Get the current time
    const currentTime = new Date().getTime();

    // Get the time remaining until the countdown date
    const distanceToDate = timer - currentTime;

    // Calculate days, hours, minutes and seconds remaining
    let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    let minutes = Math.floor(
      (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
    );
    let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

    // For visual appeal, add a zero to each number that's only one digit
    const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (numbersToAddZeroTo.includes(hours)) {
      hours = `0${hours}`;
    } else if (numbersToAddZeroTo.includes(minutes)) {
      minutes = `0${minutes}`;
    } else if (numbersToAddZeroTo.includes(seconds)) {
      seconds = `0${seconds}`;
    }

    // Set the state to each new time
    setState({ days: days, hours: hours, minutes, seconds });
  }  
};
  return (
    <div>
   <div className="wrapper">
        <div className='time'>{state.days || '0'}
        </div>
        <small className='label'>DAYS</small>
        <div className='time'>{state.hours || '00'}</div>
        <small className='label'>HOURS</small>
        <div className='time'>{state.minutes || '00'}</div>
        <small className='label'>MINUTES</small>
        <div className='time'>{state.seconds || '00'}</div>
        <small className='label'>SECONDS</small>


      </div>
      </div>
    );
}
 
export default Timer;