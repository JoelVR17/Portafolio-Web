// ? PROGRESS BAR
let progressbar = document.querySelector('.progressbar');

// * FUNCTION MEASURE PROGRESS BAR
function ScrollProgressBar() {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;

    let windowsHeight = scrollHeight - clientHeight;
    let percentage = scrollTop / windowsHeight * 100;

    progressbar.style.width = percentage + '%';
}

// ? Listening for the scroll event and then calling the function `ScrollProgressBar` 
window.addEventListener('scroll', ScrollProgressBar);