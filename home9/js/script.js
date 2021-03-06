window.addEventListener('DOMContentLoaded', function(){
  'use strict';

  class HideShowTab {
    constructor(info, tab, tabContent, showCSS, hideCSS){
      this.info = document.querySelector('.' + info);
      this.tab = document.querySelectorAll('.' + tab);
      this.tabContent = document.querySelectorAll('.' + tabContent);
      this.showCSS = showCSS;
      this.hideCSS = hideCSS;
      this.info.onclick = this.clickTab.bind(this);
    }
  
    hideTabContent(a){
      for(let i = a; i < this.tabContent.length; i++){
        this.tabContent[i].classList.remove(this.showCSS);
        this.tabContent[i].classList.add(this.hideCSS);
      }
    }
    
    showTabContent(b){
      if(this.tabContent[b].classList.contains(this.hideCSS)){
        this.tabContent[b].classList.remove(this.hideCSS);
        this.tabContent[b].classList.add(this.showCSS);
      }
    }

    clickTab(){
      let target = event.target;
      for(let i = 0; i < this.tab.length; i++){
        if(target == this.tab[i]){
          this.hideTabContent(0);
          this.showTabContent(i);
          break;
        }
      }
    } 
  }
  let tab = new HideShowTab('info', 'info-header-tab', 'info-tabcontent', 'show', 'hide');
  tab.hideTabContent(1);



  //Timer
  let deadline = '2020-02-12';

  function getTimeRemaining(endtime){
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/(1000*60)) % 60),
        // hours = Math.floor((t/(1000*60*60)));
        hours = Math.floor((t/(1000*60*60)) % 24),
        days = Math.floor(t/(1000*60*60*24));

    return {
      'total': t,
      'seconds': seconds,
      'minutes': minutes,
      'hours': hours,
      'days': days
    };
  }

  function setClock(id, endtime){
    let timer = document.getElementById(id),
        seconds = timer.querySelector('.seconds'),
        minutes = timer.querySelector('.minutes'),
        hours = timer.querySelector('.hours'),
        days = timer.querySelector('.days'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock(){
      let t = getTimeRemaining(endtime);
      seconds.textContent = t.seconds;
      minutes.textContent = t.minutes;
      hours.textContent = t.hours;
      days.textContent = t.days;
      
      if(t.seconds < 10){
        seconds.textContent = '0' + t.seconds;
      }
      if(t.minutes < 10){
        minutes.textContent = '0' + t.minutes;
      }
      if(t.hours < 10){
        hours.textContent = '0' + t.hours;
      }

      if(t.total <= 0){
        clearInterval(timeInterval);
      }
    }

  }

  setClock('timer', deadline);

  // Modal
  class More {
    constructor(btn, btnClose, cssModalBlock, cssAnimation) {
      this.btn = document.querySelector('.' + btn);
      this.close = document.querySelector('.' + btnClose);
      this.overlay = document.querySelector('.' + cssModalBlock);
      this.cssAnimation = cssAnimation;
      this.btn.onclick = this.show.bind(this);
      this.close.onclick = this.hide.bind(this);
      // console.log(this.btn);
      // console.log(this.cssAnimation);
    }

    show(){
      this.overlay.style.display = 'block';
      this.btn.classList.add(this.cssAnimation);
      document.body.style.overflow = 'hidden';
    }

    hide(){
      this.overlay.style.display = 'none';
      this.btn.classList.remove(this.cssAnimation);
      // console.log(this.btn.classList.remove(this.cssAnimation));
      document.body.style.overflow = '';
    }   
  }
  
  let tabSection = new More('description-btn', 'popup-close', 'overlay', 'more-splash');
  let timerSection = new More('more', 'popup-close', 'overlay', 'more-splash');


  //Form
  class SubmitForm {
    constructor(cssOrIdForm){
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
    toSend() {
      event.preventDefault();
      this.requestJson();
      // this.requestFormData();
      this.message();
      this.inputClear();
    }

    //Отправка формы в json формате
    requestJson() {
      // let request = new XMLHttpRequest();
      this.request.open('POST', 'server.php');
      this.request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
      let formData = new FormData(this.form);
      let obj = {};
      formData.forEach(function(value, key){
        obj[key] = value;
      });
      let json = JSON.stringify(obj);
      this.request.send(json);
    }

    //Отправка формы в обычном формате
    requestFormData(){
      // let request = new XMLHttpRequest();
      this.request.open('POST', 'server.php');
      this.request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      let formData = new FormData(this.form);
      this.request.send(formData);
    }

    /**
     * Вывод сообщения при отправке в зависимости от статуса
     */
    message() {
      if(this.request.readyState < 4){
        this.statusMessage.innerHTML = this.loading;
      } else if(this.request.readyState === 4 && this.request.status == 200){
        this.statusMessage.innerHTML = this.success;
      } else {
        this.statusMessage.innerHTML = this.failure;
      }
    }

    /**
     * Очистка полей после отправки
     */
    inputClear() {
      for(let i = 0; i < this.input.length; i++){
        this.input[i].value = '';
      }
    }
  }
  
  let formModal = new SubmitForm('.main-form');
  let formContact = new SubmitForm('#form');


  //Slider
  let slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');

  showSlides(slideIndex);

  function showSlides(n){
    if(n > slides.length){
      slideIndex = 1;
    }
    if(n < 1){
      slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');
    dots.forEach((item) => item.classList.remove('dot-active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n){
    showSlides(slideIndex += n);
  }

  function currentSlide(n){
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', () => {
    plusSlides(-1);
  });

  next.addEventListener('click', () => {
    plusSlides(1);
  });

  dotsWrap.addEventListener('click', (event) => {
    for (let i = 0; i < dots.length +1; i++){
      if(event.target.classList.contains('dot') && event.target == dots[i - 1]){
        currentSlide(i);
      }
    }
  });


  //Calc
  let persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      plays = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;

  totalValue.innerHTML = 0;

  persons.addEventListener('change', function(){
    personsSum = +this.value;
    // console.log(personsSum);
    total = (daysSum + personsSum)*4000;

    if(restDays.value == '' || persons.value == ''){
      totalValue.innerHTML = 0;
    }else{
      totalValue.innerHTML = total;
    }
  });

  restDays.addEventListener('change', function(){
    daysSum = +this.value;
    total = (daysSum + personsSum)*4000;

    if(persons.value == '' || restDays.value == ''){
      totalValue.innerHTML = 0;
    }else{
      totalValue.innerHTML = total;
    }
  });

  plays.addEventListener('change', function(){
    if(persons.value == '' || restDays.value == ''){
      totalValue.innerHTML = 0;
    }else{
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
  
});