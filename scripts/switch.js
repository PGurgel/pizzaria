var btnPizza = document.getElementById("opcPizza");
var btnHamburger = document.getElementById("opcHamburguer");
var btnBebidaSuco = document.getElementById("opcBebidaSuco");
var btnGuloseima = document.getElementById('opcGuloseima');

btnPizza.addEventListener('click', function () {
    if (document.getElementById('pizzas').style.display === 'grid' && document.getElementById('tamanhos').style.display === 'grid' && document.getElementById('bordas').style.display === 'grid' && document.getElementById('qnts').style.display === 'grid') {
        document.getElementById('pizzas').style.display = 'none';
        document.getElementById('tamanhos').style.display = 'none';
        document.getElementById('bordas').style.display = 'none';
        document.getElementById('qnts').style.display = 'none';
    } else {
        document.getElementById('pizzas').style.display = 'grid';
        document.getElementById('tamanhos').style.display = 'grid';
        document.getElementById('bordas').style.display = 'grid';
        document.getElementById('qnts').style.display = 'grid';
    }

})
btnHamburger.addEventListener('click', function () {
  if( document.getElementById('hamburgueres').style.display === 'grid'){
    document.getElementById('hamburgueres').style.display = 'none';
  }else{
    document.getElementById('hamburgueres').style.display = 'grid';
  }
})

btnBebidaSuco.addEventListener('click', function () {
   if(document.getElementById('bebidasSucos').style.display === 'grid'){
    document.getElementById('bebidasSucos').style.display = 'none';
   }else{
    document.getElementById('bebidasSucos').style.display = 'grid';
   }
})

btnGuloseima.addEventListener('click', function () {
  if( document.getElementById('guloseimas').style.display === 'grid'){
    document.getElementById('guloseimas').style.display = 'none';
  }else{
    document.getElementById('guloseimas').style.display = 'grid';
  }
})
