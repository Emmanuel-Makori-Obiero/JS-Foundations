//An object is a container that groups together variables.Its like a thing with traits
/*inside the objects there are
i.Properties-these are the facts and characteristics of the thing
ii.Methods-These say what the thing can actually do*/
//An example is:Lets say we want to describe my toy car
const mytoycar = {
  //Defining the Object
  color: "red", //property: label,
  speed: 10,
  //Defining the method
  drive() {
    this.speed = 10; //the this is the object
    console.log("Vroom vroom! The car is moving.");
  },
};
//How to look at a label
console.log(mytoycar.color); //output is red
//How to press a button
mytoycar.drive(); //output is Vroom vroom! The car is moving.

//example 2: Lets say we want to describe a runner like eliud kipchoge
const eliudkipchoge = {
  height: " 20 meters",
  speed: 10,

  run() {
    this.speed = 20;
    console.log("The race has began");
  },
};

eliudkipchoge.run();
console.log(eliudkipchoge.height);
