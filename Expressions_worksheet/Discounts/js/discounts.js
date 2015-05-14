/**Expressions Worksheet
 * Discounts
 * Lucas Gabbart
 * 5/14/15.
 */

//alert("Discounts");

var item = prompt("Enter a description of your item.");
var originPrice = prompt("Enter the price of your item.");
var discount = prompt("Enter the discount percentage.\n(Example: 20% = 20)");
var tax = prompt("Enter the sales tax percentage.\n(Example: 10% = 10)");
originPrice = Number(originPrice);
discount = Number(discount);
tax = Number(tax)/100;
var noTax = originPrice-(discount/100*originPrice);
var withTax = noTax+(noTax*tax);
noTax = noTax.toFixed(2);
withTax = withTax.toFixed(2);

console.log("Your "+item+" was originally $"+Number(originPrice)+", but after a $"+discount+"% discount, it is now $"+noTax+" without tax, and $"+withTax+" with tax.");