let pizza = document.querySelector("#pizza");
let tamanho = document.querySelector("#tamanho");

const PizzaEvent = document.querySelector(".tudo");
PizzaEvent.addEventListener('click', () => {
  if (pizza.value != "Pizza de Carne de sol" && pizza.value != "Pizza de Carne de sol com Catupiry" && pizza.value != "Pizza doce - chocolate e Cartola" && tamanho.value == "Tamanho P" && borda.value == "Borda: Sem borda") {
    document.getElementById('total').innerHTML = "$"+ 17;
  } else if (pizza.value != "Pizza de Carne de sol" && pizza.value != "Pizza de Carne de sol com Catupiry" && pizza.value != "Pizza doce - chocolate e Cartola" && tamanho.value == "Tamanho M" && borda.value == "Borda: Sem borda") {
    document.getElementById('total').innerHTML = "$"+ 23;
  } else if (pizza.value != "Pizza de Carne de sol" && pizza.value != "Pizza de Carne de sol com Catupiry" && pizza.value != "Pizza doce - chocolate e Cartola" && tamanho.value == "Tamanho G" && borda.value == "Borda: Sem borda") {
    document.getElementById('total').innerHTML = "$"+ 28;

  }else if (pizza.value != "Pizza de Carne de sol" && pizza.value != "Pizza de Carne de sol com Catupiry" && pizza.value != "Pizza doce - chocolate e Cartola" && tamanho.value == "Tamanho P" && borda.value == "Borda: Chocolate" || borda.value == "Borda: Catupiry") {
    document.getElementById('total').innerHTML = "$"+ 17;
  }else if (pizza.value != "Pizza de Carne de sol" && pizza.value != "Pizza de Carne de sol com Catupiry" && pizza.value != "Pizza doce - chocolate e Cartola" && tamanho.value == "Tamanho M" && borda.value == "Borda: Chocolate" || borda.value == "Borda: Catupiry") {
      document.getElementById('total').innerHTML = "$"+ 25;
  }else if (pizza.value != "Pizza de Carne de sol" && pizza.value != "Pizza de Carne de sol com Catupiry" && pizza.value != "Pizza doce - chocolate e Cartola" && tamanho.value == "Tamanho G" && borda.value == "Borda: Chocolate" || borda.value == "Borda: Catupiry") {
      document.getElementById('total').innerHTML = "$"+ 30;
    

  }else if (pizza.value == "Pizza de Carne de sol" && pizza.value == "Pizza de Carne de sol com Catupiry" && pizza.value == "Pizza doce - chocolate e Cartola" && tamanho.value == "Tamanho P" && borda.value == "Borda: Sem borda") {
    document.getElementById('total').innerHTML = "$"+ 19;
  }else if (pizza.value == "Pizza de Carne de sol" && pizza.value == "Pizza de Carne de sol com Catupiry" && pizza.value == "Pizza doce - chocolate e Cartola" && tamanho.value == "Tamanho M" && borda.value == "Borda: Sem borda") {
    document.getElementById('total').innerHTML = "$"+ 26;
  }else if (pizza.value == "Pizza de Carne de sol" && pizza.value == "Pizza de Carne de sol com Catupiry" && pizza.value == "Pizza doce - chocolate e Cartola" && tamanho.value == "Tamanho G" && borda.value == "Borda: Sem borda") {
    document.getElementById('total').innerHTML = "$"+ 31;
  }
  else if (pizza.value == "Pizza de Carne de sol" && pizza.value == "Pizza de Carne de sol com Catupiry" && pizza.value == "Pizza doce - chocolate e Cartola" && tamanho.value == "Tamanho P" && borda.value == "Borda: Chocolate" || borda.value == "Borda: Catupiry") {
  document.getElementById('total').innerHTML = "$"+ 19;
  }else if (pizza.value == "Pizza de Carne de sol" && pizza.value == "Pizza de Carne de sol com Catupiry" && pizza.value == "Pizza doce - chocolate e Cartola" && tamanho.value == "Tamanho M" && borda.value == "Borda: Chocolate" || borda.value == "Borda: Catupiry") {
  document.getElementById('total').innerHTML = "$"+ 26;
  }else if (pizza.value == "Pizza de Carne de sol" && pizza.value == "Pizza de Carne de sol com Catupiry" && pizza.value == "Pizza doce - chocolate e Cartola" && tamanho.value == "Tamanho G" && borda.value == "Borda: Chocolate" || borda.value == "Borda: Catupiry") {
  document.getElementById('total').innerHTML = "$"+ 31;

  }else {
    document.getElementById('total').innerHTML ="$"+ 0;
  }
});