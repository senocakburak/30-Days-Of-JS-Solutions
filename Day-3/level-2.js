// DAY-3 LEVEL-2 EXERCISES

// #STEP-1
//Check the browser console for results
let baseOfTri = prompt("Enter base:");
console.log("Enter base:", baseOfTri);
let heightOfTri = prompt("Enter height:");
console.log("Enter height:", heightOfTri);
let areaOfTri = (parseFloat(baseOfTri) * parseFloat(heightOfTri)) / 2;
console.log("The area of the triangle is:", areaOfTri);

// #STEP-2
//Check the browser console for results
let sideA = prompt("Enter side a:");
console.log("Enter side a:", sideA);
let sideB = prompt("Enter side b:");
console.log("Enter side b:", sideB);
let sideC = prompt("Enter side c:");
console.log("Enter side c:", sideC);
let perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);
console.log("The perimeter of the triangle is:", perimeter);

// #STEP-3
//Check the browser console for results
let lengthOfRect = prompt("Enter length value of the rectangle");
let widthOfRect = prompt("Enter width value of the rectangle");
let areaOfRect = parseFloat(lengthOfRect) * parseFloat(widthOfRect);
let perimeterOfRect = 2 * (parseFloat(lengthOfRect) + parseFloat(widthOfRect));
console.log("Area of rectangle = ", areaOfRect);
console.log("Perimeter of rectangle = ", perimeterOfRect);

// #STEP-4
//Check the browser console for results
let rad = prompt("Enter a radius value");
let areaOfCircle = parseFloat(rad) ** 2 * Math.PI;
console.log("Area of circle = ", areaOfCircle);
let circumCirc = parseFloat(rad) * 2 * Math.PI;
console.log("Circumference of a circle:", circumCirc);

// #STEP-5
// y = mx+b , m = slope, b = y-intercept so.. y = 2x-2 => slope, m = 2  ;
// x = 0 => y = -2 this is y-intercept ,  y = 0 => x = 1 this is x-intercept.
let slope1 = 2;
let xIntercept = 1;
let yIntercept = -2;

// #STEP-6
// there is slope formula : m = (y2-y1)/(x2-x1)
// Our points (2,2) and (6,10) so  x1=2, x2=6, y1=2, y2=10. Let's put them into formula.
let slope2 = (10 - 2) / (6 - 2);

// #STEP-7
let compare = slope1 > slope2;
compare
  ? console.log("slope1 is greater than slope2")
  : console.log("slope2 is greater than slope1");

// #STEP-8
// when x = 2;
let x = 2;
let y = x ** 2 + 6 * x + 9;
let query1 = y == 0;
query1
  ? console.log("y = 0 when the value of x=", x)
  : console.log("y=", y + " when the value of x=", x);
// when x = -1;
x = -1;
y = x ** 2 + 6 * x + 9;
let query2 = y == 0;
query2
  ? console.log("y = 0 when the value of x=", x)
  : console.log("y=", y + " when the value of x=", x);
// when x = -3;
x = -3;
y = x ** 2 + 6 * x + 9;
let query3 = y == 0;
query3
  ? console.log("y = 0 when the value of x=", x)
  : console.log("y=", y + " when the value of x=", x);

// #STEP-9
let hoursPerWeek = prompt("Enter hours:");
let ratePerHour = prompt("Enter rate per hour:");
let weeklyEarning = parseFloat(hoursPerWeek) * parseFloat(ratePerHour);
console.log("Your weekly earning is:", weeklyEarning);

// #STEP-10
let myName = "Burak";
let compare2 = myName.length >= 7;
compare2
  ? console.log("Length of your name is greater than 7 or equal to 7")
  : console.log("Length of your name is not greater than 7 ");

// #STEP-11
let firstName2 = "Burak";
let lastName2 = "Şenocak";
let compare3 = firstName2.length > lastName2.length;
compare3
  ? console.log(
      `Your first name, ${firstName2} is longer than your family name, ${lastName2}`
    )
  : console.log(
      `Your first name, ${firstName2} is shorter than your family name, ${lastName2}`
    );

// #STEP-12
let myAge = 25;
let yourAge = 18;
let compare4 = myAge > yourAge;
compare4
  ? console.log(`I am ${myAge - yourAge} years older than you`)
  : console.log(`I am ${yourAge - myAge} years younger than you`);

// #STEP-13
let userBirthYear = prompt("Enter birth year"); //user age
const current = new Date(); //creating a time object
let thisYear = current.getFullYear(); //getting current year
let compare5 = thisYear - userBirthYear >= 18;
compare5
  ? console.log(
      `You are ${thisYear - userBirthYear}. You are old enough to drive.`
    )
  : console.log(
      `You are ${
        thisYear - userBirthYear
      }. You will be allowed to drive after ${
        18 - (thisYear - userBirthYear)
      } years.`
    );

// #STEP-14
// 1 year = 31556926 second
let userLiveYear = prompt("Enter number of years you live:");
let userLiveSec = userLiveYear * 31556926;
console.log(`You lived ${userLiveSec} seconds.`);

// #STEP-15
const now2 = new Date();
let currentYear2 = now2.getFullYear();
let currentMonth2 = now2.getMonth();
let currentDay2 = now2.getDate();
let currentHour2 = now2.getHours();
let currentMin2 = now2.getMinutes();
// i.YYYY-MM-DD HH:mm
console.log(
  `${currentYear2}-${currentMonth2}-${currentDay2} ${currentHour2}:${
    currentMin2 < 10 ? "0" + currentMin2 : currentMin2
  }`
);
// ii.DD-MM-YYYY HH:mm
console.log(
  `${currentDay2}-${currentMonth2}-${currentYear2} ${currentHour2}:${
    currentMin2 < 10 ? "0" + currentMin2 : currentMin2
  }`
);
// iii.DD/MM/YYYY HH:mm
console.log(
  `${currentDay2}/${currentMonth2}/${currentYear2} ${currentHour2}:${
    currentMin2 < 10 ? "0" + currentMin2 : currentMin2
  }`
);
