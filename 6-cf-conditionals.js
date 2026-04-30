//They are also called if-else statements..They enable the logical thinking of a website and are mostly used in decision making
//some of the examples are:
/*Lets say Students of Walter school are going on atrip and have booked a bus.The bus owner wnats to give the schooll a 10% discount per student if students are more then 40.
To do that the js conditional code we will use is*/
function calculatetotalfare(StudentNo, fare) {
  let total = StudentNo * fare;

  if (StudentNo > 40) {
    console.log("There is a 10% discount per student");
    total = total * 0.9;
  } else {
    console.log("There is no discount");
    total = total;
  }
  return total;
}

const Totalfare = calculatetotalfare(20, 100);
console.log(Totalfare);
//node 6-cf-conditionals.js
