MicroModal.init();
let dayjs = require("dayjs");
var utc = require("dayjs/plugin/utc");
var timezone = require("dayjs/plugin/timezone");

dayjs.extend(utc);
dayjs.extend(timezone);

const timestamp = "2014-06-01 12:00";
const tz = "America/New_York";

console.log(timezone);
console.log(dayjs.tz.guess());

const d1 = dayjs.tz("2013-11-18 11:55", "Asia/Taipei");
d1.format(); // => 2013-11-18T11:55:00+08:00
d1.toISOString(); // => 2013-11-18T03:55:00.000Z

const d2 = dayjs.utc("2013-11-18 11:55").tz("Asia/Taipei");
d2.format(); // => 2013-11-18T19:55:00+08:00
d2.toISOString(); // => 2013-11-18T11:55:00.000Z

// Setting the default timezone
dayjs.tz.setDefault("America/New_York");

// Resetting the default timezone to the system timezone
dayjs.tz.setDefault();
console.log(d1, d2);

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
