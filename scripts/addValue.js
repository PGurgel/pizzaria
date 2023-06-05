let pizza = document.querySelector("#pizza");
let tamanho = document.querySelector("#tamanho");
let borda = document.querySelector("#borda");
let qnts = document.querySelector("#qnt");
let total = document.getElementById('total');
let hamburguer = document.querySelector('#hamburguer');

const PizzaEvent = document.querySelector(".tudo");

PizzaEvent.addEventListener('click', () => {

  total.innerHTML = ((+pizza.value) + (+tamanho.value) + (+borda.value)) * (qnts.value)

});
