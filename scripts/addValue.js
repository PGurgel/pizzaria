let pizza = document.querySelector("#pizza");
let tamanho = document.querySelector("#tamanho");

const PizzaEvent = document.querySelector(".tudo");
PizzaEvent.addEventListener('click', () => {
  if (pizza.value != "Pizza de Carne de sol" && tamanho.value == "Tamanho P") {
    document.getElementById('total').innerHTML = 17;
  } else if (pizza.value != "Pizza de Carne de sol" && tamanho.value == "Tamanho M") {
    document.getElementById('total').innerHTML = 23;
  } else if (pizza.value != "Pizza de Carne de sol" && tamanho.value == "Tamanho G") {
    document.getElementById('total').innerHTML = 28;
  }else if (pizza.value == "Pizza de Carne de sol" && tamanho.value == "Tamanho P") {
    document.getElementById('total').innerHTML = 19;
  }
   else {
    document.getElementById('total').innerHTML = 0;
  }
});