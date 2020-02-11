// let arr = [1, 19, 6],
//     i = arr.sort();

// console.log(arr);

function Calculator(){
  this.read = function(){
    this.a = +prompt('a?');
    this.b = +prompt('b?');
  }
  
}

let calc = new Calculator();
alert(calc.read());