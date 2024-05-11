let body = document.getElementById('body');
let ratingSlider = document.getElementById('ratingSlider');
let blocker = document.getElementById('blocker');
let ratingSection = document.getElementById('ratingSection');
let tipSection = document.getElementById('tipSection');

function fixBias() {
    let val = ratingSlider.value;
    if(val == 10) {
        console.log('nice');
    } else {
        console.log('boo');
    }
}


let ratingResponseContainer = document.getElementById('ratingResponseContainer');
let ratingResponse = document.getElementById('ratingResponse');

let sliderThing = 0;
ratingSlider.oninput = () => {
    clearTimeout(sliderThing);
    sliderThing = setTimeout(() => {
        let showTime = 1000;
        ratingSlider.onchange = null;
        ratingResponseContainer.classList.remove('fullHide');
        if(ratingSlider.value >= 10) {
            ratingResponse.innerHTML = 'Thank you for your honesty';
            showTime = 2000;
        } else if (ratingSlider.value >= 8) {
            ratingResponse.innerHTML = 'I\'m happy you\'re happy';
            setTimeout(() => {
                ratingResponse.innerHTML = 'But I think your finger slipped';
            }, 2000);
            showTime = 4000;
        } else if (ratingSlider.value >= 6) {
            adjSpeed = 300;
            ratingResponse.innerHTML = 'uhhh...';
            setTimeout(() => {
                ratingResponse.innerHTML = 'I think you made a mistake';
            }, 1500);
            showTime = 3000;
        } else if (ratingSlider.value >= 4) {
            adjSpeed = 200;
            ratingResponse.innerHTML = 'This is on a scale of 1-10.';
            setTimeout(() => {
                ratingResponse.innerHTML = 'Allow me to fix your rating';
            }, 2000);
            showTime = 3000;
        } else if (ratingSlider.value >= 2) {
            adjSpeed = 100;
            ratingResponse.innerHTML = 'There must be a mistake.';
            setTimeout(() => {
                ratingResponse.innerHTML = 'Allow me to fix your rating';
            }, 2000);
            showTime = 3000;
        } else if (ratingSlider.value >= 2) {
            adjSpeed = 120;
            ratingResponse.innerHTML = 'There must be a mistake.';
            setTimeout(() => {
                ratingResponse.innerHTML = 'Allow me to fix your rating';
            }, 2000);
            showTime = 3000;
        } else if (ratingSlider.value >= 0) {
            adjSpeed = 70;
            ratingResponse.innerHTML = '...';
            setTimeout(() => {
                ratingResponse.innerHTML = 'Bitch I know my worth';
            }, 2000);
            showTime = 3000;
        } else {
            adjSpeed = 10;
            ratingResponse.innerHTML = '...';
            setTimeout(() => {
                ratingResponse.innerHTML = 'Not sure how you did this';
            }, 2000);
            showTime = 3000;
        }
        setTimeout(() => {
            ratingResponseContainer.classList.remove('fadeHide');
            blocker.classList.remove('fullHide');
            setTimeout(() => {
                ratingResponseContainer.classList.add('fadeHide');
                body.disabled = true;
                current = ratingSlider.value;
                fixRating()
            }, showTime);
        }, 500);
    }, 1000);
}

let score = document.getElementById('score');
setInterval(() => {
    score.innerHTML = ratingSlider.value;
}, 50);

body.style = 'overflow: hidden';

let adjSpeed = 400;  // in ms
let current = 0;
let fixIntervalCode = 0;
function fixRating() {
    fixIntervalCode = setInterval(() => {
        if(Number(current) < 10) {
            current = Number(current)+1;
            ratingSlider.value = current;
        } else {
            clearInterval(fixIntervalCode);
            setTimeout(showTipScreen, 1000);
        }
    }, adjSpeed);
}

function showTipScreen() {
    ratingSection.classList.add('fadeHide');
    setTimeout(() => { 
        blocker.classList.add('fullHide');
        ratingSection.classList.add('fullHide');
        tipSection.classList.remove('fullHide');
        setTimeout(()=> {
            tipSection.classList.remove('fadeHide');
        }, 300);
    }, 600);
}
