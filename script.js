const evento = document.getElementById('enviar')
const enviarFormulario = () => {
    let nome = document.getElementById('nome').value;
    let bairro = document.getElementById('bairro').value;
    let endereco = document.getElementById('enderco').value;
    let pizza = document.getElementById('pizza').value;
    let tamanho = document.getElementById('tamanho').value;
    let borda = document.getElementById('borda').value;
    let hamburguer = document.getElementById('hamburguer').value;
    let bebidas = document.getElementById('bebidas').value;
    let pagamento = document.getElementById('pagamento').value;
    let numero = 558499150415;
    var win = window.open(`https://wa.me/${numero}?text=Nome:%20${nome}%0DBairro:%20${bairro}%0DRua:%20${endereco}%0DPedido:%20${pizza},%20${borda},%20${tamanho}%0D${bebidas}%0D${hamburguer}%0DPagamento:%20${pagamento}`, '_blank');
}
evento.addEventListener('click', enviarFormulario);

var btnPizza = document.getElementById("opcPizza");
var btnHamburger = document.getElementById("opcHamburguer");
var btnBebidaSuco = document.getElementById("opcBebidaSuco");

btnPizza.addEventListener('click', function(){
    document.getElementById('pizzas').style.display = 'grid';
    document.getElementById('tamanhos').style.display = 'grid';
    document.getElementById('bordas').style.display = 'grid';

})
btnHamburger.addEventListener('click',function(){
    document.getElementById('hamburgueres').style.display = 'grid';
} )

btnBebidaSuco.addEventListener('click',function(){
    document.getElementById('bebidasSucos').style.display = 'grid';
} )