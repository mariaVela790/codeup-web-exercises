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


//////////////////////////////////////////////////////////
function transformStr(strInput) {
    var inputArr = strInput.split('');
    var elementNum;
    var newElemNum;
    for (var i = 0; i < inputArr.length; i++){
        if(inputArr[i].match(/[a-z]/) !== -1){
            elementNum = inputArr[i].charCodeAt(0);
            newElemNum = elementNum + 1;
            inputArr[i] = String.fromCharCode(newElemNum);
            console.log(inputArr[i]);

            if (inputArr[i] === 'a' || inputArr[i] === 'i' ||inputArr[i] === 'e' ||inputArr[i] === 'u' || inputArr[i] === 'o' ) {
                inputArr[i] = inputArr[i].toUpperCase();
                console.log(inputArr[i].toUpperCase());

            }
        }
    }
    var output = inputArr.join('');
    return output;

}


// var s = 'A';
// console.log(s.charCodeAt(0));
// console.log(String.fromCharCode(65));
console.log(transformStr('r@lokd 0tsots*'));
console.log(transformStr('gzoox gz11nvddm!'));




var prod;
var prodStr;
var prodRevArray;
var prodRev;
var i;
var j;

function findPalindrome(){

    for (i = 999; i >= 100; i--) {
        for (j = 999; j >= 100; j--) {
            prod = i * j;
            prodStr = prod.toString();
            prodRevArray = prodStr.split('').reverse();
            prodRev = prodRevArray.join('');
            if (prodStr === prodRev) {
                console.log(i * j);
                return [i, j];
            }
        }

    }
}

console.log(findPalindrome());
























