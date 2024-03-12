function hideFade(element) {
    element.classList.add('fadeHide');
    setTimeout(() => {
        element.classList.add('fullHide');
    }, 1000);
}

function showFade(element) {
    element.classList.add('fadeHide');
    element.classList.remove('fullHide');
    setTimeout(() => {
        element.classList.remove('fadeHide');
    }, 50);
}

function blinkElement(element, delay) {
    element.classList.add('hideable');
    element.setAttribute('timeOutID', setInterval(() => {
        element.classList.add('fadeHide');
        setTimeout(() => {
            element.classList.remove('fadeHide');
        }, delay);
    }, delay*2))
}

function clearEffect(element) {
    clearInterval(element.getAttribute('timeOutID'));
}
