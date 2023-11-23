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

// handle initial date and time zone
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

  //handle time zone selection
  switch (e.target.value) {
    case "Pacific (PST)":
      currentTimeZone = PST;
      break;
    case "Mountain (MST)":
      currentTimeZone = MST;
      break;
    case "Central (CST)":
      currentTimeZone = CST;
      break;
    case "Eastern (EST)":
      currentTimeZone = EST;
      break;
    case "Atlantic (AST)":
      currentTimeZone = AST;
      break;
    case "Newfoundland (NST)":
      currentTimeZone = NST;
      break;
  }
  // update display based on selection
  currentDate = dayjs().tz(currentTimeZone).format("dddd, MMMM D, YYYY");
  date.innerText = currentDate;
  timeZone.innerText = e.target.value;
  setTime(currentTimeZone);
});

let setTime = (timezone) => {
  let currentHour = dayjs().tz(timezone).format("h");
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
