MicroModal.init();
// var utc = require("dayjs/plugin/utc");
// var timezone = require("dayjs/plugin/timezone");

// dayjs.extend(utc);
// dayjs.extend(timezone);

console.log(dayjs.tz());

let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let amOrPm = document.querySelector("#am-or-pm");
let date = document.querySelector("#date");
let timeZone = document.querySelector("#location");

// handle date and timezone
let currentDate = dayjs().format("dddd, MMMM D, YYYY");
date.innerText = currentDate;
let currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
timeZone.innerText = currentTimeZone;

let setTime = () => {
  let currentHour = dayjs().hour(dayjs().hour()).format("h");
  let currentMinute = dayjs().minute();
  let currentSecond = dayjs().second();

  // handle am/pm display
  dayjs().hour() > 11 && (amOrPm.innerText = "P.M.");

  // add 0 to digits when below 10
  currentMinute < 10 && (currentMinute = "0" + currentMinute);
  currentSecond < 10 && (currentSecond = "0" + currentSecond);

  hour.innerText = currentHour + ":";
  minute.innerText = currentMinute + ":";
  second.innerText = currentSecond;
};

setInterval(() => {
  setTime();
}, 1000);
