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
var gradient;//determines which fluid gradient to use for calculating hydrostatic pressure based on the type of fluid entered by the user
var water = 0.465;//defined variable that will provide the gradient of water for the bhp calculation
var oil = 0.350;//defined variable that will provide the gradient of oil for the bhp calculation
var bhp;//bottom hole pressure variable that will be calculated from surface, hydrostatic, and fluid variables and will provide the final result that will print to console.log()

surface = prompt("Enter the surface pressure of the well.\nExample: 100psi = 100");//asks the user to enter to pressure of the gas well at surface level and is necessary to calculate bottom hole pressure
tvd = prompt("Enter the True Vertical Depth(ft) of the well.\nExample: 2500ft = 2500");//prompts user to enter the true vertical depth (the straight-line distance from surface to bottom of the well bore and is required to calculate bottom hole pressure
fluid = prompt("Enter the type of liquid in the well.\n(Either water or oil)");//user must enter the type of fluid (water or oil) that is in the well bore. This is necessary to assign the proper fluid gradient to the calculation

if(!surface){
	//if there is no value entered in the initial surface prompt box, this will re-prompt the user to enter a value
	surface = prompt("You must enter a value for the surface pressure of the well.");
}
if(!tvd){
	//if there is no value entered in the initial tvd prompt box, this will re-prompt the user to enter a value
	tvd = prompt("You must enter the True Vertical Depth of the well.");
}
if(!fluid){
	//if there is no value entered in the initial fluid prompt box, this will re-prompt the user to enter a value
	fluid = prompt("You must enter the type of fluid in the well bore.");
}

gradient = (fluid == "water") ? water : oil;//ternary operator that assigns the appropriate fluid gradient variable value to the gradient variable to use in the final calculation

hydrostatic = Number(tvd) * gradient;//equation to determine hydrostatic pressure of the well to use in the final calculation

bhp = Number(surface) + hydrostatic;//equation that provides the preliminary result of the calculation
bhp = Number(bhp.toFixed(2));//provides the final result for bottom hole pressure that will be used in a concatenation string that will print to console.log()

console.log(bhp);

/*variable values tested:
surface = 500, tvd = 10000, fluid = water;
surface = 100, tvd = 4300, fluid = oil;
surface = 0, tvd = 5200, fluid = oil;
 */

