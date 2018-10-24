/**
 *
 Create a playable Tic-tac-toe board board game with unique styling and animations using jQuery.

 1. Clicks should alternate between the unicode symbol or images for X's and O's when clicking tiles.



 2. The current player's turn should be displayed after each click.

 3. Clicked tiles should no longer be clickable.

 4. A button should be included to start or restart a new game.
 */

$(document).ready(function () {
    var i = 0;
    var players = ['O', 'X'];
    var edgeLocations = ['12', '21', '23', '32'];
    var cornerLocations = ['11', '13', '31', '33'];
    var boardGame = {
        id11 : '', id12 : '', id13 : '',
        id21 : '', id22 : '', id23 : '',
        id31 : '', id32 : '', id33 : '',
    };

    function playerWon(){

    }


    $('.box').click(function () {
        var currentLocation = $(this).attr('id');
        if($(this).text() === '') {//makes sure the current box is empty before writing in it
            $(this).text(players[i]);
            boardGame['id' + currentLocation] = players[i];
            // console.log(boardGame);


            //resetting i
            if (i === 1) {
                i = 0;
            } else {
                i++;
            }
        }

        /**
         * problem statement: keep track of which boxes have Xs and Os and check if there is a match of three in a row
         *
         * PSEUDO CODE:
         * 1. create an array of the location of Xs
         * 2. check if the array matches any of the possible wins
         *
         */

    });





});//End of the doc ready

////////////////TRASH BIN
// if(currentLocation === '22'){
//     console.log('in if');
//     var valInEdgeBox;
//     for(var j = 0; j < edgeLocations.length; j++){
//         console.log('in loop');
//         valInEdgeBox = $('#' + edgeLocations[j]).html();
//         console.log(valInEdgeBox);
//         if(players[i] === valInEdgeBox){
//             //from here there is only one choice for a win
//             //which is the last in the row
//
//             break;
//         }
//
//     }
//
// } else if(edgeLocations.indexOf(currentLocation) > -1){
//
// } else {
//
// }