document.getElementById("n").addEventListener('input', inputSum);

var counter = 0;

function inputSum(){
  var inputNumber = parseInt(document.getElementById("n").value);
  sum(inputNumber);
  /*
  var checknan = new Boolean(false);
  if(isNaN(document.getElementById("n").value)){
    checknan = true;
  }else{
    checknan = false;
  }
  sum(inputNumber,checknan);
  */
}

/*function sum(n,checknan) {
  if (typeof n === 'undefined ') return 'n is undefined ';
  else {
    if(checknan){
      var sum = counter;
      for (var i = 1; i <= n; i++) {
        sum += 1;
      }
      return sum;
    }else
    {
      document.getElementById('counter').innerHTML = 'not a number';
    }
  }
}
*/

function sum(n){
  if(typeof n === 'undefined') return 'n is undefined';
  else{
    var sum = counter; for (var i = 1; i <= n; i++){
      sum += 1;
    }
    return sum;
  }
}

function printValue(divId, value) {
  document.getElementById(divId).innerHTML = value;
}
printValue('counter', 0);

//document.getElementById('inc').addEventListener('click',increment);

document.getElementById('inc').addEventListener('click', checkNaN);

function checkNaN(){
  if(isNaN(document.getElementById("n").value))
  {
    document.getElementById('counter').innerHTML = 'not a number';
  }else{
    increment();
  }
}

function increment() {
  counter++;
  printValue('counter', counter);
}