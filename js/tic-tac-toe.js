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
        tile11 : '', tile12 : '', tile13 : '',
        tile21 : '', tile22 : '', tile23 : '',
        tile31 : '', tile32 : '', tile33 : '',
    };
    var center = '22'

    function centerWin(event, currentPlayer){
        var validSecondMove = false;
        // var secondX = $(event).attr('id');
        // if(edgeLocations.indexOf($(event).attr('id'))){
        //
        // }
        for(var i = 0; i < edgeLocations; i++){
            if($(edgeLocations[i]).text() === currentPlayer && ){
                // validSecondMove = true;
                //call function for checking the third move by sending in
                //the current edgeLocation[i]
            } else if($(edgeLocations[i]).text() === currentPlayer){

            }
        }

    }

    //The following function takes in the second move, when valid
    //and check is the third move makes a win
    function validThirdMove(secondLocation){

    }




    $('.box').click(function () {
        var currentLocation = $(this).attr('id');
        if($(this).text() === '') {//makes sure the current box is empty before writing in it
            var currentPlayer = players[i];
            $(this).text(currentPlayer);
            boardGame['id' + currentLocation] = players[i];
            // console.log(boardGame);

            if(currentLocation === center){
            //    call function that checks for wins starting from center

            } else if(edgeLocations.indexOf(currentLocation) > -1){
            //    call function that checks for wins from edge
            } else {
            //    call function that checks for wins from corners
            }
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