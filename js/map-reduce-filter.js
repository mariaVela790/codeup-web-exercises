"use strict";
//////////////////////////////////////.map////////////////////////////////////////////////////////
//map is useful for getting an array that is the same length as the first array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//produce a new array with each number multiplied by 10

let newNumbers = numbers.map((number) => number * 10);
console.log(newNumbers);

/////////////////////////////////////.map/////////////////////////////////////////////////////////
let packageManagers = ["npm", "pip", "brew", "apt"];

let capPackageManagers = packageManagers.map((packageManager) => packageManager.toUpperCase());
console.log(capPackageManagers);

///////////////////////////////////////.filter/////////////////////////////////////////////////////
//filter is useful to get an array that is of equal or smaller length

//The below doesn't work because the original array is never touched with .map

// packageManagers.map((packageManager) => function () {
//    packageManager = packageManager.toUpperCase();
// });
//
// console.log(packageManagers);

let filteredNumbers = numbers.filter((number) => number % 2 === 0);

console.log(filteredNumbers);

///////////////////////////////////////.filter/////////////////////////////////////////////////////
let letters = ['R', 'y', 'a', 'n', 'L', 'o', 'v', 'e', 's', 'c', 'o', 'd', 'e'];

let vowels = letters.filter((letter) => ['a', 'e', 'i', 'o', 'u'].includes(letter));
console.log(vowels);

///////////////////////////////////////.reduce//////////////////////////////////////////////////////
//reduce is helpful for when you need to change the datatype
let sum = numbers.reduce(((accumulator, currentNumber) => accumulator + currentNumber), 0);
console.log(sum);

let average = sum / numbers.length;
console.log(average);

///////////////////////////////////////.reduce/////////////////////////////////////////////////////
let singleString = ['banana', 'orange', 'smoothie'].reduce(((accumulator, currentString) => accumulator + currentString), '');
console.log(singleString);

//exercise using map, filter, and reduce together
//given an array of numbers
//step 1. multiply each number by 3 and create a new array
//step 2. filter out only th even numbers
//step 3. return the product of multiplying each even number by each other

let numbersTimesThree = numbers.map((number => number * 3));
let evens = numbersTimesThree.filter(number => number % 2 === 0);
// console.log(evens);
let productOfEvens = evens.reduce(((accumulator, currentNumber) => accumulator * currentNumber), 1);
console.log(productOfEvens);