/**Conditionals Worksheet
 * Movie Ticket Price
 * Lucas Gabbart
 * 5/14/15.
 */

//alert("Movie Ticket Price");

var standartPrice,
    discountPrice,
	customerAge,
	showTime,
	matinee,
	senior,
	junior;

standartPrice = 12;//cost of standard movie ticket $12.00
discountPrice = 7;//cost of discount movie ticket $7.00
customerAge = prompt("Please enter your age.");//input that will be used to define ticket price by age of customer
showTime = prompt("Please enter the showtime of the movie you wish to see.");//value that will determine ticket price by the time of day the customer plans to see the movie
senior = 55;//defined age that customerAge must be equal to/greater than to qualify for discount ticket price
junior = 10;//defined age that customerAge must be less than to qualify for discount ticket price
matinee = [3, 5];


if(customerAge >= senior || customerAge < junior){
	console.log("The ticket price is $" + discountPrice + ".");
}else if(showTime > matinee[0] && showTime < matinee[1]){
	console.log("The ticket price is $" + discountPrice + ".");
}else{
	console.log("The ticket price is $" + standartPrice + ".");
}
