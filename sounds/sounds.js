const path = '../sounds/'

const _soundsJSObjects = {
    BNA: new Audio(path+'BNA.mp3')
};

function play(soundName) {
    try {
        _soundsJSObjects[soundName].load();
        _soundsJSObjects[soundName].play();
    } catch {
        console.log(soundName, 'does not exist');
    }
}

function stop(soundName) {
    try {
        _soundsJSObjects[soundName].pause();
    } catch {
        console.log(soundName, 'does not exist');
    }
}

