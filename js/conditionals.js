"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 *
 * problem statement: ask user if they would like to enter a number. Depending on their
 * answer, end the program or check if the input is even, find out waht 100 plus the number is,
 * and whether or not the number is negative or positive.
 *
 * PSEUDO CODE:
 * 1. PROMPT user to see if they want to enter a number
 * 2. IF 'Ok' and have them enter a number string with prompt
 * - CHECK  that number is NOT a non number
 * - IF not a non number then proceed
 * -turn string into a number
 * 3. DISPLAY whether the number is even or odd, what the number is plus 100, if the number is neg or positive
 * 4. ELSE if NaN is entered, tell user that the input is not a number
 */


// CODE DONE WITHOUT FUNCTIONS
var wantToEnterANumber = confirm('Would you like to enter a number?');

if(wantToEnterANumber){
    var number = prompt('Please enter a number: ');
    if(!isNaN(number)){
        number = Number(number);
        if(number % 2 === 0){
            alert('Number is even');
        } else {
            alert('Number is odd');
        }
        alert('The number plus 100 is ' + (number + 100));

        if(number >= 0){
            alert('Number is positive');
        } else{
            alert('Number is negative');
        }
    } else {
        alert('That is not a number!');
    }
}


//CODE DONE WITH FUNCTIONS
var wantToEnterANumber = confirm('Would you like to enter a number?');


function isEven(number){
    return (number % 2 === 0);
}
function isPositive(number){
    return (number >= 0);
}
function sayIfEvenOrOdd(number){
    if(isEven(number)){
        alert('Number is even');
    } else {
        alert('Number is odd');
    }
}
function addOneHundred(number){
    var output = 0;
    output += number + 100;
    alert('The number plus 100 is ' + output);
}
function sayIfPositiveOrNot(number){
    if(isPositive(number)){
        alert('Number is positive');
    } else{
        alert('Number is negative');
    }
}


if(wantToEnterANumber){
    var number = prompt('Please enter a number: ');

    if(!isNaN(number)){
        number = Number(number);
        sayIfEvenOrOdd(number);
        addOneHundred(number);
        sayIfPositiveOrNot(number);
    } else {
        alert('That is not a number!');
    }
}



/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color) {
    if(color === 'red'){
        return 'Strawberries are ' + color;
    } else if(color === 'orange'){
        return 'Oranges are ' + color;
    } else if(color === 'yellow'){
        return 'Esperanzas are ' + color;
    } else if(color === 'green'){
        return 'Frogs are ' + color;
    } else if(color === 'blue'){
        return color + ' is the color of the sky';
    } else if(color === 'indigo'){
        return 'Blueberries are actually ' + color;
    } else if(color === 'violet'){
        return 'Violets are ' + color;
    }else{
        return 'I don\'t know anything about ' + color;
    }
}

console.log(analyzeColor('blue')); // returns "blue is the color of the sky"
console.log(analyzeColor('red')); // returns "Strawberries are red"
console.log(analyzeColor('cyan')); // returns "I don't know anything about cyan"


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:DONE
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

console.log((analyzeColor(randomColor)));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColor(color) {
    var resultString = '';
    switch(color){
        case 'red':
            resultString += 'Strawberries are ' + color;
            break;
        case 'orange':
            resultString += 'Oranges are ' + color;
            break;
        case 'yellow':
            resultString += 'Esperanzas are ' + color;
            break;
        case 'green':
            resultString += 'Frogs are ' + color;
            break;
        case 'blue':
            resultString += color + ' is the color of the sky';
            break;
        case 'indigo':
            resultString += 'Blueberries are actually ' + color;
            break;
        case 'violet':
            resultString += 'Violets are ' + color;
            break;
        default:
            resultString += 'I don\'t know anything about ' + color;
            break;
    }
    return resultString;
}


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var color = prompt('Type in a color:');
alert(analyzeColor(color));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, originalPrice) {

    luckyNumber = Number(luckyNumber);
    originalPrice = Number(originalPrice);

    switch(luckyNumber){
        case 0:
            //discount is 0%
            return 0;
        case 1:
            //discount 10%
            return originalPrice * .10;
        case 2:
            //25%
            return originalPrice * .25;
        case 3:
            //35%
            return originalPrice * .35;
        case 4:
            //50%
            return originalPrice * .5;
        case 5:
            //100%
            return originalPrice;
    }
}

var luckyNumber= prompt('What is the lucky number you got?');
var originalPrice = prompt('What is the value of your total bill? ');
alert('Your lucky number is ' + luckyNumber + ' and before, your bill was '
    + originalPrice + ' now, it\'s ' + (originalPrice - calculateTotal(luckyNumber, originalPrice)));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var originalPrice = prompt('What is the value of your total bill? ');
var luckyNumber = Math.floor(Math.random() * 6);
alert('Your lucky number is ' + luckyNumber + ' and before, your bill was '
    + originalPrice + ' now, it\'s ' + (originalPrice - calculateTotal(luckyNumber, originalPrice)));
