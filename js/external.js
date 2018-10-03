"use strict";

console.log("Hello from external JavaScript");
alert('Welcome to my Website!');
var usersFavoriteColor = prompt('What is your favorite color?');
alert('Great, ' + usersFavoriteColor + ' is my favorite color too!');

var rentalRate = parseFloat(prompt('How much does it cost to rent per day?'));
var littleMermaidRentTime = parseInt(prompt('How many days do you plan to rent this movie for?'));
var brotherBearRentTime = parseInt(prompt('How many days do you plan to rent this movie for?'));
var herculesRentTime = parseInt(prompt('How many days do you plan to rent this movie for?'));
var price = rentalRate * (littleMermaidRentTime + brotherBearRentTime + herculesRentTime);
alert('The total cost for renting these movies is $' + price.toFixed(2));

//do problem number 3 using the prompt and alert functions!
//Movie rental problem: Solution takes into account that not all movies cost the same to rent.
// var littleMermaidCost = parseFloat(prompt('How much does the Little Mermaid cost to rent per day?'));
// var littleMermaidRentTime = parseInt(prompt('How many days do you plan to rent this movie for?'));
// var brotherBearCost = parseFloat(prompt('How much does the brotherBearCost cost to rent per day?'));
// var brotherBearRentTime = parseInt(prompt('How many days do you plan to rent this movie for?'));
// var herculesCost = parseFloat(prompt('How much does the Hercules cost to rent per day?'));
// var herculesRentTime = parseInt(prompt('How many days do you plan to rent this movie for?'));
// var price = (littleMermaidCost * littleMermaidRentTime) + (brotherBearCost * brotherBearRentTime) + (herculesCost * herculesRentTime);
// alert('The total cost for renting these movies is $' + price.toFixed(2));


//Google pay problem
var googlePayPerHour = parseFloat(prompt('How much does Google pay per hour?: '));
var googleHoursWorked = parseFloat(prompt('How many hours did you work for Google this week?: '));
var amazonPayPerHour = parseFloat(prompt('How much does Amazon pay per hour?: '));
var amazonHoursWorked = parseFloat(prompt('How many hours did you work for Amazon this week?: '));
var facebookPayPerHour = parseFloat(prompt('How much does Facebook pay per hour?: '));
var facebookHoursWorked = parseFloat(prompt('How many hours did you work for Facebook this week?: '));
// var totalPay = ((googleHoursWorked * googlePayPerHour)
//     + (amazonHoursWorked  * amazonPayPerHour)
//     + (facebookHoursWorked * facebookPayPerHour));

//The following is a better way of making the calculation because it is easier to read.
var totalPay = googleHoursWorked * googlePayPerHour;
totalPay += amazonHoursWorked * amazonPayPerHour;
totalPay += facebookHoursWorked * facebookPayPerHour;
alert('This week, you earned $' + totalPay.toFixed(2));

//Student Enrollment problem
var noConflict = confirm('Are you positive this class does not conflict? ');
var classNotFull = confirm('Are you sure the class is not full? ');
var canEnroll = (noConflict && classNotFull);
alert('Then it is ' + canEnroll + ' that you can enroll.');

//Membership problem from point of view of store
var numItems = 2;
var offerValid = confirm('Is the offer still valid?');
var premiumMember = confirm('Does customer have a premium membership? ');
var numBoughtItems = prompt('Enter number of items customer wants to purchase: ');
var enoughItems = numBoughtItems >= numItems;
var discountApplied = (premiumMember || (enoughItems && offerValid));
alert('Then it is ' + discountApplied + ' that you get the discount.');

// //Alternative solution to Membership problem using conditionals
// if(premiumMember || (enoughItems && offerValid)){
//    alert('Great, discount is applied!');
// }
// else {
//     alert('Unfortunately we can\'t apply the discount');
// }

// //Alternative solution to Membership problem using a function
// function checkDiscount(){
//     var premiumMember = confirm('Do you have a premium membership? ');
//     if(!premiumMember){
//         var moreThanTwoItems = confirm('Do you have more than ' + numItems + ' items? ');
//         if(enoughItems && offerValid)
//             alert('Great, discount is applied!');
//         else
//             alert('Unfortunately we can\'t apply the discount because you need to be a member or have more items.');
//     }
//     else{
//         alert('Great, discount is applied!');
//     }
// }
// checkDiscount();