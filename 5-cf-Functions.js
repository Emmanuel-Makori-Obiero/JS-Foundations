//A function is a reusable block of code that is used to perform a specific function
/*The life cycle of a function is:
i.Input
ii.Processing
iii.Output
*/
//an example of it being used is
//e.g to calculate total cost of fare used by students to Mombasa
// 1. The "Blueprint" (The Machine)
function calculatetotalfare(studentno, fare) {
  //This allows one to
  const totalfare = studentno * fare;
  return totalfare;
}
const Total = calculatetotalfare(100, 1000);
console.log(Total);

/* This is the machine definition
function magicDoubler(startingNumber) {
  let result = startingNumber * 2;

  return result; // <--- This "pushes" the answer out of the machine
}

// Using the machine
let myGift = magicDoubler(5);

console.log(myGift); // Output: 10*/
function calculatetotalprice(itemno, price) {
  const Totalprice = itemno * price;
  return Totalprice;
}
const total = calculatetotalprice(100, 100);
console.log(total);
