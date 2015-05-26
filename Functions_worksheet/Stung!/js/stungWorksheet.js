/**Functions Worksheet
 * Stung!
 * Lucas Gabbart
 * 5/26/15.
 */
//alert("Stung! Worksheet");

//This function will calculate the total number of bee stings (limited to 4 decimal places) required to kill an animal based on the animal's weight in pounds.  The animal's weight will be passed to the function via argument, as will the required number of stings per pound to be lethal.  The formula for the calculation is: weight multiplied by stings-per-pound equals the total number of stings needed to kill the animal

function stung(v, s){//sets up the function and function parameters
	stings = v * s;//code run to calculate total stings required to be lethal
	return stings.toFixed(2);//returns calculation result to the result variable
}
var victimWeight = 500;//animal's weight in pounds to be passed into the function
var stingsPerPound = 8.666666667;//required stings per pound to kill an animal
var beeStings = stung(victimWeight, stingsPerPound);//variable that the function will return the calculation results to

stung(victimWeight, stingsPerPound);//invokes the function and passes argument variable values into the function parameters for calculation by the function

//console.log(beeStings);//test print to console to check function for proper operation
console.log("It takes " + beeStings + " bee stings to kill this animal.");