window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return; //stop the function
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    
});


function removeTrasition(e) {
    if (e.propertyName !== 'transform') return; // skip it if it not transform
    this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTrasition));  


function playSoundAfterClicking() {
    let qqww = document.getElementById('key1');
    key1.addEventListener('click', )
    console.log(qqww);
};

//Run
playSoundAfterClicking();