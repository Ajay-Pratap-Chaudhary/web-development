const h=document.getElementById('hour');
const m=document.getElementById('minute');
const s=document.getElementById('second');

var timer = 0;
var timerInterval;

function start() {
    stop();
    timerInterval = setInterval(function() {
      timer ++;
    const  msVal = Math.floor(timer/3600);
    const  secondVal = Math.floor(timer%60);
    const  minuteVal = Math.floor(timer/60);
      h.innerHTML = msVal < 10 ? "0" + msVal.toString() : msVal;
      s.innerHTML = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
      m.innerHTML = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
    }, 1000);
  }


  function stop() {
    clearInterval(timerInterval);
  }
  