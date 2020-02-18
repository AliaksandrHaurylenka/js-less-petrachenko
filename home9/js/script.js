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
  // let message = {
  //   loading: 'Загружаю...',
  //   success: "Спасибо! Мы с вами скоро свяжемся.",
  //   failure: "Что-то пошло не так!"
  // };

  // let form = document.querySelector('.main-form'),
  //     input = form.getElementsByTagName('input'),
  //     statusMessage = document.createElement('div');

  // statusMessage.classList.add('status');

  // form.addEventListener('submit', function(event){
  //   event.preventDefault();
  //   form.appendChild(statusMessage);

  //   let request = new XMLHttpRequest();
  //   request.open('POST', 'server.php');

  //   //Отправка формы в обычном формате
  //   // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  //   // let formData = new FormData(form);
  //   // request.send(formData);
  //   // Конец Отправка формы в обычном формате

  //   //Отправка формы в json формате
  //   request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

  //   let formData = new FormData(form);

  //   let obj = {};
  //   formData.forEach(function(value, key){
  //     obj[key] = value;
  //   });

  //   let json = JSON.stringify(obj);

  //   request.send(json);
  //   //Конец Отправка формы в json формате

  //   request.addEventListener('readystatechange', function(){
  //     if(request.readyState < 4){
  //       statusMessage.innerHTML = message.loading;
  //     } else if(request.readyState === 4 && request.status == 200){
  //       statusMessage.innerHTML = message.success;
  //     } else {
  //       statusMessage.innerHTML = message.failure;
  //     }
  //   });

  //   for(let i = 0; i < input.length; i++){
  //     input[i].value = '';
  //   }
  // });

  class SubmitForm {
    constructor(cssForm){
      this.loading = 'Загружаю...';
      this.success = "Спасибо! Мы с вами скоро свяжемся.";
      this.failure = "Что-то пошло не так!";
  
      this.form = document.querySelector(cssForm);
      this.input = this.form.getElementsByTagName('input');
      this.statusMessage = document.createElement('div');
      this.statusMessage.classList.add('status');
  
      this.form.onsubmit = this.toSend.bind(this);
    }
  
    toSend(){
      // console.log('Yes');
      event.preventDefault();
    }
  }
  
  let formModal = new SubmitForm('.main-form');
      // formModal.toSend();
  let formContact = new SubmitForm('#form');

});