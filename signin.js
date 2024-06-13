// if (localStorage.getItem('flag') == true) {
//     window.location.href = 'signin.html'
// } else {
//     window.location.href = 'index.html'

// }
// document.write(`Assalamualikum And welcome sir ${localStorage.getItem('userName')} to your dashboard
// `)


// if (
//     localStorage.getItem("flag") == true) {
//     window.location.href = 'signin.html'

// } else {
//     window.location.href = 'index.html'

// }
var clear = document.getElementById('clear')
clear.addEventListener('click', function clear() {
    localStorage.clear();
    window.location.href = 'index.html'


})
document.getElementById('title').innerText = localStorage.getItem('userName')
// console.log(localStorage.getItem('userName'));