MicroModal.init({
  // openTrigger: "data-micromodal-trigger",
  // closeTrigger: "data-micromodal-trigger",
});

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
