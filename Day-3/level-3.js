// DAY-3 LEVEL-3 EXERCISES

// #STEP-1
// i.YYY-MM-DD HH:mm eg. 2020-01-02 07:05
let timeIs = new Date();
let currentYear3 = timeIs.getFullYear();
let currentMonth3 = timeIs.getMonth();
let currentDay3 = timeIs.getDate();
let currentHour3 = timeIs.getHours();
let currentMin3 = timeIs.getMinutes();

console.log(
  `${currentYear3}-${
    currentMonth3 >= 10 ? currentMonth3 : "0" + currentMonth3
  }-${currentDay3 >= 10 ? currentDay3 : "0" + currentDay3} ${
    currentHour3 >= 10 ? currentHour3 : "0" + currentHour3
  }:${currentMin3 >= 10 ? currentMin3 : "0" + currentMin3}`
);
