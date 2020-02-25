function modal(){
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
}

module.exports = modal;