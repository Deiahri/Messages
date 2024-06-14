
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
    let remainder = difference;
    let years = Math.floor(remainder/(365*24*100*60*60));
    remainder-=years*(365*24*1000*60*60);
    let days = Math.floor((remainder/(24*1000*60*60)));
    remainder-=days*(24*1000*60*60);
    let hours = Math.floor((remainder)/(1000*60*60));
    remainder-=hours*(1000*60*60);
    let minutes = Math.floor((remainder)/(1000*60));
    remainder-=minutes*(1000*60);
    let seconds = Math.floor((remainder)/(1000));
    timeElement.innerHTML = `${String(years).padStart(2, '0')}:${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

