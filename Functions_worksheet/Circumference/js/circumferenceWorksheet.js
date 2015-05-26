/**Functions Worksheet
 * Circumference
 * Lucas Gabbart
 * 5/24/15.
 */
//alert("Circumference Worksheet");




function circle(r, p, x){
	circ = r * p * x;
	return circ.toFixed(2);
}
var radius = 10;
var pi = 3.14;
var multiplier = 2;
var circumference = circle(radius, pi, multiplier);

circle(radius, pi, multiplier);

console.log(circumference);
