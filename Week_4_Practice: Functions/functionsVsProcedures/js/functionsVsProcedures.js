/**Functions vs. Procedures
 * Lucas Gabbart
 * 5/25/15.
 */

//alert("Functions vs. Procedures");

//this is a function; returns a value
function calcAreaF(width, height){
	var area = width * height;
	return area;//returns value to function call variable
}

//this is a procedure; no return value
function calcAreaP(width, height){
	var area = width * height;
	console.log(area);//doesn't return a value
}

