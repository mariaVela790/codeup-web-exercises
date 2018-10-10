// var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// var alphabet = 'abcdefghijklmnopqrstuvwxyz';
// alphabet = alphabet.split('');
//
// function returnDayOfTheWeek(){
//     do{
//         var number = prompt('Enter a number for the day of the week that you want: ');
//     }while(number > 7 || number < -1);
//
//     return daysOfTheWeek[number - 1];
// }
//
// console.log(returnDayOfTheWeek());
//
// function returnIndexInAlphabet(letter){
//     letter = letter.toLowerCase();
//     return alphabet.indexOf(letter) + 1;
// }
//
// console.log(returnIndexInAlphabet('a'));
// console.log(returnIndexInAlphabet('z'));
//
// /**
//  * problem statement: Take in an array of strings and return the string that
//  * is the longest.
//  *
//  * PSEUDO CODE:
//  * 1. TAKE an array of strings
//  * 2. SET the first string as the max by default
//  * 3. COMPARE the second element to the max, IF longer, set the max to be the second element
//  * 4. else go on to the element after
//  * 5. return the max value
//  */
//
// function returnLongestString(array){
//     var maxStr = array[0];
//     var equalLength = '';
//     for(var i = 1; i < array.length; i++){
//         if(array[i].length > maxStr.length){
//             maxStr = array[i];
//         }
//         // else if (array[i].length === maxStr.length){
//         //     equalLength += array[i] + ' and '
//         // }
//     }
//     return maxStr;
// }
//
// var songLyrics = ['you' ,'olo', 'say', 'boo'];
// console.log(returnLongestString(songLyrics));

function addNumbersInArray(array){
    var sumArray = 0;
    array.forEach(function(element){
        var elemNum = parseFloat(element);
        if(!isNaN(elemNum))
            sumArray += elemNum;
    });
    return sumArray;
}
//TESTING addNumbersInArray function
// console.log(addNumbersInArray(['hello', '1', 2]));

function addToSameAmount(array1, array2) {
    var sumArray1 = addNumbersInArray(array1);
    var sumArray2 = addNumbersInArray(array2);
    return (sumArray1 === sumArray2);

}

console.log(addToSameAmount([1, '2'], [2, 1]));