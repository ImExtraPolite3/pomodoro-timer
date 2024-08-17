import sound from './sound/endsound.mp3';
// let minutes = 24;
// let seconds = 59;
let endSound = new Audio(sound);

function callPomodoro(minutes, seconds) {
  const timer = document.getElementById('timer');
  let pomodoro = new Date();

  if (timer.textContent !== '00:00') {
    pomodoro.setMinutes(minutes, seconds--);
    let new_pomodoro = pomodoro.toTimeString();
    timer.textContent = new_pomodoro.substring(3, 8);
  } else {
    endSound.play();
  }
}

export { callPomodoro };
