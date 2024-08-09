// import { callLongBreak } from './long_break_timer';
// import { callPomodoro } from './porodoro_timer';
// import { callShortBreak } from './short_break_timer';

function changeButton() {
  const start_pause_button = document.getElementById('start-button');

  start_pause_button.addEventListener('click', () => {
    if ((start_pause_button.textContent = 'start')) {
      start_pause_button.textContent = 'pause';
      start_pause_button.removeAttribute('id');
      start_pause_button.setAttribute('id', 'pause-button');
    }
    // else {
    //   start_pause_button.textContent = 'start';
    //   start_pause_button.removeAttribute('id');
    //   start_pause_button.setAttribute('id', 'start-button');
    // }
  });
}

export { changeButton };
