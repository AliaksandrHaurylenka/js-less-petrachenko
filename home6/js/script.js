//1
let li = document.querySelectorAll('.menu-item');
li[1].textContent = 'Второй пункт';
li[2].textContent = 'Третий пункт';

let menu = document.querySelector('.menu');
let  li5 = document.createElement('li');
li5.classList.add('menu-item');
li5.innerHTML ='Пятый пункт';
menu.append(li5);




//2
let backgrImg = document.body;
backgrImg.style.backgroundImage = "url('img/apple_true.jpg')";


//3
let title = document.querySelector('#title');
title.textContent = 'Мы продаем только подлинную технику Apple';
// console.log(title);

//4
let advertising = document.querySelector('.adv');
advertising.parentNode.removeChild(advertising);


//5
let relationshipApple = prompt('Ваше отношение к технике Apple?');
let promptBlock = document.querySelector('.prompt');
promptBlock.textContent = relationshipApple;


// console.log(li2);
// console.log(relationshipApple);