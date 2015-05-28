/**Gabbart_Lucas_Functions_Assignment
 * Body Mass Index(BMI) Calculator
 * Lucas Gabbart
 * 5/27/15.
 * This batch of code will calculate the body mass index and basal metabolic rate of a person based on prompted user input values that will be passed to a series of functions by way of arguments and parameters.  It will return the calculation results to defined result variables and print these values to the console within messages that explain what each values means.
*/
//alert("BMI Calculator");

var engMet = prompt("Do you want to use English or Metric units for the calculation?\nEnglish: weight = pounds, height = inches\nMetric: weight = kilograms, height = centimeters");//this prompt will determine if the user wants to use English or Metric units for the BMI/BMR calculations

while(engMet == ""){
	engMet = prompt("Please enter the type of units you wish to use:\nEnglish or Metric");//this code will cause this prompt to loop until the user enters the type of units they wish to use
}

//this code will prompt the user for English units if English is entered in the first prompt box
if(engMet == "English"){
	var weightLb = prompt("Enter your weight in pounds.");//this prompt will ask the user for their weight in pounds
	while(weightLb == "" || isNaN(weightLb)){//this will cause the weight prompt to loop until the user enters a value for their weight
		weightLb = prompt("You must enter your weight in pounds to continue this calculation.\nThe value must be a number.");
	}
	var heightIn = prompt("Enter your height in inches.");//prompts the user to enter their height in inches
	while(heightIn == "" || isNaN(heightIn)){//causes height prompt to loop until a value is entered
		heightIn = prompt("You must enter your height in inches to continue.\nThis must be a number value.");
	}
}else{
	var weightKg = prompt("Enter your weight in kilograms.");
	while(weightKg == "" || isNaN(weightKg)){
		weightKg = prompt("You must enter your weight in kilograms to continue this calculation.\nThe value must be a number.");
	}
	var heightCm = prompt("Enter your height in centimeters.");
	while(heightCm == "" || isNaN(heightCm)){
		heightCm = prompt("You must enter your height in centimeters to continue.\nThe value must be a number.");
	}
}

var age = prompt("Please enter your age.");
while(age == "" || isNaN(age)){
	age = prompt("You must enter your age to continue.\nThe value must be a number.");
}

var weightPounds = Number(weightLb);
var heightInches = Number(heightIn);
var weightKilos = Number(weightKg);
var heightCents = Number(heightCm);
//var ageYears = Number(age);
var bmiMultiEng = 703;
var bmiMultiMet = 100;
var bmiEnglish = bmiEng(weightPounds, heightInches, bmiMultiEng);
var bmiMetric = bmiMet(weightKilos, heightCents, bmiMultiMet);
bmiEnglish = bmiEnglish.toFixed(2);
bmiMetric = bmiMetric.toFixed(2);

function bmiEng(weight, height, bmiV) {
	bmi = (weight / (height * height)) * bmiV;
	return bmi;
}
function bmiMet(weight, height, bmiV){
	bmi = weight / ((height * height) / bmiV) * bmiV;
	return bmi;
}

if(engMet == "English"){
	console.log("Your body mass index is " + bmiEnglish + ".");
}else{
	console.log("Your body mass index is " + bmiMetric + ".");
}




