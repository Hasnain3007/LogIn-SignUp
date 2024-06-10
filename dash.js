if (localStorage.getItem('flag') != true) {
    window.location.href = 'index.html'
} else {
    window.location.href = 'login.html'

}
document.write(`Assalamualikum And welcome sir ${localStorage.getItem('userName')} to your dashboard`)