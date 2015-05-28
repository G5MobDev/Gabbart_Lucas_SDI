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

var gender = prompt("Are you male or female?");
while(gender == ""){
	gender = prompt("You must enter your gender to continue.");
}
var weightPounds = Number(weightLb);
var heightInches = Number(heightIn);
var weightKilos = Number(weightKg);
var heightCents = Number(heightCm);
var ageYears = Number(age);
//var bmiMultiEng = 703;
//var bmiMultiMet = 100;

/*var bmiE = function bmiEng(weight, height, bmiV){
	bmi = (weight / (height * height)) * bmiV;
	return bmi;
};
var bmiM = function bmiMet(weight, height, bmiV){
	bmi = weight / ((height * height) / bmiV) * bmiV;
	return bmi;
};
var bmiEnglish = bmiE(weightPounds, heightInches, bmiMultiEng);
var bmiMetric = bmiM(weightKilos, heightCents, bmiMultiMet);
bmiEnglish = bmiEnglish.toFixed(2);
bmiMetric = bmiMetric.toFixed(2);
*/

function bmrMaleEnglish(w, h, a,) {
	var bmrM = 66;
	var wM = 6.23;
	var hM = 12.7;
	var aM = 6.8;
	var bmrMaleEng = bmrM + (wM * w) + (hM * h) - (aM * a);
	return bmrMaleEng;//returns bmr value to variable "BMR"
}

function bmrFemaleEnglish(w, h, a){
	var bmrF = 655;
	var wF = 4.35;
	var hF = 4.7;
	var aF = 4.7;
	var bmrFemaleEng = bmrF + (wF * w) + (hF * h) - (aF * a);
	return bmrFemaleEng;
}

function bmrMaleMetric(w, h, a){
	var bmrM = 66;
	var wM = 13.7;
	var hM = 5;
	var aM = 6.8;
	var bmrMaleMet = bmrM + (wM * w) + (hM * h) - (aM * a);
	return bmrMaleMet;
}

function bmrFemaleMetric(w, h, a){
	var bmrF = 655;
	var wF = 9.6;
	var hF = 1.8;
	var aF = 4.7;
	var bmrFemaleMet = bmrF + (wF * w) + (hF * h) - (aF * a);
	return bmrFemaleMet;
}

if(engMet == "English" && gender == "male") {
	bmrMaleEnglish(weightPounds, heightInches, ageYears);
}else if(engMet == "English" && gender == "female"){
	bmrFemaleEnglish(weightPounds, heightInches, ageYears);
}else if(engMet == "Metric" && gender == "male"){
	bmrMaleMetric(weightKilos, heightCents, ageYears);
}else{
	bmrFemaleMetric(weightKilos, heightCents, ageYears);
}

//var BMR = bmrMaleEng();//invokes the function to calculate Basal Metabolic Rate

/*if(engMet == "English"){
	console.log("Your body mass index is " + bmiEnglish + ".");
}else{
	console.log("Your body mass index is " + bmiMetric + ".");
}
*/