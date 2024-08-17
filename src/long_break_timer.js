import sound from './sound/endsound.mp3';
let endSound = new Audio(sound);

function callLongBreak(minutes, seconds) {
  const timer = document.getElementById('timer');
  let long_timer = new Date();

  if (timer.textContent !== '00:00') {
    long_timer.setMinutes(minutes, seconds--);
    let new_long_timer = long_timer.toTimeString();
    timer.textContent = new_long_timer.substring(3, 8);
  } else {
    endSound.play();
  }
}

export { callLongBreak };
