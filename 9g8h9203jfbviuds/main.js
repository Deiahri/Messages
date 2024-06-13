
var target = (new Date(2024, 5, 13, 12+5)).getTime();
var now = Date.now();
var difference = 0;
var timeElement = document.getElementById('time');
var messageElement = document.getElementById('message');
var message2Element = document.getElementById('message2');
var body = document.getElementsByTagName('body')[0];


let loop = setInterval(() => {
    now = Date.now();
    difference = target - now;
    check();
}, 1000);

function check() {
    if(difference < 0) {
        messageElement.innerHTML = 'TIME SINCE LIBERATION!'
        message2Element.innerHTML = 'Congratulations Soldier';
        body.classList = 'yay';
    }
    difference = Math.abs(difference);
    let hours = Math.floor((difference)/(1000*60*60));
    let minutes = Math.floor((difference-hours*(1000*60*60))/(1000*60));
    let seconds = Math.floor((difference-hours*(1000*60*60)-minutes*(1000*60))/(1000));
    timeElement.innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

