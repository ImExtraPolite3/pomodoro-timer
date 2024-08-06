let minutes = 24;
let seconds = 59;

function minutesTimer() {
  const minutes_dom = document.getElementById('minutes');

  minutes_dom.textContent = minutes--;
}

function secondTimer() {
  const seconds_dom = document.getElementById('seconds');
  const minutes_dom = document.getElementById('minutes');

  if (minutes > -2) {
    if (seconds == 59) {
      minutesTimer();
    }

    seconds_dom.textContent = seconds--;

    if (seconds < 0) {
      seconds = 59;
    }
  } else if (minutes === -1) {
    minutes_dom.textContent = '25';
    seconds_dom.textContent = '00';
  }
}

function startPorodoro() {
  const start_button = document.getElementById('start-button');

  start_button.addEventListener('click', () => {
    setInterval(secondTimer, 1000);
  });
}

export { minutesTimer, secondTimer, startPorodoro };
