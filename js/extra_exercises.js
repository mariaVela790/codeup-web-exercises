"use strict";
// var userInput = prompt('Enter a string that has at least one letter: ');
// if(userInput == null){
//     alert('You are now exiting the string input test.');
// }
//
// while(!isNaN(userInput) && userInput !== null){
//     userInput = prompt('There needs to be an input that has at least one letter, please enter a string: ');
//     if(userInput == null){
//         alert('You are now exiting the string input test.');
//         break;
//     }
// }
// if(userInput !== null){
//     console.log('What is the input string? ' + userInput);
//     console.log(userInput + ' has ' + userInput.length + ' characters.');
// }



//SOLUTION DONE USING A FUNCTION

// function getStringInput(){
//     var userInput = prompt('Enter a string that has at least one letter: ');
//
//     while(!isNaN(userInput)){
//         if(userInput === null){
//             console.log('user quit');
//             return;
//         }
//         userInput = prompt('There needs to be an input that has at least one letter, please enter a string: ');
//     }
//     console.log('What is the input string? ' + userInput);
//     console.log(userInput + ' has ' + userInput.length + ' characters.');
//     return;
// }
// getStringInput();

//SOLUTION FOR NUMBER 2:
/**
 * In this problem the goal is to prompt the user for a noun, a verb, an adjective, and an adverb to create
 * a silly Mad Lib. For the Mad Lib we will use string interpolation.
 */

/**PSEUDO-CODE FOR NUMBER 2
 * PROMPT user for noun
 * PROMPT user for verb
 * PROMPT user for adjective
 * PROMPT user for adverb
 * DISPLAY string with the format of 'Do you ' + verb + ' your '
 * + adjective + ' ' + noun + ' ' + adverb '? That\'s hilarious!'
 *
 */

// var userNoun;
// var userVerb;
// var userAdjective;
// var userAdverb;
//
// do{
//     userNoun = prompt('Enter a noun: ');
//     var userNounValid = (isNaN(userNoun) && userNoun !== null);
// }while(!userNounValid)
// do{
//     userVerb = prompt('Enter a verb: ');
//     var userVerbValid =  (isNaN(userVerb) && userVerb !== null);
// }while(!userVerbValid)
// do{
//     userAdjective = prompt('Enter a adjective: ');
//     var userAdjectiveValid = (isNaN(userAdjective) && userAdjective !== null);
// }while(!userAdjectiveValid)
// do{
//     userAdverb = prompt('Enter a adverb: ');
//     var userAdverbAdjective = (isNaN(userAdverb) && userAdverb !== null);
// }while(!userAdverbAdjective)
//
// alert('Do you ' + userVerb + ' your ' + userAdjective + ' ' + userNoun + ' ' + userAdverb + '? That\'s hilarious!');

//Number 3
// var firstNum = parseFloat(prompt('What is the first number? '));
// var secondNum = parseFloat(prompt('What is the second number? '));
// var addNums = firstNum + secondNum;
// var subtractNums = firstNum - secondNum;
// var multiplyNums = firstNum * secondNum;
// var divideNums = firstNum / secondNum;
//
// console.log(firstNum + ' + ' + secondNum + ' = ' + addNums + '\n'
//             + firstNum + ' - ' + secondNum + ' = ' + subtractNums + '\n'
//             + firstNum + ' * ' + secondNum + ' = ' + multiplyNums + '\n'
//             + firstNum + ' / ' + secondNum + ' = ' + divideNums);


//NUMBER 4
// var widthInFt = prompt('What is the width of the room? ');
// var lengthInFt = prompt('What is the length of the room? ');
// var areaInFtSqrd = widthInFt * lengthInFt;
// const metersSqrdConverion = 0.09290303;
// var areaInMSqrd = areaInFtSqrd * metersSqrdConverion;
// alert('You entered dimensions of ' + lengthInFt + ' feet by ' + widthInFt + ' feet.\n'
//         + 'The area is \n'
//         + areaInFtSqrd + ' square feet\n'
//         + areaInMSqrd.toFixed(2) + ' square meters');

//NUMBER 5
var numPeople = prompt('How many people? ');
var numPizzas = prompt('How many pizzas do you have? ');
var numSlicesPerPizza = prompt('How many slices per pizza? ');
var totalSlices = numPizzas * numSlicesPerPizza;
alert(numPeople + ' people with ' + numPizzas + ' pizzas');
var slicesPerPerson = parseInt(totalSlices / numPeople);
alert('Each person gets ' + slicesPerPerson + ' pieces of pizza.');
var slicesLeft = totalSlices % numPeople;
alert('There are ' + slicesLeft + ' leftover pieces.');