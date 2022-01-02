
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