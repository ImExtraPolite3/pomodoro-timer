import { startLongBreak } from './long_break_timer';
import { startPorodoro } from './porodoro_timer';
import { startShortBreak } from './short_break_timer';

function changeToPomodoro() {
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');

  minutes.textContent = '25';
  seconds.textContent = '00';
}

function changeToShortBreak() {
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');

  minutes.textContent = '5';
  seconds.textContent = '00';
}

function changeToLongBreak() {
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');

  minutes.textContent = '10';
  seconds.textContent = '00';
}

function change() {
  const pomodoro_tab = document.getElementById('pomodoro-button');
  const short_break_tab = document.getElementById('short-break');
  const long_break_tab = document.getElementById('long-break');

  pomodoro_tab.addEventListener('click', () => {
    changeToPomodoro();
    startPorodoro();
    clearInterval(14);
  });

  short_break_tab.addEventListener('click', () => {
    changeToShortBreak();
    startShortBreak();
    clearInterval(14);
  });

  long_break_tab.addEventListener('click', () => {
    changeToLongBreak();
    startLongBreak();
    clearInterval(14);
  });
}

export { change };
