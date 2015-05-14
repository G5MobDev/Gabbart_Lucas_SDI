/**Expressions Worksheet
 * Slice of Pie Part 2
 * Lucas Gabbart
 * 5/13/15.
 */

alert("Slice of Pie: Part 2");

var perPizza = 10; //number of slices per pizza
var partyGoers = 25; //number of people at the party
var pizzas = 13; //number of pizzas that were ordered
var slices; //number of slices of pizza that each partygoer gets

slices = (pizzas*perPizza)%partyGoers;//gives the remainder of pizza slices left over after each partygoer gets their whole number of slices

alert("Sparky got " + slices + " slices of pizza.");
console.log("Sparky got " + slices + " slices of pizza.");