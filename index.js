let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let amOrPm = document.querySelector("#am-or-pm");
let date = document.querySelector("#date");

// dayjs.extend(utc);
// dayjs.extend(timezone);
// dayjs.tz.guess(); // America/Chicago

// handle date
let CurrentDate = dayjs().format("dddd, MMMM D, YYYY");
date.innerText = CurrentDate;

let setTime = () => {
  let currentHour = dayjs().hour(dayjs().hour()).format("h");
  let currentMinute = dayjs().minute();
  let currentSecond = dayjs().second();

  // handle am/pm display
  dayjs().hour() > 12 && (amOrPm.innerText = "P.M.");

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
