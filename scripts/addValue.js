  let pizza = document.querySelector("#pizza");
  let tamanho = document.querySelector("#tamanho");
  let borda = document.querySelector("#borda");
  let qnts = document.querySelector("#qnt");
  let preco = document.getElementById('total');

const PizzaEvent = document.querySelector(".tudo");

PizzaEvent.addEventListener('click', () => {
 
  preco.innerHTML = ((+pizza.value)+(+tamanho.value)+(+borda.value))*(qnts.value);
});

