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