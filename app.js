const kick = document.getElementById('kick');
const kickSoundSrc = './sounds/kick.mp3';

const snare = document.getElementById('snare');
const snareSoundSrc = './sounds/snare.mp3';

const hihat = document.getElementById('hihat');
const hihatSoundSrc = './sounds/hihat.mp3';

kick.addEventListener('click', () => {
  playSound(kickSoundSrc);
});

snare.addEventListener('click', () => {
  playSound(snareSoundSrc);
});

hihat.addEventListener('click', () => {
  playSound(hihatSoundSrc);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'a') {
    playSound(kickSoundSrc);
    flashButton(kick);
  } else if (event.key === 's') {
    playSound(snareSoundSrc);
    flashButton(snare);
  } else if (event.key === 'd') {
    playSound(hihatSoundSrc);
    flashButton(hihat);
  }
});

function playSound(src) {
  const sound = new Audio(src);
  sound.play();
}

function flashButton(button) {
  button.classList.add('active');
  setTimeout(() => {
    button.classList.remove('active');
  }, 100);
}
