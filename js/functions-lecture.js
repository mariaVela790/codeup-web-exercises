"use strict";

//function takes in string

//get rid of white space

//store count of the characters

//return number for count of characters

// function countLetters(input){
//     //set default output to make sure something is always returned
//     var output = 0;
//     if()
//     var strippedWhiteSpace = input.trim();
//     output = strippedWhiteSpace.length;
//     //do return statement first
//     return output;
// }

// //**make a function, hasLetterA() that takes in a string and returns true if the string contains "a"
// // and false if it does not; test the function
//
// //STEPS FOR hasLetterA()
// //take in a string
//
// //search for index of a
//
// //decide if index is valid
//
// //return whether or not index is valid
//
// function hasLetterA(strInput){
//     var output = false;
//     var strInput = strInput.toLowerCase();
//     output = strInput.indexOf('a') >= 0;
//     return output;
// }
//
//
// function hasLetterA(strInput){
//     var output = false;
//     output = (strInput.indexOf('a') >= 0) || (strInput.indexOf('A') >= 0);
//     return output;
// }


//
// function sayName(someFunction){
//     return 'Hello' + someFunction();
// }
// function returnMaria(){
//     return 'Maria';
// }
// console.log(sayName(returnMaria));
//
//
// var value = sayName(returnMaria);

//OR use an anonymous function
var value = sayName(function(){
    return 'Maria';
})

console.log(value);

(function(){
    "use strict";
    function hello(){
        alert('HI!!');
    }
    var justin = 'bob';
})();

