"use strict";
const CANVAS_BORDER_COLOR = 'black';
const CANVAS_BACKGROUND_COLOR = 'white';

var gameCanvas = document.getElementById('gameCanvas');//good
var ctx = gameCanvas.getContext('2d');

ctx.fillStyle = CANVAS_BACKGROUND_COLOR;
ctx.strokeStyle = CANVAS_BORDER_COLOR;

ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);


var snakeSize = 10;
var width = 400;
var height = 400;
var score = 0;
var snake;
var food;


//PRESSED ALT + ENTER TO CONVERT TO ECMA 6
let snake = [
    {x: 200, y: 200},
    {x: 190, y: 200},
    {x: 180, y: 200},
    {x: 170, y: 200},
    {x: 160, y: 200},
];


function drawSnakePart(snakePart) {
    ctx.fillStyle = 'lightgreen';
    ctx.strokeStyle = 'darkgreen';

    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);

}

function drawSnake() {
    snake.forEach(drawSnakePart);
}
