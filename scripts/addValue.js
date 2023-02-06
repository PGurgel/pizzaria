let pizza = document.querySelector("#pizza");
let tamanho = document.querySelector("#tamanho");
let preco = document.getElementById('total');
const PizzaEvent = document.querySelector(".tudo");
PizzaEvent.addEventListener('click', () => {

  if (pizza.name != "Pizza de Carne de sol" && pizza.name != "Pizza de Carne de sol com Catupiry" && pizza.name != "Pizza doce - chocolate e Cartola" && tamanho.name == "Tamanho P" && borda.name == "Borda: Sem borda") {
    preco.innerHTML = "$" + 17;
  } else if (pizza.name != "Pizza de Carne de sol" && pizza.name != "Pizza de Carne de sol com Catupiry" && pizza.name != "Pizza doce - chocolate e Cartola" && tamanho.name == "Tamanho M" && borda.name == "Borda: Sem borda") {
    preco.innerHTML = "$" + 23;
  } else if (pizza.name != "Pizza de Carne de sol" && pizza.name != "Pizza de Carne de sol com Catupiry" && pizza.name != "Pizza doce - chocolate e Cartola" && tamanho.name == "Tamanho G" && borda.name == "Borda: Sem borda") {
    preco.innerHTML = "$" + 28;


  } else if (pizza.name != "Pizza de Carne de sol" && pizza.name != "Pizza de Carne de sol com Catupiry" && pizza.name != "Pizza doce - chocolate e Cartola" && tamanho.name == "Tamanho P" && borda.name == "Borda: Chocolate" || borda.name == "Borda: Catupiry") {
    preco.innerHTML = "$" + 17;
  } else if (pizza.name != "Pizza de Carne de sol" && pizza.name != "Pizza de Carne de sol com Catupiry" && pizza.name != "Pizza doce - chocolate e Cartola" && tamanho.name == "Tamanho M" && borda.name == "Borda: Chocolate" || borda.name == "Borda: Catupiry") {
    preco.innerHTML = "$" + 25;
  } else if (pizza.name != "Pizza de Carne de sol" && pizza.name != "Pizza de Carne de sol com Catupiry" && pizza.name != "Pizza doce - chocolate e Cartola" && tamanho.name == "Tamanho G" && borda.name == "Borda: Chocolate" || borda.name == "Borda: Catupiry") {
    preco.innerHTML = "$" + 30;


  } else if (pizza.name == "Pizza de Carne de sol" && pizza.name == "Pizza de Carne de sol com Catupiry" && pizza.name == "Pizza doce - chocolate e Cartola" && tamanho.name == "Tamanho P" && borda.name == "Borda: Sem borda") {
    preco.innerHTML = "$" + 19;
  } else if (pizza.name == "Pizza de Carne de sol" && pizza.name == "Pizza de Carne de sol com Catupiry" && pizza.name == "Pizza doce - chocolate e Cartola" && tamanho.name == "Tamanho M" && borda.name == "Borda: Sem borda") {
    preco.innerHTML = "$" + 26;
  } else if (pizza.name == "Pizza de Carne de sol" && pizza.name == "Pizza de Carne de sol com Catupiry" && pizza.name == "Pizza doce - chocolate e Cartola" && tamanho.name == "Tamanho G" && borda.name == "Borda: Sem borda") {
    preco.innerHTML = "$" + 31;
  }


  else if (pizza.name == "Pizza de Carne de sol" || pizza.name == "Pizza de Carne de sol com Catupiry" || pizza.name == "Pizza doce - chocolate e Cartola" && tamanho.name == "Tamanho P" && borda.name == "Borda: Chocolate" || borda.name == "Borda: Catupiry") {
    preco.innerHTML = "$" + 19;
  } else if (pizza.name == "Pizza de Carne de sol" || pizza.name == "Pizza de Carne de sol com Catupiry" || pizza.name == "Pizza doce - chocolate e Cartola" && tamanho.name == "Tamanho M" && borda.name == "Borda: Chocolate" || borda.name == "Borda: Catupiry") {
    preco.innerHTML = "$" + 26;
  } else if (pizza.name == "Pizza de Carne de sol" || pizza.name == "Pizza de Carne de sol com Catupiry" || pizza.name == "Pizza doce - chocolate e Cartola" && tamanho.name == "Tamanho G" && borda.name == "Borda: Chocolate" || borda.name == "Borda: Catupiry") {
    preco.innerHTML = "$" + 31;

  } else {
    preco.innerHTML = "$" + 0;
  }
});