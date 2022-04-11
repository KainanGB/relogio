const digitalClock = document.querySelector(".digital");
const pointerHour = document.querySelector(".p_h");
const pointerMinutes = document.querySelector(".p_m");
const pointerSeconds = document.querySelector(".p_s");

function clockHandler() {
  let timeNow = new Date();
  let getHour = timeNow.getHours();
  let getMinutes = timeNow.getMinutes();
  let getSeconds = timeNow.getSeconds();

  digitalClock.innerHTML = `${fixZero(getHour)}:${fixZero(
    getMinutes
  )}:${fixZero(getSeconds)}`;

  let hoursDeg = (360 / 12) * getHour - 90;
  let minutesDeg = (360 / 60) * getMinutes - 90;
  let secondsDeg = (360 / 60) * getSeconds - 90;

  pointerSeconds.style.transform = `rotate(${secondsDeg}deg)`;
  pointerMinutes.style.transform = `rotate(${minutesDeg}deg)`;
  pointerHour.style.transform = `rotate(${hoursDeg}deg)`;
}

function fixZero(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(clockHandler, 1000);
clockHandler();
