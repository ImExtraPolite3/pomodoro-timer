import sound from './sound/endsound.mp3';
let minutes = 4;
let seconds = 59;
let endSound = new Audio(sound);

function minutesTimer() {
  const minutes_dom = document.getElementById('minutes');

  if (minutes > -1) {
    minutes_dom.textContent = minutes--;
  }
}

function secondTimer() {
  const seconds_dom = document.getElementById('seconds');

  if (seconds > -1) {
    seconds_dom.textContent = seconds--;
  }

  if (minutes > -1 && seconds == -1) {
    seconds = 59;
  }

  if (minutes === -1 && seconds === -1) {
    endSound.play();
  }
}

function callShortBreak() {
  if (seconds == 59) {
    minutesTimer();
  }

  secondTimer();
}

export { callShortBreak };
