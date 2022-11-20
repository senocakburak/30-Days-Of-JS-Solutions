// Exercise: Level 1

// #STEP-1
let challenge = "30 Days of JavaScript";

// #STEP-2
console.log(challenge);

// #STEP-3
console.log(challenge.length);

// #STEP-4
console.log(challenge.toUpperCase());

// #STEP-5
console.log(challenge.toLowerCase());

// #STEP-6
console.log(challenge.substring(0, 2));

// #STEP-7
console.log(challenge.slice(3));

// #STEP-8
console.log(challenge.includes("Script")); // Checking the string contains a word 'Script'

// #STEP-9
console.log(challenge.split()); //split the  string into an array

// #STEP-10
console.log(challenge.split(" ")); // splite the string at the space

// #STEP-11
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(","));

// #STEP-12
console.log(challenge.replace("JavaScript", "Python"));

// #STEP-13
console.log(challenge.charAt(15));

// #STEP-14
console.log(challenge.charCodeAt(11)); // J index = 11

// #STEP-15
console.log(challenge.indexOf("a"));

// #STEP-16
console.log(challenge.lastIndexOf("a"));

// #STEP-17
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));

// #STEP-18
console.log(sentence.lastIndexOf("because"));

// #STEP-19
console.log(sentence.search("because"));

// #STEP-20
let challengeWithSpace = "  30 Days Of JavaScript   ";
console.log(challengeWithSpace.trim());

// #STEP-21
console.log(challenge.startsWith("30"));

// #STEP-22
console.log(challenge.endsWith("Script"));

// #STEP-23
console.log(challenge.match("a"));

// #STEP-24
let challangeConc = "30 Days Of ";
console.log(challangeConc.concat("JavaScript"));

// #STEP-25
console.log(challenge.repeat(2));
