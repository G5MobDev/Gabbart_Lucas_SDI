/**Anonymous Functions
 * Lucas Gabbart
 * 5/25/15.
 */
//alert("Anonymous Functions");


//anonymous functions MUST be declared BEFORE they're called
var calcAreaF = function(width, height){
	//code the function runs
	var area = width * height;
	return area;//returns area value to variable "a"
}

var a = calcAreaF(20, 30);//invoking the function

console.log(a);
