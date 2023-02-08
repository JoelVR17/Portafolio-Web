//  ? WAIT UNTIL DOCUMENT IS READY
window.onload = function () {
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
}

// ? Getting the current year and logging it to the console. 
var currentTime = new Date();
let year = currentTime.getFullYear();
document.getElementById('rights').innerHTML = year;