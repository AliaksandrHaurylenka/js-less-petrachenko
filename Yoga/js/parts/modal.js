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