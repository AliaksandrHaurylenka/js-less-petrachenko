window.addEventListener('DOMContentLoaded', function(){
  'use strict';
class Options {
  constructor(height, width, bg, fontSize, textAlign){
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign; 
  }

  divBlock(){
    let div = document.createElement('div');
    // div.style.height = this.height;
    // div.style.width = this.width;
    // div.style.background = this.bg;
    // div.style.fontSize = this.fontSize;
    // div.style.textAlign = this.textAlign;
    div.style.cssText = (`height: ${this.height};
                          width: ${this.width};
                          background: ${this.bg};
                          font-size: ${this.fontSize};
                          text-align: ${this.textAlign}` );
    div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
    document.body.append(div);

  }
}

let div = new Options('50px', '500px', 'green', '20px', 'center');
    div.divBlock();

let div1 = new Options('50px', '500px', 'yellow', '20px', 'center');
    div1.divBlock();
});