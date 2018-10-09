/**
 * problem statement: Take in an input and for each capital letter, turn the letter into a lowercase and vice versa
 *
 * PSEUDO CODE:
 * 1. LOOP through the length of the input
 * 2. IF the character at that index matches the regex for a capital letter, replace it with the lowercase
 * 3. ELSE IF the character at that index matches the regex for a lowercase letter, replace it with the capital version
 *
 */

function toggleCases(input) {
    var capitalLetters = /[A-Z]/;
    var lowerCaseLetters = /[a-z]/;
    var inputArray = input.split('');
    for(var i = 0; i < inputArray.length; i++){
        if(inputArray[i].search(lowerCaseLetters) !== -1){
            inputArray[i] = inputArray[i].toUpperCase();
            console.log(inputArray[i]);
        } else if(inputArray[i].search(capitalLetters) !== -1){
            inputArray[i] = inputArray[i].toLowerCase();
            console.log(inputArray[i]);
        }
    }
    return inputArray.join('');
}
// console.log(toggleCases('Hello'));




function isSameAsLength(input){

    var i = 0;
    while((input.charAt(i)).search(/\D/) >= 0){
        i++;
    }
    var letterStr = input.substring(0, i);
    var numberInStr = parseFloat(input.substring(i, input.length));
    return (letterStr.length == numberInStr);
}

console.log(isSameAsLength('hello5'));

