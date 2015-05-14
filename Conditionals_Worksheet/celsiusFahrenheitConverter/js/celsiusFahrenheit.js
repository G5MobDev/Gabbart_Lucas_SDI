/**Conditionals Worksheet
 * Celsius to Fahrenheit Converter
 * Lucas Gabbart
 * 5/14/15.
 */

//alert("Celsius to Fahrenheit Converter");

var celFah = prompt("Please choose (F)ahrenheit or (C)elsius."); //user input dictates temp type to be converted
var tempInput = prompt("Enter the temperature you wish to convert."); //value to be converted by code
var degCel = ((tempInput - 32) / 1.8).toFixed(2); //runs code for conversion from Celsius to Fahrenheit
var degFah = ((tempInput * 1.8) + 32).toFixed(2); //runs code for conversion from Fahrenheit to Celsius

if(celFah == "F"){
	//runs code to convert from degrees(F) to degrees(C)
	console.log("The temperature is " + degCel + " degrees Celsius.");
}else{
	//runs code to convert from degrees(C) to degrees(F)
	console.log("The temperature is " + degFah + " degrees Fahrenheit.");
}