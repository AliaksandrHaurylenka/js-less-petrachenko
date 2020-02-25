(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var tabs = require('../parts/tab.js');
  var timer = require('../parts/timer.js');
  var calc = require('../parts/calc.js');
  var slider = require('../parts/slider.js');
  var modal = require('../parts/modal.js');
  var form = require('../parts/form.js');

  tabs();
  timer();
  calc();
  slider();
  modal();
  form();
});
},{"../parts/calc.js":2,"../parts/form.js":3,"../parts/modal.js":4,"../parts/slider.js":5,"../parts/tab.js":6,"../parts/timer.js":7}],2:[function(require,module,exports){
"use strict";

function calc() {
  //Calc
  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      plays = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;
  totalValue.innerHTML = 0;
  persons.addEventListener('change', function () {
    personsSum = +this.value; // console.log(personsSum);

    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  restDays.addEventListener('change', function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (persons.value == '' || restDays.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  plays.addEventListener('change', function () {
    if (persons.value == '' || restDays.value == '') {
      totalValue.innerHTML = 0;
    } else {
      var a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
}

module.exports = calc;
},{}],3:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function form() {
  //Form
  var SubmitForm =
  /*#__PURE__*/
  function () {
    function SubmitForm(cssOrIdForm) {
      _classCallCheck(this, SubmitForm);

      this.loading = 'Загружаю...';
      this.success = "Спасибо! Мы с вами скоро свяжемся.";
      this.failure = "Что-то пошло не так!";
      this.form = document.querySelector(cssOrIdForm);
      this.input = this.form.getElementsByTagName('input');
      this.statusMessage = document.createElement('div');
      this.statusMessage.classList.add('status');
      this.form.appendChild(this.statusMessage);
      this.form.onsubmit = this.toSend.bind(this);
      this.request = new XMLHttpRequest();
      this.request.onreadystatechange = this.message.bind(this);
    }
    /**
     * Отправка сообщения
     */


    _createClass(SubmitForm, [{
      key: "toSend",
      value: function toSend() {
        event.preventDefault();
        this.requestJson(); // this.requestFormData();

        this.message();
        this.inputClear();
      } //Отправка формы в json формате

    }, {
      key: "requestJson",
      value: function requestJson() {
        // let request = new XMLHttpRequest();
        this.request.open('POST', 'server.php');
        this.request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        var formData = new FormData(this.form);
        var obj = {};
        formData.forEach(function (value, key) {
          obj[key] = value;
        });
        var json = JSON.stringify(obj);
        this.request.send(json);
      } //Отправка формы в обычном формате

    }, {
      key: "requestFormData",
      value: function requestFormData() {
        // let request = new XMLHttpRequest();
        this.request.open('POST', 'server.php');
        this.request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        var formData = new FormData(this.form);
        this.request.send(formData);
      }
      /**
       * Вывод сообщения при отправке в зависимости от статуса
       */

    }, {
      key: "message",
      value: function message() {
        if (this.request.readyState < 4) {
          this.statusMessage.innerHTML = this.loading;
        } else if (this.request.readyState === 4 && this.request.status == 200) {
          this.statusMessage.innerHTML = this.success;
        } else {
          this.statusMessage.innerHTML = this.failure;
        }
      }
      /**
       * Очистка полей после отправки
       */

    }, {
      key: "inputClear",
      value: function inputClear() {
        for (var i = 0; i < this.input.length; i++) {
          this.input[i].value = '';
        }
      }
    }]);

    return SubmitForm;
  }();

  var formModal = new SubmitForm('.main-form');
  var formContact = new SubmitForm('#form');
}

module.exports = form;
},{}],4:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function modal() {
  // Modal
  var More =
  /*#__PURE__*/
  function () {
    function More(btn, btnClose, cssModalBlock, cssAnimation) {
      _classCallCheck(this, More);

      this.btn = document.querySelector('.' + btn);
      this.close = document.querySelector('.' + btnClose);
      this.overlay = document.querySelector('.' + cssModalBlock);
      this.cssAnimation = cssAnimation;
      this.btn.onclick = this.show.bind(this);
      this.close.onclick = this.hide.bind(this); // console.log(this.btn);
      // console.log(this.cssAnimation);
    }

    _createClass(More, [{
      key: "show",
      value: function show() {
        this.overlay.style.display = 'block';
        this.btn.classList.add(this.cssAnimation);
        document.body.style.overflow = 'hidden';
      }
    }, {
      key: "hide",
      value: function hide() {
        this.overlay.style.display = 'none';
        this.btn.classList.remove(this.cssAnimation); // console.log(this.btn.classList.remove(this.cssAnimation));

        document.body.style.overflow = '';
      }
    }]);

    return More;
  }();

  var tabSection = new More('description-btn', 'popup-close', 'overlay', 'more-splash');
  var timerSection = new More('more', 'popup-close', 'overlay', 'more-splash');
}

module.exports = modal;
},{}],5:[function(require,module,exports){
"use strict";

function slider() {
  //Slider
  var slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(function (item) {
      return item.style.display = 'none';
    });
    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    });
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  });
  dotsWrap.addEventListener('click', function (event) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = slider;
},{}],6:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function tabs() {
  var HideShowTab =
  /*#__PURE__*/
  function () {
    function HideShowTab(info, tab, tabContent, showCSS, hideCSS) {
      _classCallCheck(this, HideShowTab);

      this.info = document.querySelector('.' + info);
      this.tab = document.querySelectorAll('.' + tab);
      this.tabContent = document.querySelectorAll('.' + tabContent);
      this.showCSS = showCSS;
      this.hideCSS = hideCSS;
      this.info.onclick = this.clickTab.bind(this);
    }

    _createClass(HideShowTab, [{
      key: "hideTabContent",
      value: function hideTabContent(a) {
        for (var i = a; i < this.tabContent.length; i++) {
          this.tabContent[i].classList.remove(this.showCSS);
          this.tabContent[i].classList.add(this.hideCSS);
        }
      }
    }, {
      key: "showTabContent",
      value: function showTabContent(b) {
        if (this.tabContent[b].classList.contains(this.hideCSS)) {
          this.tabContent[b].classList.remove(this.hideCSS);
          this.tabContent[b].classList.add(this.showCSS);
        }
      }
    }, {
      key: "clickTab",
      value: function clickTab() {
        var target = event.target;

        for (var i = 0; i < this.tab.length; i++) {
          if (target == this.tab[i]) {
            this.hideTabContent(0);
            this.showTabContent(i);
            break;
          }
        }
      }
    }]);

    return HideShowTab;
  }();

  var tab = new HideShowTab('info', 'info-header-tab', 'info-tabcontent', 'show', 'hide');
  tab.hideTabContent(1);
}

module.exports = tabs;
},{}],7:[function(require,module,exports){
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
},{}]},{},[1]);
