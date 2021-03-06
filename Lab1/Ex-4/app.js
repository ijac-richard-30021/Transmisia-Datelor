document.getElementById('submit').addEventListener('click', getValue);

function getValue(){
    if(isNaN(document.getElementById("n").value))
    {
        document.getElementById("fibonacciSeries").innerHTML = "Not a number";
    }else {
        var x = document.getElementById("n").value;
        getFibonacci(parseInt(x));
        console.log(x);
        console.log(typeof x);
    }
}

function getFibonacci(n){
    var fibonacci = [];
    fibonacci[0] = 1;
    fibonacci[1] = 1;
    //console.log(n);
    //var i = 0;
    for(var i = 2; i <= n; i++){
        fibonacci[i] = fibonacci[i-1]+fibonacci[i-2];
    }
    printFibonacci(fibonacci);
}

function printFibonacci(fibonacci){
    document.getElementById("fibonacciSeries").innerHTML = fibonacci[0];
    for(var i = 1; i < fibonacci.length; i++){
        document.getElementById("fibonacciSeries").innerHTML += ", " + fibonacci[i];
        //console.log(fibonacci[i]);
    }
}