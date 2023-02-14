const countDown = () => {
  const countDate = new Date("February 14, 2023 05:30:00").getTime();
  const currentDate = new Date().getTime();
  const difference = countDate - currentDate;

  //   calc time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //   calc difference
  const textDay = Math.floor(difference / day);
  const textHour = Math.floor((difference % day) / hour);
  const textMinute = Math.floor((difference % hour) / minute);
  const textSecond = Math.floor((difference % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
};

setInterval(countDown, 1000);
