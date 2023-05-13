  let pizza = document.querySelector("#pizza");
  let tamanho = document.querySelector("#tamanho");
  let borda = document.querySelector("#borda");
  let qnts = document.querySelector("#qnt");
  let precoPizza= document.getElementById('total');
  let hamburguer = document.querySelector('#hamburguer');

const PizzaEvent = document.querySelector(".tudo");

PizzaEvent.addEventListener('click', () => {

  precoPizza.innerHTML = ((+pizza.value)+(+tamanho.value)+(+borda.value))*(qnts.value);
  
 
});

let precoHamburger= document.getElementById('total');

const hamburguerEvent = document.querySelector(".tudo");

hamburguerEvent.addEventListener('click', () => {

  precoHamburger.innerHTML = ((+hamburguer.value));
  
 
});
