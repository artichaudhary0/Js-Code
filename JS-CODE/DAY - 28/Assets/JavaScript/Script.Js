function updateClock() {
  const now = new Date();
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hours = now.getHours();

  const secondDegree = (second / 60) * 360 + 90;

  const minuteDegree = (minute / 60) * 360 + (second / 60) * 6 + 90;
  const hourDegree = (hours / 12) * 360 + (minute / 60) * 30 + 90;

  document.getElementById(
    "second"
  ).style.transform = `rotate(${secondDegree}deg)`;

  document.getElementById(
    "minute"
  ).style.transform = `rotate(${minuteDegree}deg)`;

  document.getElementById("hour").style.transform = `rotate(${hourDegree}deg)	`;
}

setInterval(updateClock, 1000);
