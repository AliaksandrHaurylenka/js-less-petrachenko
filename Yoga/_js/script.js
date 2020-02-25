window.addEventListener('DOMContentLoaded', function(){
  'use strict';

  let tabs = require('./parts/tab.js').default,
      timer = require('./parts/timer.js'),
      calc = require('./parts/calc.js'),
      slider = require('./parts/slider.js'),
      modal = require('./parts/modal.js'),
      form = require('./parts/form.js');

      tabs();
      timer();
      calc();
      slider();
      modal();
      form();

});