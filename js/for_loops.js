function showMultiplicationTable(number) {
    for(var i = 1; i <= 10; i++){
        console.log(number + ' x '
        + i + ' = ' + (number * i));
    }
}
showMultiplicationTable(7);

//the following can be refactored to use helper functions such as isEven
for(var n = 1; n <= 10; n++){
    var num = Math.floor(Math.random() * 180 + 20);
    if(num % 2 === 0)
        console.log(num + ' is even');
    else
        console.log(num + ' is odd');
}

for(var i = 1; i < 10; i++){
    var output = '';
    for(var j = 1; j <= i; j++){
        output += i;
    }
    console.log(output);
}

for(var i = 100; i >= 5; i -= 5){
    console.log(i);
}