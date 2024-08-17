export default function check() {
  const timer = new Date();
  const check = document.getElementById('check');

  setInterval(function () {
    let minutes = 24;
    let seconds = 60;

    timer.setUTCMinutes(minutes, seconds);

    // check.textContent = timer.getUTCMinutes();
    check.textContent = timer.getUTCSeconds();

    seconds--;
  }, 1000);
}
