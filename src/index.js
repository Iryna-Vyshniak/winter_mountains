const refs = {
  man: document.querySelector('#man'),
  text: document.querySelector('#text'),
  mountainLeft: document.querySelector('#mountain_left'),
  mountainRight: document.querySelector('#mountain_right'),
  clouds1: document.querySelector('#clouds_1'),
  clouds2: document.querySelector('#clouds_2'),
  clouds3: document.querySelector('#clouds_3'),
  clouds4: document.querySelector('#clouds_4'),
};

window.addEventListener('scroll', parallax);

function parallax(e) {
  let value = scrollY;
  refs.mountainLeft.style.left = `-${value / 0.7}px`;
  refs.clouds2.style.left = `-${value * 2}px`;
  refs.mountainRight.style.left = `${value / 0.7}px`;
  refs.clouds1.style.left = `${value * 2}px`;
  refs.text.style.bottom = `-${value}px`;
  refs.man.style.height = `${window.innerHeight - value}px`;
  refs.clouds3.style.right = `${value * 2}px`;
  refs.clouds4.style.right = `${value * 2}px`;
}

// AUDIO
const soundButton = document.querySelector('.sound');
const audio = document.querySelector('.audio');

soundButton.addEventListener('click', e => {
  soundButton.classList.toggle('paused');
  audio.paused ? audio.play() : audio.pause();
});

// when focusing on this an open page in the browser
window.onfocus = function () {
  soundButton.classList.contains('paused') ? audio.pause() : audio.play();
};

//when we open a new tab in the browser - the audio is turned off
window.onblur = function () {
  audio.pause();
};
