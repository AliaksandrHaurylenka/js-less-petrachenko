window.addEventListener('DOMContentLoaded', function(){
  'use strict';
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
    console.log('Yes');
  }
}

let formModal = new SubmitForm('.main-form');
let formContact = new SubmitForm('#form');
});