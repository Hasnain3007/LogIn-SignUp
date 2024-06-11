if (localStorage.getItem('flag') != true) {
    window.open('index.html')
} else {
    window.open('login.html')

}
document.write(`Assalamualikum And welcome sir ${localStorage.getItem('userName')} to your dashboard
`)