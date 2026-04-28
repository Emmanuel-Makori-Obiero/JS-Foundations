//QN 1
//Create two number variables and calculate their sum, difference, product, and quotient. Display all results.
const n1 = 2;
const n2 = 3;
const sum = n1 + n2;
const difference = n2 - n1;
const product = n1 * n2;
const Quotient = n2 / n1;
console.log(difference);
console.log(product);
console.log(Quotient);

//QN 2
//Find the remainder when 17 is divided by 5 and display the result.
const remainder = 17 % 5;
console.log(remainder);

//QN 3
/*Create a variable x with a value of 10. Add 5 to it using a shorthand operator, 
then multiply the result by 2 using another shorthand operator. Display the final value.*/
const x = 10;
const add = x + 5;
const final = add * 2;
console.log(final);

//QN 4
/* Perform the following operations and display the results:
   - A string "5" plus a number 2
   - A string "5" minus a number 2*/
const work1 = "5" + 2;
const work2 = "5" - 2;
console.log(work1);
console.log(work2);

//QN 5
/*Convert a string "100" into a number and display the result. 
Then convert a number 50 into a string and display the result.*/
let s = "100";
console.log(typeof s);
s = Number(s);
console.log(typeof s);
let t = 50;
t = String(t);
console.log(typeof t);

//QN 6
//Compare the values 5 and "5" using both loose equality and strict equality. Display both results.
let m = 5;
let n = "5";
let comp = 5 == "5";
let comp2 = 5 === "5";
console.log(comp);
console.log(comp2);

//QN 7
//Create variables for principal, rate, and time. Calculate the simple interest and display the result.
let principle = 50000;
let rate = 0.25;
let time = 5;
const simpleinterest = principle * rate * time;
console.log(simpleinterest);
console.log(`The result is ${simpleinterest}`);
