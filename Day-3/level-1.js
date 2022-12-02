// DAY-3 LEVEL-1 EXERCISES

// #STEP-1
let firstName = "Burak";
let lastName = "Şenocak";
let country = "Turkey";
let city = "Ordu";
let age = 25;
let isMarried = false;
let year = new Date();
let currentYear = year.getFullYear();

console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof city,
  typeof age,
  typeof isMarried,
  typeof year,
  typeof currentYear
);

// #STEP-2
let a = "10";
let b = 10;
console.log(a === b); //checking the data type
console.log(a == b); // does not check the data type

// #STEP-3
console.log(parseInt("9.81") === 10);

// #STEP-4
// i. Three truthy value
console.log(434 > 321);
console.log(typeof "burak" === typeof "ahmet");
console.log("burak".length === "ahmet".length);
// ii. Three truthy value
console.log(2133 <= 2113);
console.log(typeof "burak" === typeof 5);
console.log("burak".length === "christina".length);

// #STEP-5
// First try to guess these comparisons result and then check the browser console.
console.log(4 > 3); //true
console.log(4 >= 3); // true
console.log(4 < 3); //false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4); //false
console.log(4 !== 4); //false
console.log(4 != "4"); //false
console.log(4 == "4"); //true
console.log(4 === "4"); //false
console.log("Python".length != "Jargon".length); //false

// #STEP-6
// First try to guess these comparisons result and then check the browser console.
console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //ture
console.log(!false); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === "4")); //true
console.log(!("dragon".includes("on") && "python".includes("on"))); //false

// #STEP-7
// Creating a time object.
const now = new Date();

// i.What is the year today?
let currYear = now.getFullYear();
console.log(currYear);

// ii.What is the month today as a number?
let currMonth = now.getMonth();
console.log(currMonth + 1);

// iii.What is the date today?
let dateToday = now.getDate();
console.log(dateToday);

// iv.What is the day today as a number?
let dayNumber = now.getDay();
console.log(dayNumber);

// v.What is the hours now?
let currHour = now.getHours();
console.log(currHour);

// vi.What is the minutes now?
let currMinute = now.getMinutes();
console.log(currMinute);

// vii.Find out the numbers of seconds elapsed from January 1, 1970 to now.
let prevSec = Date.now() / 1000;
console.log(prevSec);
