import { setTimeout } from "timers";

export default () => {
  if (window.location.hash === '#game') {
    const timerBlock = document.querySelector('.game__counter');
    timerBlock.min = timerBlock.querySelector('span:first-child');
    timerBlock.sec = timerBlock.querySelector('span:last-child');
    console.log(timerBlock.min.textContent, timerBlock.sec.textContent);
    let start = null;

    const MINUTES_TIME_LIMIT = 4;
    const SECONDS_TIME_LIMIT = 59;

    // Initially, no time has passed, but this will count up
    // and subtract from the TIME_LIMIT
    let timePassed = 0;
    let timeLeft = `${MINUTES_TIME_LIMIT}:${SECONDS_TIME_LIMIT}`;

    const formatTimeLeft = ()=> {
      // The largest round integer less than or equal to the result of time divided being by 60.
      let minutes = MINUTES_TIME_LIMIT % 60;

      // Seconds are the remainder of the time divided by 60 (modulus operator)
      let seconds = SECONDS_TIME_LIMIT % 60;

      // If the value of seconds is less than 10, then display seconds with a leading zero
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      setTimeout(()=>{
        timerBlock.min.textContent = `0${minutes}`;
        timerBlock.sec.textContent = seconds;
      }, 1000);
    }

    formatTimeLeft();

    // const step = (timestamp)=> {
    //   if (!start) start = timestamp;
    //   let progress = timestamp - start;

    //   timerBlock.style.transform =
    //   'translateX(' + Math.min(-progress / 10, 200) + 'px)';
    //   if (progress < 2000) {
    //     window.requestAnimationFrame(step);
    //   }
    // }
    // window.requestAnimationFrame(step);
  }
}
