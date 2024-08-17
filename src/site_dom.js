import { callLongBreak } from './long_break_timer';
import { callPomodoro } from './porodoro_timer';
import { callShortBreak } from './short_break_timer';

let tab = 'pomodoro';
let stopPomodoro;
let stopShortBreak;
let stopLongBreak;
let seconds = 59;

function start() {
  const start = document.getElementById('pause-button');

  stopPomodoroTimer();
  stopShortTimer();
  stopLongTimer();
  start.textContent = 'start';
  start.setAttribute('id', 'start-button');
}

function pause() {
  const pause = document.getElementById('start-button');

  if (tab === 'pomodoro') {
    startPomodoroTimer();
  } else if (tab === 'short') {
    startShortTimer();
  } else if (tab === 'long') {
    startLongTimer();
  }
  pause.textContent = 'pause';
  pause.setAttribute('id', 'pause-button');
}

function startButton() {
  const start_pause_button = document.getElementById('start-button');

  start_pause_button.addEventListener('click', () => {
    if (start_pause_button.textContent === 'start') {
      pause();
    } else {
      start();
    }
  });
}

function changeActiveTab() {
  const button = document.querySelectorAll('#timer-buttons > button');

  button.forEach((each_button) => {
    each_button.addEventListener('click', () => {
      for (let i = 0; i < button.length; i++) {
        button[i].classList.remove('active-button');
        seconds = 59;
      }

      each_button.classList.add('active-button');
    });
  });
}

function changeToPomodoro() {
  const pomodoro_tab = document.getElementById('pomodoro-button');
  const timer = document.getElementById('timer');

  pomodoro_tab.addEventListener('click', () => {
    timer.textContent = '25:00';
    clearInterval(stopPomodoro);
    tab = 'pomodoro';
    start();
  });
}

function changeToShortBreak() {
  const short_break_tab = document.getElementById('short-break');
  const timer = document.getElementById('timer');

  short_break_tab.addEventListener('click', () => {
    timer.textContent = '05:00';
    clearInterval(stopShortBreak);
    tab = 'short';
    start();
  });
}

function changeToLongBreak() {
  const long_break_tab = document.getElementById('long-break');
  const timer = document.getElementById('timer');

  long_break_tab.addEventListener('click', () => {
    timer.textContent = '10:00';
    clearInterval(stopLongBreak);
    tab = 'long';
    start();
  });
}

function reset() {
  const reset_button = document.getElementById('reset-button');
  const timer = document.getElementById('timer');

  reset_button.addEventListener('click', () => {
    seconds = 59;

    if (tab === 'pomodoro') {
      timer.textContent = '25:00';
      clearInterval(stopPomodoro);
      start();
    } else if (tab === 'short') {
      timer.textContent = '05:00';
      clearInterval(stopShortBreak);
      start();
    } else if (tab === 'long') {
      timer.textContent = '10:00';
      clearInterval(stopLongBreak);
      start();
    }
  });
}

function startPomodoroTimer() {
  stopPomodoro = setInterval(function () {
    callPomodoro(24, seconds--);
  }, 1000);
}

function stopPomodoroTimer() {
  clearInterval(stopPomodoro);
}

function startShortTimer() {
  stopShortBreak = setInterval(function () {
    callShortBreak(4, seconds--);
  }, 1000);
}

function stopShortTimer() {
  clearInterval(stopShortBreak);
}

function startLongTimer() {
  stopLongBreak = setInterval(function () {
    callLongBreak(9, seconds--);
  }, 1000);
}

function stopLongTimer() {
  clearInterval(stopLongBreak);
}

export {
  startButton,
  changeActiveTab,
  changeToPomodoro,
  changeToShortBreak,
  changeToLongBreak,
  reset,
};
