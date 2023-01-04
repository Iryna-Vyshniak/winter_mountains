const refs = {
  man: document.querySelector('#man'),
  text: document.querySelector('#text'),
  mountainLeft: document.querySelector('#mountain_left'),
  mountainRight: document.querySelector('#mountain_right'),
  clouds1: document.querySelector('#clouds_1'),
  clouds2: document.querySelector('#clouds_2'),
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
}
