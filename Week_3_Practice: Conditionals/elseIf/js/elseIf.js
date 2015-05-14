/**Screencast: Else If
 * Lucas Gabbart
 * 5/14/15.
 */

//alert("else if");

var kidHeight = 45;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with the parent

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){
	//you can ride!
	console.log("You can ride the coaster!");
}else if(kidHeight >= wParentHeight){
	//you can ride with a parent present
	console.log("You can ride, but only with a parent present.");
}else {
	//sorry you have growing to do
	console.log("Sorry kid, you've got some growing to do first!");
}
