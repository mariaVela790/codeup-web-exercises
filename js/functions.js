"use strict";

/**
 * DONE
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

/**
 * problem statement: Get input from the user and return a string that says "Hello, " + input
 *
 * pseudocode:
 * -Pass parameter input
 * -concatenate Hello string
 * -return concatenation string
 *
 * QUESTION: Do we want the results to be logged or for the function to also return something visible to
 * the user like an alert?
 */
function sayHello(name){
    var helloStr = '';
    helloStr = 'Hello, ' + name + '!';
    return helloStr;
}

/**
 * DONE
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello('Maria');
console.log(helloMessage);

/**
 * DONE
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
var myName = 'Maria';
console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result every time you refresh the page if you are using the random
 * number)
 */
function isTwo(someNum){
    var output = false;
    someNum = parseFloat(someNum);
    output = (someNum === 2);
    return output;
}
console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 *
 *
 * problem statement: take in user input of a tipPercent and totalBill and return the
 * tip amount only
 */

 /**
 * Discussed with instructor: it was recommended to format the result as a string including the '$'
  * and fixed decimal.
 */
function calculateTip(totalBill, tipPercent){
    var tipOutput = '';
    tipPercent = parseFloat(tipPercent);
    totalBill = parseFloat(totalBill);
    var tipTotal = (tipPercent * totalBill).toFixed(2);
    var tipOutput = '$' + tipTotal;
    return tipOutput;
}
// console.log(calculateTip(0.20, 20));
// console.log(calculateTip(0.25, 25.50));
// console.log(calculateTip(0.15, 33.42));

/**
 * DONE
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

var totalBill123 = prompt('Enter total bill amount: ');
var tipPercent123 = prompt('Enter tip percentage: ');
var tipAmount = calculateTip(totalBill123, tipPercent123);
alert('Your tip amount is ' + tipAmount);

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

/**
 * Discussed with instructor: it was recommended to format the result as a string including the '$'
 * and fixed decimal.
 */
function applyDiscount(originalPrice, discountPercent){
    var discountedPrice = '';
    var discountCalc = originalPrice - (originalPrice * discountPercent);
    discountedPrice = '$' + discountCalc;
    return discountedPrice;
}
console.log(applyDiscount(100, .2));