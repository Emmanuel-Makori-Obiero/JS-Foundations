//A loop is a control structure that repeats a block of code until a certain condition is met.
/*For a loop to work without repetition it must have the following:
i. Initialization-Tells the loop where to start
ii. condition-tells a loop where to end
iii. increment-tells a loop how to add numbers*/
/*A real life example is lets say we are eating a bowl of rice and we want to make 5 scoops
i. initialization = let scoop = 1
ii. condition = scoop<=5; scoop++;
iii.increment = scoop++
*/

for (let scoop = 1; scoop <= 5; scoop++) {
  console.log(`Eating scoop number ${scoop}`);
}

console.log("The bowl is complete");
//lets say we are counting numbers to 10

for (let number = 1; number <= 10; number++) {
  console.log(`The current number is ${number}`);
}

console.log("We are done counting numbers");
