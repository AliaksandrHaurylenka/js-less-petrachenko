//1
let menu = document.querySelector('.menu');
let  li5 = document.createElement('li');
li5.classList.add('menu-item');
li5.innerHTML ='Пятый элемент';
menu.append(li5);


//2
let backgrImg = document.body;
backgrImg.style.backgroundImage = "url('img/apple_true.jpg')";


//3


//4
let advertising = document.querySelector('.adv');
advertising.parentNode.removeChild(advertising);


//5
let relationshipApple = prompt('Ваше отношение к технике Apple?');
let promptBlock = document.querySelector('.prompt');
    promptBlock.textContent = relationshipApple;


// console.log(li2);
console.log(relationshipApple);