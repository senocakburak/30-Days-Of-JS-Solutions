// DAY-2 LEVEL-3 EXERCISES

// #STEP-1
let loveSentence =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let patternOne = /love/gi;
let count = loveSentence.match(patternOne).length;
console.log(count); //3

// #STEP-2
let becauseSentence =
  "You cannot end a sentence with because because because is a conjunction";
let patternTwo = /because/gi;
let countBecause = becauseSentence.match(patternTwo).length;
console.log(countBecause); //3

// #STEP-3
const test8 =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

let percent = /%/gi;
let dollar = /\$/gi;
let at = /@/gi;
let and = /&/gi;
let hash = /#/gi;

let newest = test8
  .replace(percent, "")
  .replace(dollar, "")
  .replace(at, "")
  .replace(and, "")
  .replace(hash, "")
  .replaceAll("  ", " ");
console.log(newest);

// #STEP-4
let calculate =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

let income = calculate.match(/\d+/g);
console.log(income);
let total = Number(income[0]) + Number(income[1]) + Number(income[2]);
console.log(total);
