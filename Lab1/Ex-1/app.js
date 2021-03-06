console.log('Welcome to data transmission');
document.getElementById('password').innerHTML = 'Enter your password below';

function login(){
    var userPassword = document.getElementById('password').innerHTML;
    var message = isPasswordValid(userPassword)? 'Correct' : 'Incorrect';
    console.log(message);
}

function isPasswordValid(password){
    return password === '123456'
}