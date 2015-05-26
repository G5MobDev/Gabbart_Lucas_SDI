/**Functions Worksheet
 * Circumference
 * Lucas Gabbart
 * 5/24/15.
 */
//alert("Circumference Worksheet");

//This function will calculate the circumference of a circle by passing defined variables into the function by way of arguments and enter the values of the variables into the following equation: (C=2pR), where C=circumference, p=Pi(3.14), & R=radius.  The formula for this calculation simplifies to C=2*3.14*radius


function circle(x, p, r){//identifies the function name and parameters
	circ = x * p * r;//code performed by the function to calculate circumference of the circle from argument values passed to function parameters
	return circ.toFixed(2);//returns the result of the function calculation to the result variable for delivery to console; .toFixed(2) limits the result to two decimal places to avoid a long result value
}
var radius = 10;//defined radius value to be passed to the function and entered into the calculation by function argument
var pi = 3.14;//Pi value to be passed into the function calculation by function argument
var multiplier = 2;//defined multiplication value that is passed by function argument into the function calculation
var circumference = circle(multiplier, pi, radius);//variable that the function returns the calculation result to for console message printing

circle(multiplier, pi, radius);//function invocation that passes defined value variables to the function for calculation and result return to result defined result variable

console.log("The circumference of the circle is " + circumference + ".");//prints appropriate message to the console
