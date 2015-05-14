/**Expressions Worksheet
 * Discounts
 * Lucas Gabbart
 * 5/14/15.
 */

//alert("Discounts");

var item = prompt("Enter a description of your item.");
var originPrice = prompt("Enter the price of your item.");
var discount = 15/100;
var tax = 9.5/100;
originPrice = Number(originPrice);
var noTax = originPrice-(discount*originPrice);
var withTax = noTax+(noTax*tax);
noTax = noTax.toFixed(2);
withTax = withTax.toFixed(2);

console.log("Your "+item+" was originally $"+Number(originPrice)+", but after a $"+discount+"% discount, it is now $"+noTax+" without tax, and $"+withTax+" with tax.");