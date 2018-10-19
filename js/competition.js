/**
 *
 * recursive functions
 */

"use strict";

// problem 1
function addUpToN(number){
    if(number <= 0){
        return 0;
    }
    return number + addUpToN(number - 1);
}

//Testing the function
console.log(addUpToN(4));
console.log(addUpToN(12));
console.log(addUpToN(140));
console.log(addUpToN(473));



//fix the if statement to check for the substring
function doesNotContainRaisins(strArray){
    var outputArray = [];
    for(var i = 0; i < strArray.length; i++){
        strArray[i] = strArray[i].toLowerCase();
        if(strArray.indexOf('raisins') === -1){
            outputArray.push(strArray[i]);
        }
        return outputArray;
    }
}

console.log(doesNotContainRaisins(['Mashed Potatoes', 'box of raisins', 'Raisin-man']));
console.log(doesNotContainRaisins(['chocolate chip cookies', 'raisins trail mix', 'Raisins scones']));


function dnaMatch(strInput) {
    var inputArr = strInput.split('');
    // console.log(inputArr);
    var outputArr = [];
    for (var i = 0; i < inputArr.length; i++){
        switch (inputArr[i]) {
            case 'G':
                outputArr.push([inputArr[i], 'C']);
                break;
            case 'C':
                outputArr.push([inputArr[i], 'G']);
                break;
            case 'T':
                outputArr.push([inputArr[i], 'A']);
                break;
            case 'A':
                outputArr.push([inputArr[i], 'T']);
                break;

        }
    }
    return outputArr;
}

console.log(dnaMatch('GCT'));
console.log(dnaMatch('ATCGA'));
console.log(dnaMatch('TTGAG'));


// //////////////////////////////////////////////////////////
// function transformStr(strInput) {
//     var inputArr = strInput.split('');
//     var elementNum;
//     var newElemNum;
//     for (var i = 0; i < inputArr.length; i++){
//         if(inputArr[i].match(/[a-z]/) !== -1){
//             elementNum = inputArr[i].charCodeAt(0);
//             newElemNum = elementNum + 1;
//             inputArr[i] = String.fromCharCode(newElemNum);
//             console.log(inputArr[i]);
//
//             if (inputArr[i] === 'a' || inputArr[i] === 'i' ||inputArr[i] === 'e' ||inputArr[i] === 'u' || inputArr[i] === 'o' ) {
//                 inputArr[i] = inputArr[i].toUpperCase();
//                 console.log(inputArr[i].toUpperCase());
//
//             }
//         }
//     }
//     var output = inputArr.join('');
//     return output;
//
// }
//
//
// // var s = 'A';
// // console.log(s.charCodeAt(0));
// // console.log(String.fromCharCode(65));
// console.log(transformStr('r@lokd 0tsots*'));
// console.log(transformStr('gzoox gz11nvddm!'));


/**
 * problem statement: find the biggest three digit numbers that result in
 * a palindrome when multiplied.
 */

var product;
var prodStr;
var prodRevArray;
var prodRev;
var i;
var j;
var outputStr = [];

function findPalindrome(){
    var min = 999 * 999;
    for (i = 999 ; i >= 100 ; i--) {
    //we choose to try numbers from i to i - 100 because it allows us to try a set of big numbers but outside of this
    // range we begin trying numbers that become significantly smaller which skews the goal of the function
    //
        for (j = i; j > i - 100; j--) {
            product = i * j;
            //turn the product of the two numbers into a string array to reverse it and then
            // compare the original product and the reversed product

            console.log(product + ' ' + j + ' ' +  i);
            // console.log(prodStr === prodRev);
            //Below we check to see if the strings are the same and if they are we return that value
            if (isPalindrome(product)) {
                // console.log(i * j);
                // max = i * j;
                return [i, j];


            }
        }

    }
}

function findPali() {
    var max = 0;
    for(var i = 100; i < 1000; i++){
        for (var j = 100; j < 1000; j++){
            product = i * j;
            if(isPalindrome(product) && (product > max)){
                max = product;

                console.log(i + ' ' + j);
                // console.log(j);
            }
        }
    }
    return [i, j];
}

for(var j = 999; j >= i - 100; j++)

function isPalindrome(product){
    prodStr = product.toString();
    prodRevArray = prodStr.split('').reverse();
    prodRev = prodRevArray.join('');
    return (prodStr === prodRev);
}

console.log(isPalindrome(2190));
console.log(isPalindrome(9009));
console.log(findPalindrome());
























