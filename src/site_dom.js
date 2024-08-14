import { callLongBreak } from './long_break_timer';
import { callPomodoro } from './porodoro_timer';
import { callShortBreak } from './short_break_timer';

let tab = 'pomodoro';
let stopPomodoro;
let stopShortBreak;
let stopLongBreak;

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
        if (tab === 'pomodoro') {
          clearInterval(stopPomodoro);
        } else if (tab === 'short') {
          clearInterval(stopShortBreak);
        } else if (tab === 'long') {
          clearInterval(stopLongBreak);
        }
      }

      each_button.classList.add('active-button');
    });
  });
}

function changeToPomodoro() {
  const pomodoro_tab = document.getElementById('pomodoro-button');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');

  pomodoro_tab.addEventListener('click', () => {
    minutes.textContent = '25';
    seconds.textContent = '00';
    tab = 'pomodoro';
    start();
  });
}

function changeToShortBreak() {
  const short_break_tab = document.getElementById('short-break');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');

  short_break_tab.addEventListener('click', () => {
    minutes.textContent = '5';
    seconds.textContent = '00';
    tab = 'short';
    start();
  });
}

function changeToLongBreak() {
  const long_break_tab = document.getElementById('long-break');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');

  long_break_tab.addEventListener('click', () => {
    minutes.textContent = '10';
    seconds.textContent = '00';
    tab = 'long';
    start();
  });
}

function startPomodoroTimer() {
  stopPomodoro = setInterval(callPomodoro, 1000);
}

function stopPomodoroTimer() {
  clearInterval(stopPomodoro);
}

function startShortTimer() {
  stopShortBreak = setInterval(callShortBreak, 1000);
}

function stopShortTimer() {
  clearInterval(stopShortBreak);
}

function startLongTimer() {
  stopLongBreak = setInterval(callLongBreak, 1000);
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
};
