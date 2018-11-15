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
    let edgeLocationsRow = ['21','23'];
    let edgeLocationsCol = ['12','32'];
    var center = '22';
    var boardGame = {
        tile11 : '', tile12 : '', tile13 : '',
        tile21 : '', tile22 : '', tile23 : '',
        tile31 : '', tile32 : '', tile33 : '',
    };
    //iterate over an array of the rows to check for a win


    $('.box').click(function () {
        var currentLocation = $(this).attr('id');
        if($(this).text() === '') {//makes sure the current box is empty before writing in it
            var currentPlayer = players[i];//improves readability

            $(this).text(currentPlayer);
            boardGame['id' + currentLocation] = currentPlayer;
            // console.log(boardGame);
            // console.log(playerWins(currentPlayer, currentLocation));
            if(playerWins(currentPlayer, currentLocation)){
                console.log(currentPlayer + ' wins');
            }

            //setting i to move to next player
            //BROKEN NEEDS TO GET FIXED
            if (i === 1) {
                i = 0;
            } else {
                i++;
            }

        }
        // console.log(typeof '#');
    });

    function playerWins(currentPlayer, currentLocation) {
        var playerWon = false;

        //the following checks what type of "first" move the player made
        //to decide which method of winning they are going for

        if(currentLocation === center){
            // console.log('checking for a center win in playerWins function');
            //    call function that checks for wins starting from center
            playerWon = centerWin(currentPlayer);

        } else if(edgeLocations.indexOf(currentLocation) > -1){
            //    call function that checks for wins from edge

            //playerWon = edgeWin(currentPlayer);
        } else {
            //    call function that checks for wins from corners

            //playerWon = cornerWin(currentPlayer);
        }

        return playerWon;
    }

    function centerWin(currentPlayer){
        var centerWon = false;
        var reversedEdgeLocation;

        // var secondX = $(event).attr('id');
        // if(edgeLocations.indexOf($(event).attr('id'))){
        //
        // }


        for(var i = 0; i < edgeLocations.length; i++){
            // console.log('centerWin function loop');
            //This for loop checks if the player has made previous moves on the edges
            // console.log('in centerWin function loop, current player is ' + currentPlayer);
            let edgeLocationId = '#' + edgeLocations[i];
            // console.log('inner html for this edge box is' + $(edgeLocationId).text());
            if($(edgeLocationId).text() === currentPlayer){//checks to see if the text at that square is made by the same player
                // console.log('in centerWin function loop if statement, current player is ' + currentPlayer);

                //get the location in the same row and same
                let edgeLocationRow = edgeLocations[i].split('')[0];
                console.log(edgeLocations[i]);
                // console.log(edgeLocationRow);
                let edgeLocationCol = edgeLocations[i].split('')[1];
                // console.log(edgeLocationCol);
                let centerRowAndCol = center.split('')[1];
                // console.log(center[0]);
                if(edgeLocationRow === centerRowAndCol){
                    // console.log('in row');
                    console.log('passed row');
                    edgeLocationRow.forEach((edgeLocation) => {
                       let edgeRowId = '#' + edgeLocation;
                        if($(edgeRowId).text() === currentPlayer){
                            console.log('center win');
                            centerWon = true;
                        } else{
                            centerWon = false;
                        }
                    });
                } else if(edgeLocationCol === centerRowAndCol){
                    edgeLocationCol.forEach((edgeLocation) => {
                        let edgeColId = '#' + edgeLocation;
                        if($(edgeColId).text() !== currentPlayer){
                            centerWon = false;
                        }
                    });
                }


                // call function for checking the third move by sending in
                // the current edgeLocation[i]
            }
            else if($(cornerLocations[i]).text() === currentPlayer){
                reversedEdgeLocation = edgeLocations[i].split('').reverse().join('');

                if(($(reversedEdgeLocation).text() === currentPlayer)
                    || $('#11').text() === currentPlayer
                    || $('#33').text() === currentPlayer){

                    console.log('diagonal win');
                    centerWon = true;//center wins because there is a perfect row

                }
            }
        }//close of for loop


        return centerWon;

    }

    //The following function takes in the second move, when valid
    //and check is the third move makes a win
    function validThirdMove(secondLocation){

    }





        /**
         * problem statement: keep track of which boxes have Xs and Os and check if there is a match of three in a row
         *
         * PSEUDO CODE:
         * 1. create an array of the location of Xs
         * 2. check if the array matches any of the possible wins
         *
         */






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

//reverses matched edge id to see if the player got a straight row
// if($(reversedEdgeLocation).text() === currentPlayer){
//     console.log('row win');
//     centerWon = true;//center wins because there is a perfect row
//
// }