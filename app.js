
var mins = 0
var sec = 0
var milisec = 0

var minCount = document.getElementById("mins")
var secCount = document.getElementById("sec")
var msecCount = document.getElementById("milisec")

interval = nu


let status = "stopped";

function coundown(){
    milisec++
    msecCount.innerHTML = milisec;
    if (milisec >= 100){
        sec++
        secCount.innerHTML = sec;
        milisec=0 
    }else if (sec >= 60){
        mins++
        minCount.innerHTML =mins
        sec = 0
    }else if (mins >= 60){
        mins = 0
    }
} 





function start(){
    
interval = setInterval(coundown,10)
document.getElementsby('start').disabled = true;


}

function pause(){
    clearInterval(interval)

}

function reset(){
    mins = 00
    sec = 00
    milisec = 00

    minCount.innerHTML = mins
    secCount.innerHTML = sec
    msecCount.innerHTML = milisec
    pause()
}


 
function startStop(){

    if(status === "stopped"){

        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";

    }
    else{

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";

    }

}






