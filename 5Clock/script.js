var center = document.querySelectorAll(".center")[0];
var second = document.querySelectorAll(".second > div");
var minute = document.querySelectorAll(".minute > div");
var hour = document.querySelectorAll(".hour > div");

setInterval(() => {
  var curTime = new Date();

  center.innerHTML = curTime.getHours() < 12 ? "AM" : "PM";

  var curSecond = addZeroBefore(curTime.getSeconds());
  second.forEach((x) => (x.innerHTML = curSecond));

  var curMinute = addZeroBefore(curTime.getMinutes());
  minute.forEach((x) => (x.innerHTML = curMinute));

  var curHour = addZeroBefore(curTime.getHours() % 12 || 12);
  hour.forEach((x) => (x.innerHTML = curHour));
}, 1000);

var addZeroBefore = function (n) {
  return (n < 10 ? "0" : "") + n;
};

window.onload = () => {
  var curTime = new Date();

  center.innerHTML = curTime.getHours() < 12 ? "AM" : "PM";

  var curSecond = addZeroBefore(curTime.getSeconds());
  second.forEach((x) => (x.innerHTML = curSecond));

  var curMinute = addZeroBefore(curTime.getMinutes());
  minute.forEach((x) => (x.innerHTML = curMinute));

  var curHour = addZeroBefore(curTime.getHours() % 12 || 12);
  hour.forEach((x) => (x.innerHTML = curHour));

  var delay = - curHour * 3600 - curMinute * 60 - curSecond;
  document.querySelector(".clock").style.cssText = `--delay: ${delay}s`;
};