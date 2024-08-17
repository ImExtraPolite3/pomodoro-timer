import sound from './sound/endsound.mp3';
// let minutes = 4;
// let seconds = 59;
let endSound = new Audio(sound);

function callShortBreak(minutes, seconds) {
  const timer = document.getElementById('timer');
  let short_timer = new Date();

  if (timer.textContent !== '00:00') {
    short_timer.setMinutes(minutes, seconds--);
    let new_short_timer = short_timer.toTimeString();
    timer.textContent = new_short_timer.substring(3, 8);
  } else {
    endSound.play();
  }
}

export { callShortBreak };
