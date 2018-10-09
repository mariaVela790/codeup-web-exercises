"use strict";

var number;
do{
    number = prompt('Enter a number between 1 and 50');
    if(number > 1 && number <  50){
        break;
    }
}while(true);




//////////////////////////////////////////////////////////////////
var number = parseFloat(prompt('Enter a number between 1 and 50:'));

for(var i = 1; i <= 50; i++){
    if(i === number){
        console.log('Yikes! Skipping number: ' + i);
        continue;
    }
    if(i % 2 === 0){
        console.log('Here is an even number: ' + i);
    } else{
        console.log('Here is an odd number: ' + i);
    }


}

