var music = new Audio('./music/First date.mp3');
music.load();
music.volume = 0.9;
music.loop = true;

const soundLibrary = {
    'music': music,
    'enter ping': new Audio('./music/sfx/enter ping.ogg'),
    'intro narration': new Audio('./music/narration/dinner for two intro processed.ogg'),
    'nar2': new Audio('./music/narration/getinfonar.mp3'),
    'message ping': new Audio('./music/sfx/message ping.ogg'),
    'message send': new Audio('./music/sfx/message send.ogg'),
    'next': new Audio('./music/sfx/next.ogg'),
    'prev': new Audio('./music/sfx/prev.ogg'),
    'match': new Audio('./music/sfx/match.ogg'),
    'no match': new Audio('./music/sfx/no match.ogg'),
    'new match': new Audio('./music/sfx/new match.ogg'),
    'isaac': new Audio('./music/audio messages/confy.mp3'),
    'confy': new Audio('./music/audio messages/confy.mp3'),
    'gui': new Audio('./music/audio messages/gui.mp3'),
    'junda': new Audio('./music/audio messages/junda.mp3')
}

function playMusic() {
    music.play();
}

function playSound(soundName, priority=false) {
    if(!soundLibrary[soundName]) {
        console.log('Cannot play', soundName);
        return;
    }
    
    soundLibrary[soundName].load();
    if(priority) {
        soundOnEnded(soundName, () => {
            music.volume = 0.9;
        });
        music.volume = 0.2;
    }

    soundLibrary[soundName].removeAttribute('onended');
    soundLibrary[soundName].play();
    
}

function pauseSound(soundName) {
    if(!soundLibrary[soundName]) {
        console.log('Cannot pause', soundName);
        return;
    }
    soundLibrary[soundName].pause();
}

function soundOnEnded(soundName, func) {
    if(!soundLibrary[soundName]) {
        console.log('Cannot onSoundFinish', soundName);
        return;
    }
    soundLibrary[soundName].onended = func;
}
