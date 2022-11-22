// DAY-2 LEVEL-2 EXERCISES

// #STEP-1
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

// #STEP-2
// we use the escape sequences for writing (don't) and (it's) words in this sentence. (don\'t) (it\'s)
console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reac out your hand instead.\" "
);

// #STEP-3
let test1 = "10";
let test2 = 10;
console.log(typeof test1 == typeof test2); //false

console.log(typeof Number(test1) == typeof test2); //  true (first way)

let test1Int = Number(test1); // (second way)
console.log(typeof test1Int == typeof test2); // true

// #STEP-4
console.log(parseFloat("9.8") == 10); //false
console.log(Math.ceil(9.8) == 10); // true

// #STEP-5
let test3 = "jargon";
let test4 = "python";
console.log(test3.includes("on")); //true
console.log(test4.includes("on")); //true

// #STEP-6
let test5 = "I hope this course is not full of jargon.";
console.log(test5.includes("jargon")); //true
console.log(test5.search("jargon")); // jargon index

// #STEP-7
console.log(Math.floor(Math.random() * 101)); // 0 - 100

// #STEP-8
console.log(Math.floor(Math.random() * (100 - 50)) + 50); // 50 - 100

// #STEP-9
console.log(Math.floor(Math.random() * 256)); // 0 - 255

// #STEP-10
let test6 = "JavaScript";
let rndIndex = Math.floor(Math.random() * test6.length); //0-9
console.log(test6[rndIndex]);

// #STEP-11
console.log(
  "1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125"
);

// #STEP-12
let test7 =
  "You cannot end a sentence with because because because is a conjunction";

// first way
let newTest7 = test7.substr(0, 31) + test7.substr(55, 16);
console.log(newTest7);

// second way
/*let newTest7 = test7.replaceAll("because", "");
console.log(newTest7);
let newNew = newTest7.replace("    ", " ");
console.log(newNew);*/
