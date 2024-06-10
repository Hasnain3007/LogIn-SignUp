//  getting signup values


var uemail = document.getElementById('uE')
var upassword = document.getElementById('uP')
var login = document.getElementById('logIn')



// getting and setting fuction or email password from loacl storage

function logIn() {

    var uE = uemail.value
    var uP = upassword.value

    var rightEmail = localStorage.getItem('email')
    var rightPass = localStorage.getItem('password')
    var checkflag = localStorage.getItem('flag')
    if (uE == rightEmail) {
        if (uP == rightPass) {
            checkflag = true
            localStorage.setItem('flag', checkflag)
            alert('login successfull')
            window.location.href = 'dashboard.html'

        } else {
            alert('Wrong Password !')
        }

    } else {
        alert('Wrong Email !')
    }


}
login.addEventListener('click', logIn)

