//  getting signup values


var userName = document.getElementById('getU')
var email = document.getElementById('getE')
var password = document.getElementById('getP')
var signup = document.getElementById('signUp')


// setting fuction for signup and localStorage

function signUp() {

    var user = userName.value
    var em = email.value
    var pass = password.value
    // var flag = false

    localStorage.setItem('userName', user)
    localStorage.setItem('email', em)
    localStorage.setItem('password', pass)
    // setting flag
    localStorage.setItem('flag', false)

    window.location.href = 'index.html'

}
signup.addEventListener('click', signUp)

