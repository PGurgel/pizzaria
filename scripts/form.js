const evento = document.getElementById('enviar');
const enviarFormulario = () => {

    let pizza = document.getElementById("pizza");
    let opcaoPizza = pizza.options[pizza.selectedIndex].innerHTML;

    let tamanho = document.getElementById("tamanho");
    let opcaoTamanho = tamanho.options[tamanho.selectedIndex].innerHTML;

    let borda = document.getElementById("borda");
    let opcaoBorda = borda.options[borda.selectedIndex].innerHTML;

    let nome = document.getElementById('nome').value;
    let bairro = document.getElementById('bairro').value;
    let endereco = document.getElementById('enderco').value;

    let hamburguer = document.getElementById("hamburguer");
    let opcaoHamburguer = hamburguer.options[hamburguer.selectedIndex].innerHTML;
    
    let bebida = document.getElementById("bebida");
    let opcaoBebidas = bebida.options[bebida.selectedIndex].innerHTML;

    let pagamento = document.getElementById('pagamento').value;
    let valor = document.getElementById('total').innerHTML;
    let numero = 558499150415;
    var win = window.open(`https://wa.me/${numero}?text=Nome:%20${nome}%0DBairro:%20${bairro}%0DRua:%20${endereco}%0DPedido:%20${opcaoPizza}%0D${opcaoBorda}%0D${opcaoTamanho}%0D${opcaoBebidas}%0D${opcaoHamburguer}%0DPagamento:%20${pagamento}%0DValor:%20$${valor}`, '_blank');
}
evento.addEventListener('click', enviarFormulario);

