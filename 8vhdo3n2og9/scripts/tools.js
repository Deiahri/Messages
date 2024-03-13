const pop_up = document.getElementById('pop_up');
const pop_up_image = document.getElementById('pop_up_image');

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

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function setPopupImage(url) {
    pop_up_image.style.content = `url('${url}')`;
}

function hidePopup() {
    hideFade(pop_up);
}

function showPopup() {
    showFade(pop_up);
}

// setTimeout(setPopupImage.bind(null, './images/catrunninggif.gif'), 1000);
