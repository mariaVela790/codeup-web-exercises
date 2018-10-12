// friday
// alert
// countup
// countdown

function changeH1ToFriday() {
    document.querySelector("h1").innerText = "Happy Friday!";
}

document.querySelector("#friday").addEventListener('click', changeH1ToFriday);


function waitTwoSecondsAndAlert() {
    setTimeout(function() {
        alert("ALERT");
    }, 2000);

}

document.querySelector("#alert").addEventListener('click', function() {
    waitTwoSecondsAndAlert();
    // todo - update the timer every second
});


function countUp() {
    var h2 = document.querySelector("h2");
    var count = parseInt(h2.innerText);
    count += 1;
    h2.innerText = count;
}

var isCountingUp;

document.querySelector("#countup").addEventListener('click', function() {

    if(!isCountingUp) {
        setInterval(countUp, 1000);
    }

    isCountingUp = true;

});

function countDown() {
    var h2 = document.querySelector("h2");
    var count = parseInt(h2.innerText);
    count -= 1;
    h2.innerText = count;
}


document.querySelector("#countdown").addEventListener("click", function() {
    document.querySelector("h2").innerText = 3;

    var intervalId = setInterval(function() {

        if(document.querySelector("h2").innerText > 0) {
            countDown();

        } else {
            clearInterval(intervalId);
            document.querySelector("h2").innerText = "Done!";
        }

        console.log("interval function called");

    }, 1000);

});

