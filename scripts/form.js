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
   
    
    let hamburguer = document.getElementById('hamburguer').value;
    let bebidas = document.getElementById('bebidas').value;
    let pagamento = document.getElementById('pagamento').value;
    let valor = document.getElementById('total').innerHTML;
    let numero = 558499150415;
var win = window.open(`https://wa.me/${numero}?text=Nome:%20${nome}.%0DBairro:%20${bairro}.%0DRua:%20${endereco}.%0DPedido:%20${opcaoPizza}%20${opcaoBorda}.%20${opcaoTamanho}%0D${bebidas}.%0D${hamburguer}.%0DPagamento:%20${pagamento}%0DValor:%20$${valor}`,'_blank');
}
evento.addEventListener('click', enviarFormulario);

