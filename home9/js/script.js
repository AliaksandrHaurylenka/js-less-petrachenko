window.addEventListener('DOMContentLoaded', function(){
  'use strict';

  let info = document.querySelector('.info-header'),
      tab = document.querySelectorAll('.info-header-tab'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a){
    for(let i = a; i < tabContent.length; i++){
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b){
    if(tabContent[b].classList.contains('hide')){
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', function(event){
    let target = event.target;

    if(target && target.classList.contains('info-header-tab')){
      for(let i = 0; i < tab.length; i++){
        if(target == tab[i]){
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    } 
  });


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
  // let more = document.querySelector('.more'),
  //     close = document.querySelector('.popup-close'),
  //     overlay = document.querySelector('.overlay');

  // more.addEventListener('click', function(){
  //   overlay.style.display = 'block';
  //   this.classList.add('more-splash');
  //   document.body.style.overflow = 'hidden';
  // });

  // close.addEventListener('click', function(){
  //   overlay.style.display = 'none';
  //   more.classList.remove('more-splash');
  //   document.body.style.overflow = '';
  // });

  function More(btn){
    this.btn = document.querySelector('.' + btn);
    this.close = document.querySelector('.popup-close');
    this.overlay = document.querySelector('.overlay');

    this.btn.addEventListener('click', function(){
      // alert('ky');
      // console.log(this);
      function overlay(){
        // console.log(this);
        let overlay = document.querySelector('.overlay');
        // console.log(overlay);
        overlay.style.display = 'block';
      }
      overlay();
      // this.overlay.style.display = 'block';
      // this.classList.add('more-splash');
      // document.body.style.overflow = 'hidden';
    });

    this.close.addEventListener('click', function(){
      this.overlay.style.display = 'none';
      this.btn.classList.remove('more-splash');
      document.body.style.overflow = '';
    });
  }

  let tabSection = new More('description-btn');
  let timerSection = new More('more');

});