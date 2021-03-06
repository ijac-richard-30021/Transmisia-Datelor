document.getElementById('n').addEventListener('input', inputSum);

var counter = n.value;

function printValue(divId,value){
  document.getElementById(divId).innerHTML = value;
}
printValue("counter",0);

  document.getElementById("inc").addEventListener("click",increment);
  document.getElementById("dec").addEventListener("click",decrement);

function increment(){
  if(counter < 10) {
    counter++;
    printValue("counter", counter);
  }
}

function decrement(){
  if(counter > 0){
    counter--;
    printValue("counter",counter);
  }
}

function inputSum() {
  var inputNumber = parseInt(document.getElementById('n').value);
  sum(inputNumber);
}

function sum(n) {
  if (typeof n === 'undefined ') return 'n is undefined ';
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
