let pizza = document.querySelector("#pizza");
let tamanho = document.querySelector("#tamanho");
let borda = document.querySelector("#borda");
let qnts = document.querySelector("#qnt");
let total = document.getElementById('total');
let hamburguer = document.querySelector('#hamburguer');

const PizzaEvent = document.querySelector(".tudo");

PizzaEvent.addEventListener('click', () => {

  let sum = 0;

  if (pizza.value !== '') {
    sum += +pizza.value;
  }

  if (tamanho.value !== '') {
    sum += +tamanho.value;
  }

  if (borda.value !== '') {
    sum += +borda.value;
  }

  if (hamburguer.value !== '') {
    sum += +hamburguer.value;
  }
  

  total.innerHTML = sum * (qnts.value);

});
