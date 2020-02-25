function form(){
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
}

module.exports = form;