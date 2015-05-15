/**Conditionals Worksheet
 * Check the Login
 * Lucas Gabbart
 * 5/14/15.
 */

//alert("Check the Login");

var user = prompt("Enter you username."); //user input checked against saved username for verification
var pWord = prompt("Enter your password."); //user input checked against saved password for verification
var logInfo = user + pWord; //combination of userN and pWord variables used to validate login

var logIn = "username" + "password"; //saved login parameters that must be matched by user input for successful login

if(logInfo == logIn){
	//prints error message to console for invalid username
	console.log("Welcome, " + user + "!");
}else if(user == "username" && pWord != "password"){
	//prints error message to console for invalid password if username matches saved info
	console.log("Password does not match our records.");
}else{
	//prints welcome message to console if login is successful
	console.log("User not found.\nTry again.");
}