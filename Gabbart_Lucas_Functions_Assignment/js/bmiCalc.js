/**Gabbart_Lucas_Functions_Assignment
 * Body Mass Index(BMI) Calculator
 * Lucas Gabbart
 * 5/27/15.
 * This batch of code will calculate the body mass index and basal metabolic rate of a person based on prompted user input values that will be passed to a series of functions by way of arguments and parameters.  It will return the calculation results to defined result variables and print these values to the console within messages that explain what each values means.
*/
//alert("BMI Calculator");

var engMet = prompt("Do you want to use English or Metric units for the calculation?\nEnglish: weight = pounds, height = inches\nMetric: weight = kilograms, height = centimeters");

while(engMet == ""){
	engMet = prompt("Please enter the type of units you wish to use:\nEnglish or Metric");
}

if(engMet == "English"){
	var weightLb = prompt("Enter your weight in pounds.");
	while(weightLb == ""){
		weightLb = prompt("You must enter your weight in pounds to continue this calculation.");
	}
	var heightIn = prompt("Enter your height in inches.");
	while(heightIn == ""){
		heightIn = prompt("You must enter your height in inches to continue.");
	}
}else{
	var weightKg = prompt("Enter your weight in kilograms.");
	while(weightKg == ""){
		weightKg = prompt("You must enter your weight in kilograms to continue this calculation.");
	}
	var heightCm = prompt("Enter your height in centimeters.");
	while(heightCm == ""){
		heightCm = prompt("You must enter your height in centimeters to continue.");
	}
}

var age = prompt("Please enter your age.");
while(age == ""){
	age = prompt("You must enter your age to continue.");
}

var weightPounds = Number(weightLb);
var heightInches = Number(heightIn);
var weightKilos = Number(weightKg);
var heightCents = Number(heightCm);
var ageYears = Number(age);
var bmiMultiplier = 703;

var BMI = bmiEnglish(engMet, weightPounds, heightInches, bmiMultiplier);

function bmiEnglish(engMet, weight, height, bmiV){
	if(engMet == "English"){
		var bmi = (weight / (height * height)) * bmiV;
		return bmi;
	}
}

console.log(BMI.toFixed(2));

