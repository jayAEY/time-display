MicroModal.init();
let dayjs = require("dayjs");
var utc = require("dayjs/plugin/utc");
var timezone = require("dayjs/plugin/timezone");
dayjs.extend(utc);
dayjs.extend(timezone);
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let amOrPm = document.querySelector("#am-or-pm");
let date = document.querySelector("#date");
let timeZone = document.querySelector("#location");
let selectTimeZone = document.querySelector("#select-timezone");

// handle date and timezones
let currentDate = dayjs().format("dddd, MMMM D, YYYY");
date.innerText = currentDate;
let currentTimeZone = dayjs.tz.guess();
timeZone.innerText = currentTimeZone;

selectTimeZone.addEventListener("change", (e) => {
  let PST = "America/Vancouver";
  let MST = "America/Edmonton";
  let CST = "America/Winnipeg";
  let EST = "America/Toronto";
  let AST = "America/Halifax";
  let NST = "America/St_Johns";
  switch (e.target.value) {
    case 0:
      e.target.value == "PST";
      currentTimeZone == setTime(PST);
      break;
    case 1:
      e.target.value == "MST";
      currentTimeZone == setTime(MST);
      setTime(MST);
      break;
    case 2:
      e.target.value == "CST";
      currentTimeZone == setTime(CST);
      setTime(CST);
      break;
    case 3:
      e.target.value == "EST";
      currentTimeZone == setTime(EST);
      setTime(EST);
      break;
    case 4:
      e.target.value == "AST";
      currentTimeZone == setTime(AST);
      setTime(AST);
      break;
    case 5:
      e.target.value == "NST";
      currentTimeZone == setTime(NST);
      setTime("America/St_Johns");
      break;
  }
  setTime();
});

let setTime = (timezone) => {
  let currentHour = dayjs().tz(timezone).hour(dayjs().hour()).format("h");
  let currentMinute = dayjs().tz(timezone).minute();
  let currentSecond = dayjs().tz(timezone).second();

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
  setTime(currentTimeZone);
}, 1000);
