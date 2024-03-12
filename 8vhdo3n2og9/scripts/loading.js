let loading_screen = document.getElementById('my_loading_screen');
let loading_bar_value = document.getElementById('loading_bar_value');
let loading_bar = document.getElementById('loading_bar');
let loading_text = document.getElementById('loading_text');
let loading_body = document.getElementById('my_loading_screen');
let start_screen = document.getElementById('start_screen');
let start_screen_text = document.getElementById('start_screen_text');
let love_screen = document.getElementById('love_screen');

let body = document.getElementsByTagName('body')[0];

let rand_loading_values = [0, 0, 0, 0, 0, 0, 0, 0, 10, 40, 40, 40, 40, 40, 41, 41, 41, 41, 85, 94, 96, 97, 97, 98, 98, 
    99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 100];
let loading_delay = 100;

function simulate_loading(index = 0) {
    setTimeout(() => {
        loading_bar_value.style.width = `${rand_loading_values[index]}%`;
        if(index >= rand_loading_values.length - 1) {
            loading_text.innerHTML = 'Click to Continue';
            loading_body.onclick = () => {
                playMusic();
                hideFade(loading_screen);
                setTimeout(() => {
                    showFade(start_screen);
                }, 1500);
            }
        } else {
            simulate_loading(index+1);
        }
    }, loading_delay);    
}

simulate_loading();
blinkElement(start_screen_text, 1000);
start_screen.onclick = () => {
    clearEffect(start_screen_text);
    setTimeout(() => {
        playSound('enter ping');
        music.volume = 0.6;
        hideFade(start_screen);
        setTimeout( () => {
            showFade(love_screen);
            setTimeout(() => {
                // playSound('enter ping');
                // soundOnEnded('enter ping', () => { showFade(document.getElementById('get_name_section')); music.volume = 0.5; })
                playSound('intro narration');
                soundOnEnded('intro narration', () => { showFade(document.getElementById('get_name_section')); music.volume = 0.5; })
            }, 500)
        }, 1500);
    }, 500);
}

var username = null;
function getUserNameAndGo() {
    username = `${document.getElementById('name_input').value}`.trim();
    hideFade(document.getElementById('get_name_section'));
}

