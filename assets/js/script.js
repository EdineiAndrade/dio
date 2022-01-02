
let count = 0;
var currentNumberWrapper = document.getElementById('currentNumber');


function increment() {

    if (count >= 10) {
        console.log('Número Máximo Atingido')
       
    }
    count ++;
   currentNumberWrapper.innerHTML = count;
}  

function decrement() {
    count --;
    currentNumberWrapper.innerHTML = count;
}




function Relogio () {


    var data = new Date();
    var hr = data.getHours();
    var m = data.getMinutes();
    var s = data.getSeconds();

     /*
    if (s > 10){
        var tempoTotal = hr + ":" + m + ":" + "0" + s;
    } else if {
        var tempoTotal = hr + ":" + m + ":" + s;

    }

    var dateFormat = require('dateformat');
    var now = new Date();
    dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
  */
    var d = new Date();

    var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2)+ ":" + ("0" + d.getSeconds()).slice(-2);


    var tempoTotal = hr + ":" + m + ":" + s;

    
    tempo = window.document.getElementById('relogio');
    tempo.innerHTML =  `Data e hora: ${datestring} `;
}
setInterval(Relogio,500)


// 16-05-2015 09:50