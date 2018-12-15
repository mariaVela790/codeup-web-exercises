/**
 *
 Create a playable Tic-tac-toe board board game with unique styling and animations using jQuery.

 1. Clicks should alternate between the unicode symbol or images for X's and O's when clicking tiles.



 2. The current player's turn should be displayed after each click.

 3. Clicked tiles should no longer be clickable.

 4. A button should be included to start or restart a new game.
 */

$(document).ready(function () {
    "use strict";
    let i = 0;
    let players = ['O', 'X'];
    let boardGame = {
        tile11 : '', tile12 : '', tile13 : '',
        tile21 : '', tile22 : '', tile23 : '',
        tile31 : '', tile32 : '', tile33 : '',
    };
    //iterate over an array of the rows to check for a win


    $('.box').click(function () {
        let currentLocation = $(this).attr('id');
        if($(this).text() === '') {//makes sure the current box is empty before writing in it
            let currentPlayer = players[i];//improves readability

            $(this).text(currentPlayer);
            boardGame['tile' + currentLocation] = currentPlayer;
            // if(playerWins(currentPlayer, currentLocation)){
            //     console.log(currentPlayer + ' wins');
            // }
            //

            let winner = checkForWin();
            if(winner !== ''){
                $('.box').off();
                $('.winnerAnnouncement').html(`
                    <div class="announcementFont">
                        Player ${winner} wins!
                    </div>
                `);
            }

            //setting i to move to next player
            if (i === 1) {
                i = 0;
            } else {
                i++;
            }

        }
    });

    const checkForWin = () => {
        // let winnerStats = winnerObj(false, '');
        for(let i = 1; i <=3 ; i++){
            let testStr1 = '';
            let testStr2 = '';
            let testStr3 = '';
            let testStr4 = '';

            for (let j = 1; j <= 3; j++){
                testStr1 += boardGame['tile' + i + j];
                testStr2 += boardGame['tile' + j + i];
                testStr3 += boardGame['tile' + j + j];
                if(j === 2){
                    let jPlus = j + 1;
                    let jMinus = j - 1;
                    testStr4 += boardGame['tile' + jPlus + jMinus];
                    testStr4 += boardGame['tile' + j + j];
                    testStr4 += boardGame['tile' + jMinus + jPlus];
                    console.log(testStr4);
                }
            }
            if(strMatch(testStr1, testStr2, testStr3, testStr4, 'XXX')){
                return 'X';
            } else if(strMatch(testStr1, testStr2, testStr3, testStr4, 'OOO')){
                return 'O';
            }
        }
        return '';
    };

    const strMatch = (testStr1, testStr2, testStr3, testStr4, comparisonStr) => {
        return (testStr1 === comparisonStr
            || testStr2 === comparisonStr
            || testStr3 === comparisonStr
            || testStr4 === comparisonStr);
    };

});//End of the doc ready
