/**Expressions Worksheet
 * Average Shopping Bill
 * Lucas Gabbart
 * 5/13/15.
 */

alert("Average Shopping Bill");

var groCost = [246, 275, 234, 298, 317];
var groTotal = groCost[0]+groCost[1]+groCost[2]+groCost[3]+groCost[4];
var weekAverage = groTotal/5;

console.log("You have spent a total of $" + groTotal + " on groceries over 5 weeks.  That is an average of $" + weekAverage + " per week.");