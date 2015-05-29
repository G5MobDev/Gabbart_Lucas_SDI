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

var gender = prompt("Are you male or female?");//prompts user to enter their gender for BMR calculation
while(gender == ""){ //causes gender prompt to loop until user enters a value
	gender = prompt("You must enter your gender to continue.");
}

var age = prompt("Please enter your age.");//prompts user for their age
while(age == "" || isNaN(age)){ //causes age prompt to loop until a proper value is entered
	age = prompt("You must enter your age to continue.\nThe value must be a number.");
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
}else{ //this code will run if the user entered Metric in the first prompt box
	var weightKg = prompt("Enter your weight in kilograms.");//prompts user to enter their weight in kilograms
	while(weightKg == "" || isNaN(weightKg)){//causes weight prompt to loop until a valid value is entered
		weightKg = prompt("You must enter your weight in kilograms to continue this calculation.\nThe value must be a number.");
	}
	var heightCm = prompt("Enter your height in centimeters.");//prompts user to enter their height in centimeters
	while(heightCm == "" || isNaN(heightCm)){ //causes height prompt to loop until a valid value is entered
		heightCm = prompt("You must enter your height in centimeters to continue.\nThe value must be a number.");
	}
}

var weightPounds = Number(weightLb);//converts English weight value from prompt to an integer
var heightInches = Number(heightIn);//converts English height value from prompt to an integer
var weightKilos = Number(weightKg);//converts Metric weight value from prompt to an integer
var heightCents = Number(heightCm);//converts Metric weight value from prompt to an integer
age = Number(age); //converts age value from prompt to an integer
var bmiMultiEng = 703;//pre-defined value used in English BMI calculation
var bmiMultiMet = 100;//pre-defined value used in Metric BMI calculation
var bmrME;//declares variable to be used for returning BMR result for for a male that wants to use English units.
var bmrFE;//declares variable to be used for returning BMR result for for a female that wants to use English units.
var bmrMM;//declares variable to be used for returning BMR result for for a male that wants to use Metric units.
var bmrFM;//declares variable to be used for returning BMR result for for a female that wants to use Metric units.
var bmrET;//declares variable to be used for printing returned values for English BMR to the console.
var bmrMT;//declares variable to be used for printing returned values for Metric BMR to the console.


var bmiE = function bmiEng(weight, height, bmiV){//The function below will run for BMI if the user chooses English units
	var bmi = (weight / (height * height)) * bmiV;//formula for English BMI calculation
	bmi = bmi.toFixed(2);//converts result from calculation to a real number
	return bmi;//returns result to bmiEnglish variable to use in console.log() message
};

var bmiEnglish = bmiE(weightPounds, heightInches, bmiMultiEng);//variable that will be used to invoke the function if necessary and store the returned result for use in console message.

var bmiM = function bmiMet(weight, height, bmiV){//The function that will run for BMI if the user chooses Metric units
	bmi = weight / ((height * height) / bmiV) * bmiV;//formula for Metric BMI calculation
	bmi = bmi.toFixed(2);//converts result from calculation to a real number
	return bmi;//returns result to bmiMetric variable to use in console.log() message
};

var bmiMetric = bmiM(weightKilos, heightCents, bmiMultiMet);//variable that will be used to invoke the function if necessary and store the returned result for use in console message.

function bmrMaleEnglish(){//function that runs for BMR if the user is a male that chooses English units.
	var bmrM = 66;//defined value for BMR calculation for a male and English units
	var wM = 6.23;//defined value for weight calculation for a male and English units
	var hM = 12.7;//defined value for height calculation for a male and English units
	var aM = 6.8;//defined value for age calculation for a male and English units
	var bmrMaleEng = bmrM + (wM * weightPounds) + (hM * heightInches) - (aM * age);//formula for BMR calculation if the user is male and chooses English units
	bmrMaleEng = bmrMaleEng.toFixed(2);//converts calculation result to a real number
	return bmrMaleEng;//returns result to bmrME variable
}

bmrME = bmrMaleEnglish();//calls this function as determined by prompted user input for unit type and gender

function bmrFemaleEnglish(){
	var bmrF = 655;//defined value for BMR calculation for a female and English units
	var wF = 4.35;//defined value for weight calculation for a female and English units
	var hF = 4.7;//defined value for height calculation for a female and English units
	var aF = 4.7;//defined value for age calculation for a female and English units
	var bmrFemaleEng = bmrF + (wF * weightPounds) + (hF * heightInches) - (aF * age);//formula for BMR calculation if the user is female and chooses English units
	bmrFemaleEng = bmrFemaleEng.toFixed(2);//converts calculation result to a real number
	return bmrFemaleEng;//returns result to bmrFE variable
}

bmrFE = bmrFemaleEnglish();//calls this function as determined by prompted user input for unit type and gender

function bmrMaleMetric(){
	var bmrM = 66;//defined value for BMR calculation for a male and Metric units
	var wM = 13.7;//defined value for weight calculation for a male and Metric units
	var hM = 5;//defined value for height calculation for a male and Metric units
	var aM = 6.8;//defined value for age calculation for a male and EMetric units
	var bmrMaleMet = bmrM + (wM * weightKilos) + (hM * heightCents) - (aM * age);//formula for BMR calculation if the user is male and chooses Metric units
	bmrMaleMet = bmrMaleMet.toFixed(2);//converts calculation result to a real number
	return bmrMaleMet;//returns result to bmrMM variable
}

bmrMM = bmrMaleMetric();//calls this function as determined by prompted user input for unit type and gender

function bmrFemaleMetric(){
	var bmrF = 655;//defined value for BMR calculation for a female and Metric units
	var wF = 9.6;//defined value for weight calculation for a female and Metric units
	var hF = 1.8;//defined value for height calculation for a female and Metric units
	var aF = 4.7;//defined value for age calculation for a female and Metric units
	var bmrFemaleMet = bmrF + (wF * weightKilos) + (hF * heightCents) - (aF * age);//formula for BMR calculation if the user is female and chooses Metric units
	bmrFemaleMet = bmrFemaleMet.toFixed(2);//converts calculation result to a real number
	return bmrFemaleMet;//returns result to bmrFM variable
}

bmrFM = bmrFemaleMetric();//calls this function as determined by prompted user input for unit type and gender

bmrET = (engMet == "English" && gender == "male") ? bmrME : bmrFE;//ternary operator that will be used in final if-else statement to print appropriate message for English BMR to console
bmrMT = (engMet == "Metric" && gender == "male") ? bmrMM : bmrFM;//ternary operator that will be used in final if-else statement to print appropriate message for Metric BMR to console

if(engMet == "English" && gender == "male"){
	//if user is a male that chooses English units, this message will print to the console.
	console.log("Sir,\nYour body mass index is " + bmiEnglish + " and\nyour Basal Metabolic Rate is " + bmrET + ".");
}else if(engMet == "English" && gender == "female"){
	//if user is a female that chooses English units, this message will print to the console.
	console.log("Ma'am,\nYour body mass index is " + bmiEnglish + " and\nyour Basal Metabolic Rate is " + bmrET + ".");
}else if(engMet == "Metric" && gender == "male"){
	//if user is a male that chooses Metric units, this message will print to the console.
	console.log("Sir,\nYour body mass index is " + bmiMetric + " and\nyour Basal Metabolic Rate is " + bmrMT + ".");
}else{
	//if user is a female that chooses Metric units, this message will print to the console.
	console.log("Ma'am,\nYour body mass index is " + bmiMetric + " and\nyour Basal Metabolic Rate is " + bmrMT + ".");
}

