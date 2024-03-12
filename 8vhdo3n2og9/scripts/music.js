var music = new Audio('./music/First date.mp3');
music.load();
music.volume = 1;
music.loop = true;

const soundLibrary = {
    'music': music,
    'enter ping': new Audio('./music/sfx/enter ping.ogg'),
    'intro narration': new Audio('./music/narration/dinner for two intro processed.ogg')
}

function playMusic() {
    music.play();
}

function playSound(soundName) {
    if(!soundLibrary[soundName]) {
        console.log('Cannot play', soundName);
    }
    soundLibrary[soundName].play();
}

function pauseSound(soundName) {
    if(!soundLibrary[soundName]) {
        console.log('Cannot pause', soundName);
    }
    soundLibrary[soundName].pause();
}

function soundOnEnded(soundName, func) {
    if(!soundLibrary[soundName]) {
        console.log('Cannot onSoundFinish', soundName);
    }
    soundLibrary[soundName].onended = func;
}
