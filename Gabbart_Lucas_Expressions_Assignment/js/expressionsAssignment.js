/**Expressions Assignment
 * Natural Gas Flowrate Calculator
 * Lucas Gabbart
 * 5/14/15
 * This calculator will provide the hourly and daily flow rates of natural gas through a flow meter based off of data retrieved from the meter run, which consists of a meter tube (measured inside diameter), an orifice plate (restrictor plate with precision opening in the center), and a flow meter (displays the difference(differential) between upstream pressure and downstream(static) pressures across the orifice plate)
 */

//alert("Expressions Assignment");
var sp = prompt("Please enter your static pressure.");//static pressure is the pressure of the meter tube that gas is flowing into
var dp = prompt("Please enter your differential pressure.")//differential pressure is the difference in pressures between the gas coming into a meter tube and the pressure on the tube itself
var coefficient = prompt("Enter the coefficient of your meter.")//coefficients are values determined by the size of an orifice plate in a meter tube and the inside diameter of that tube.  It is used in combination with static and differential pressures to calculate the flowrate of the gas passing through the meter.
var meterInput = [sp, dp, coefficient];//array of user input values for calculation of flowrate

calc1 = Math.sqrt(meterInput[0] * meterInput[1]);//provides square root of static * differential pressures; necessary for flowrate calculation
calc2 = calc1 * meterInput[2];//calculates flowrate per day
calc3 = calc2 / 24;//calculates flowrate per hour

hourly = "Your hourly flowrate is " + calc3.toFixed(2) + " Mcf/h.";//inserts hourly value result into text string for concatenation and printing to console
daily = "Your daily flowrate is " + calc2.toFixed(2) + " Mcf/d.";//inserts daily value result into text string for concatenation and printing to console
hoda = hourly.concat('\n', daily);//concatenates hourly and daily strings to print to console.log

alert(hoda);//alert box notifying user of the flowrate results based on the given input values
console.log(hoda);//prints concatenated string message to console.log with calculated results
