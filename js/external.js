"use strict";

console.log("Hello from external JavaScript");
alert('Welcome to my Website!');
var usersFavoriteColor = prompt('What is your favorite color?');
alert('Great, ' + usersFavoriteColor + ' is my favorite color too!');


//do problem number 3 using the prompt and alert functions!
var littleMermaidCost = parseFloat(prompt('How much does the Little Mermaid cost to rent per day?'));
var littleMermaidRentTime = parseInt(prompt('How many days do you plan to rent this movie for?'));
var brotherBearCost = parseFloat(prompt('How much does the brotherBearCost cost to rent per day?'));
var brotherBearRentTime = parseInt(prompt('How many days do you plan to rent this movie for?'));
var herculesCost = parseFloat(prompt('How much does the Hercules cost to rent per day?'));
var herculesRentTime = parseInt(prompt('How many days do you plan to rent this movie for?'));
var price = (littleMermaidCost * littleMermaidRentTime) + (brotherBearCost * brotherBearRentTime) + (herculesCost * herculesRentTime);
alert('The total cost for renting these movies is $' + price.toFixed(2));

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

var noConflict = confirm('Are you positive this class does not conflict? ');
var classNotFull = confirm('Are you sure the class is not full? ');
var canEnroll = (noConflict && classNotFull);
alert('Then it is ' + canEnroll + ' that you can enroll.');

var premiumMember = confirm('Do you have a premium membership? ');
var moreThanTwoItems = confirm('Do you have more than two items? ');
var discountApplied = (premiumMember || moreThanTwoItems);
alert('Then it is ' + discountApplied + ' that you get the discount.');

if(premiumMember || moreThanTwoItems){
   alert('Great, discount is applied!');
}
else {
    alert('Unfortunately we can\'t apply the discount');
}

function checkDiscount(){
    var premiumMember = confirm('Do you have a premium membership? ');
    if(!premiumMember){
        var moreThanTwoItems = confirm('Do you have more than two items? ');
        if(moreThanTwoItems)
            alert('Great, discount is applied!');
        else
            alert('Unfortunately we can\'t apply the discount because you need to be a member or have more than two items.');
    }
    else{
        alert('Great, discount is applied!');
    }
}

checkDiscount();