"use strict";

function timer() {
  //Timer
  var deadline = '2020-02-12';

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / (1000 * 60) % 60),
        // hours = Math.floor((t/(1000*60*60)));
    hours = Math.floor(t / (1000 * 60 * 60) % 24),
        days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'seconds': seconds,
      'minutes': minutes,
      'hours': hours,
      'days': days
    };
  }

  function setClock(id, endtime) {
    var timer = document.getElementById(id),
        seconds = timer.querySelector('.seconds'),
        minutes = timer.querySelector('.minutes'),
        hours = timer.querySelector('.hours'),
        days = timer.querySelector('.days'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      var t = getTimeRemaining(endtime);
      seconds.textContent = t.seconds;
      minutes.textContent = t.minutes;
      hours.textContent = t.hours;
      days.textContent = t.days;

      if (t.seconds < 10) {
        seconds.textContent = '0' + t.seconds;
      }

      if (t.minutes < 10) {
        minutes.textContent = '0' + t.minutes;
      }

      if (t.hours < 10) {
        hours.textContent = '0' + t.hours;
      }

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('timer', deadline);
}

module.exports = timer;