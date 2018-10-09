// var num = 2;
// while(num <= 65536){
//     console.log(num);
//     num *= 2;
// }


//ice cream program
/**
 *problem statement: Generate a random number of cones the ice
 * cream seller has that day. Subtract a random number, between
 * 1 and 5, to represent someone buying ice cream. If the number
 * of cones is greater than what is left say there are only x many cones
 * but keep selling and if there are 0 cones say Yay! I sold them all!
 * and quit
 *
 * PSEUDO CODE IN WHILE LOOP:
 * 1. GENERATE random number of of ice creams a customer wants
 * 2. CHECK if that number is less than the number of ice creams
 * 3. IF less, subtract number from total
 * 4. ELSE say 'Cannot sell you ' + numOfCones + ' I only have '
 *      + allCones + '...' and avoid subtracting
 * 5. ALWAYS CHECK to make sure the total number of cones is greater
 *      than 0.
 */
var allCones = Math.floor(Math.random() * 50) + 50;

do{
    var numOfCones = Math.floor(Math.random() * 5) + 1;
    if(numOfCones <= allCones){
        console.log('I have ' + allCones + ' right now');
        allCones = allCones - numOfCones;
        console.log('you bought ' + numOfCones + ' I have ' + allCones + ' left');
        if(allCones === 0){
            console.log('Yay! I sold them all!');
        }
    }
    else {
        console.log('Cannot sell you ' + numOfCones + ' I only have '
            + allCones + '...');
    }
} while(allCones > 0);