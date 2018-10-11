
/**
 * JS Array Practice
 * Array creation, manipulation, searching etc...
 */

// Exercise 0. Write a function named first() that returns only the first element of an array
//done

// Exercise 1. Write a function named secondToLast() that returns the second to last element
//done

// Exercise 2. Write a function named rest() that takes an an array and returns an array containing everything except the first element.
function rest(array) {
    var outputArray = array.slice(1, array.length - 1);
    return outputArray;
}


// Exercise 3. Write a function named getLongestString that takes in an array of strings and returns the longest string of that array
//done

// Exercise 3.1 Write a function named getShortestString that takes in an array of strings and returns the shortest string in that array.
/**
 *problem statement: Take in an array and try to find the shortest string in the array.
 * If string is shorter than the min then it is the new min
 * If the string is longer, move onto the next element
 * If the string is the same length as the min, then store it in case all elements are the same

 *
 */
function getShortestString(array) {
    var min = array[0];
    var allEqual = '';
    array.forEach(function(element){
        if(element.length < min.length){
            min = element;
            allEqual = min;
        } else if(element.length === min.length){
            allEqual += ', ' + element;
        }
    });
    allEqual = allEqual.split(', ');
    if(allEqual.length > 1){
        allEqual.join(', ');
        return 'There is no min because the following elements are the same length: ' + allEqual;
    } else {
        return min;
    }
}

console.log(getShortestString(['12345', '14', '12', '12345', '13']));


// Exercise 4. Write a function named addTwoArrays that takes in two, one dimensional arrays. The function should return a
// single array containing all of the elements of the first array along with all of the elements of the second array
// Example: addTwoArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]
function addTwoArrays(array1, array2) {
    array2.forEach(function(element){
        array1.push(element);
    });
    return array1;
}

console.log(addTwoArrays([1, 2, 3], [4, 5, 6]));


// Exercise 5. Write a function named getUniqueValues that takes in an array and returns the array without any duplicates
// Example: getUniqueValues(["a", "b", "a", "b", "c", "c"]) should return ["a", "b", "c"]

function getUniqueValues(array) {
    var uniqueArray = [];
    array.forEach(function(element){
        if(uniqueArray.indexOf(element) === -1){
            uniqueArray.push(element);
        }
    });
    return uniqueArray;
}

console.log(getUniqueValues(['a', 'b', 'a', 'b', 'c', 'c']));

// Exercise 6. Write a function named reverseArray that takes in an array and returns it reversed, but without altering the original array.
/**
 *problem statement: take in an array and reverse it without using the reverse method
 *
 */
function reverseArray(array) {
    var arrayReverse = array.slice(0, array.length );
    return arrayReverse.reverse();
}

var testArray = [1, 2, 3, 4];
console.log(reverseArray(testArray));
console.log(testArray);


// Exercies 7. Write a function named getRandomQuote().
//   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
//   getRandomQuote should generate a random number between 0 and the array's length minus 1
//   use the randomly generated number as your index
//   return a random quote.
var quoteArray = ['its a marathon not a race', 'every journey begins with a step', 'sun will come out tomorrow', 'hang in there'];

function getRandomQuote(quoteArray) {
    randomIndex = Math.ceil(Math.random() * (quoteArray.length - 1));
    return quoteArray[randomIndex];
}

console.log(getRandomQuote(quoteArray));

// Exercise 8. Write a function named getIndexesOf() that takes in two arguments.
// The first argument should be a specific numeral or character
// The second argument should be any given string
// getIndexesOf() should return an array containing all of the indexes of that character in the string
// Example: getIndexesOf("a", "banana") should return the array [1, 3, 5]
// Example: getIndexesOf("z", "banana") should return an empty array []

/**
 * problem statement: take in a character and an array and return the indices of the character in the array
 * as a set of arrays
 */

function getIndexesOf(character, strInput) {
    var outputArray = [];
    var inputAsArray = strInput.split('');
    inputAsArray.forEach(function(){

    })
    return outputArray;
}
















