/**do-while Loop
 * Lucas Gabbart
 * 5/25/15.
 */
//alert("do-while Loop");

var b = 5;//sets up the index

while (b > 0){//checks the condition
	console.log(b + " kegs on the wall");
	b--;//decrements "b" by 1 each time; b++ increments by 1 each time
}

console.log("-------- Do While Loops --------");

var c = 10;

do{
	//always runs this code first
	console.log(c + " kegs on the wall");
	c--;
}
while(c > 0);//checks condition of code inside "do" until value is met