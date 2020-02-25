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