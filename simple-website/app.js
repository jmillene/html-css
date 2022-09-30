'use strict'

const botao = document.querySelector('.btn');
botao.addEventListener('click', function(){
  document.body.classList.toggle('ligth-theme');
  document.body.classList.toggle('dark-theme');
  
});

