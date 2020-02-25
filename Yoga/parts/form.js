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