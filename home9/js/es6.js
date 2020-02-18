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
    document.body.append(div);
  }
}

let div = new Options();
});