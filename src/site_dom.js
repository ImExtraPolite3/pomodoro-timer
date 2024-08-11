function startButton() {
  const start_pause_button = document.getElementById('start-button');

  start_pause_button.addEventListener('click', () => {
    if (start_pause_button.textContent === 'start') {
      start_pause_button.textContent = 'pause';
      start_pause_button.setAttribute('id', 'pause-button');
    } else {
      start_pause_button.textContent = 'start';
      start_pause_button.setAttribute('id', 'start-button');
    }
  });
}

function changeActiveTab() {
  const button = document.querySelectorAll('#timer-buttons > button');

  button.forEach((each_button) => {
    each_button.addEventListener('click', () => {
      for (let i = 0; i < button.length; i++) {
        button[i].classList.remove('active-button');
      }

      each_button.classList.add('active-button');
    });
  });
}

export { startButton, changeActiveTab };
