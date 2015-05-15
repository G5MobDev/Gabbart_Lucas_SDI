/**Conditionals Assignment
 * Natural Gas Well Bottom Hole Pressure Calculator
 * Lucas Gabbart
 * 5/14/15
 * Course: MDV2330-O
 * Term C201505
 * Section 02
 * Instructor: Dan Williams
 */

//alert("Conditionals Assignment");

var surface;//user input variable that provides the pressure of the well at the surface for use in calculating bottom hole pressure
var hydrostatic;//variable that will be calculated from surface and tvd variables
var tvd;//user input variable that provides the vertical depth of the well for use in calculating bottom hole pressure
var fluid;//user input variable that provides the type of fluid in the well to determine the proper gradient for use in calculating bottom hole pressure
var bhp;//bottom hole pressure variable that will be calculated from surface, hydrostatic, and fluid variables and will provide the final result that will print to console.log()
var water = 0.465;//defined variable that will provide the gradient of water for the bhp calculation
var oil = 0.350;//defined variable that will provide the gradient of oil for the bhp calculation
var gas = 0.100;//defined variable that will provide the gradient of gas for the bhp calculation

surface = prompt("Enter the surface pressure of the well.");
tvd = prompt("Enter the True Vertical Depth of the well.");
fluid = prompt("Enter the type of liquid in the well.\n(water, oil, or gas)");

if(!surface){
	surface = prompt("You must enter a value for the surface pressure of the well.");
}
if(!tvd){
	tvd = prompt("You must enter the True Vertical Depth of the well.");
}
if(!fluid){
	fluid = prompt("You must enter the type of fluid in the well bore.");
}

surface = Number(surface);
tvd = Number(tvd);

console.log(surface);
console.log(tvd);
console.log(fluid);

/*if(fluid === "water"){
	hydrostatic = tvd * water;
}
(fluid == "oil" && fluid != "water") ? hydrostatic = tvd * oil : hydrostatic = tvd * gas;
*/





/*console.log(surface);
 console.log(tvd);
 console.log(fluid);
 */
