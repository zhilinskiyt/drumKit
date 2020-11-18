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

function startSound() {
    audio.forEach(sound => {
    if(event.target.parentElement.getAttribute('data-key') === sound.getAttribute('data-key')) {
    sound.play();
    event.target.parentElement.classList.add('playing');
    sound.currentTime = 0;
    }
    });
   };


const audio = document.querySelectorAll('audio');
console.log(audio);
const keys = document.querySelectorAll('.key');
console.log(keys);
let keyslength = keys.length;
console.log(keyslength)
let audiolength = audio.length;
console.log(audio[1]);


keys.forEach(key => key.addEventListener('transitionend', removeTrasition));  
keys.forEach(key => key.addEventListener('click', startSound));

//Mouseclick event

const soundaftermouseclick = () => {
    const mouseclick = document.querySelectorAll('.key');
    const audioplay = document.querySelector('.audio');
    // mouseclick.forEach(key => ('click', console.log('hi')));
    };


//run
soundaftermouseclick();