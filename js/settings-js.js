var snakeSize = 10;
var width = 400;
var height = 400;
var score = 0;
var snake;
var food;
const CANVAS_BORDER_COLOR = 'black';
const CANVAS_BACKGROUND_COLOR = 'white';

var myCanvas = document.getElementById('myCanvas');//good
var ctx = myCanvas.getContext('2d');

ctx.fillStyle(0, 0, myCanvas.width, myCanvas.height);
ctx.strokeRect(0, 0, myCanvas.width, myCanvas.height);

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
