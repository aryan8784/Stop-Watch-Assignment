var hrs = document.getElementById("hrs")
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var msec = document.getElementById("msec");

var miliSeconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;

var interval;

function start() {
    interval = setInterval(startTime, 10)
    var startbtn = document.getElementById("start");
    startbtn.disabled = true;
}

function startTime() {
    miliSeconds++;
    // console.log(miliSeconds);
    msec.innerHTML = miliSeconds;


    if (miliSeconds == 99) {
        seconds++;
        sec.innerHTML = seconds;
        // console.log(seconds);
        miliSeconds = 0;
    }
    else if (seconds == 60) {
        minutes++;
        min.innerHTML = minutes;
        // console.log(seconds);
        seconds = 0;
    }
    else if (minutes == 60) {
        hours++;
        hrs.innerHTML = hours;
        // console.log('hours',hours);
        minutes = 0;
    }
}

function stop() {
    clearInterval(interval)
    var startbtn = document.getElementById("start");
    startbtn.disabled = false;
}

function resetTimer() {
    var startbtn = document.getElementById("start");
    startbtn.disabled = false;
    stop();
    miliSeconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    hrs.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
    msec.innerHTML = miliSeconds;
} 