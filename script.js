let second = 20;
let minute = 12;
let hour = 5;
let day = 30;

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

Date.prototype.addDays = function (day) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + day);
  return date;
};

Date.prototype.addHours = function (hour, minute, second) {
  this.setTime(
    this.getTime() + hour * 60 * 60 * 1000 + minute * 60 * 1000 + second * 1000
  );
  return this;
};

var date = new Date();

let dayadded = date.addDays(day);
let dayaddedlast = dayadded.addHours(hour, minute, second);

let text = `
<h6 id="time" class="text-dark mt-3">
Giveaway Ends On ${days[dayaddedlast.getDay()]}, ${dayaddedlast.getDay()} ${
  monthNames[dayaddedlast.getMonth()]
} ${dayaddedlast.getFullYear()} ${dayaddedlast.getHours()} ${dayaddedlast.getHours()}:${dayaddedlast.getMinutes()}
</h6>
`;

document.getElementById("time").insertAdjacentHTML("beforeend", text);

var dsecond = document.getElementById("second");
var dminute = document.getElementById("minute");
var dhour = document.getElementById("hour");
var dday = document.getElementById("day");

dsecond.innerText = second;
dminute.innerText = minute;
dhour.innerText = hour;
dday.innerText = day;

const count = setInterval(countdown, 1000);

function countdown() {
  if (second < 10 && 0 <= second) {
    dsecond.innerText = display(second);
  } else {
    dsecond.innerText = second;
  }
  if (second == 59) {
    minute--;
    dminute.innerText = minute;
  }
  if (second == 59 && minute == 59) {
    hour--;
    dhour.innerText = hour;
  }
  if (second == 59 && minute == 59 && hour == 23) {
    day--;
    dday.innerText = day;
    if (day == -1) {
      alert("time is up");
      dsecond.innerText = 0;
      dminute.innerText = 0;
      dhour.innerText = 0;
      dday.innerText = 0;
      clearInterval(count);
    }
  }

  second--;

  if (second == -1) {
    second = 59;
  }

  if (minute == 0) {
    minute = 60;
  }

  if (hour == 0) {
    hour = 24;
  }
}

function display(value) {
  value = "0" + value;
  return value;
}
