let currentSelectedTip = -1;
let confirmTipButton = document.getElementById('confirmTipButton');
function selectTip(val) {
    currentSelectedTip = val;
    if(val >= 1) {
        confirmTipButton.classList.remove('fullHide');
    } else {
        confirmTipButton.classList.add('fullHide');
    }
    for(let i = 0; i <= 3; i++) {
        let currentElement = document.getElementById('tip'+i)
        if(i==val) {
            currentElement.classList.add('selected');
        } else {
            currentElement.classList.remove('selected');
        }
    }
    if(val == 0) {
        play('BNA');
    } else {
        stop('BNA');
    }
}

function confirmTip() {
    confirmTipButton.classList.add('fullHide');
    if(currentSelectedTip >= 1) { 
        if(currentSelectedTip == 1) {
            tipSection.innerHTML = 'Cheap Nigga';
        } else if (currentSelectedTip == 2) {
            tipSection.innerHTML = 'Transaction Complete';
        } else if (currentSelectedTip == 3) {
            tipSection.innerHTML = 'You just got robbed nigga';
        }
        setTimeout(()=> {
            tipSection.innerHTML = '<h1 style="font-size: 70px; font-weight: bold">Thank You!</h1>';
        }, 1000);
    }
}