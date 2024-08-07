let minutes = 24;
let seconds = 59;

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
}

function check() {
  if (seconds == 59) {
    minutesTimer();
  }

  secondTimer();
}

function startPorodoro() {
  const start_button = document.getElementById('start-button');

  start_button.addEventListener('click', () => {
    setInterval(check, 1000);
  });
}

export { startPorodoro };
