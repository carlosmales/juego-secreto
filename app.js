let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){/*verificar cambio de nombre en HTML*/
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){
      asignarTextoElemento('p',`Genial ¡Acertaste el número en ${intentos} ${(intentos ===1) ? 'intento' : 'intentos'}!`);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
      /*El usuario no acertó*/
      if (numeroDeUsuario>numeroSecreto){
        asignarTextoElemento('p','Nop, el número secreto es menor');
      } else {
        asignarTextoElemento('p','Nop, el número secreto es mayor');
      }
    }
    intentos++;
    limpiarCaja();
    return;
}

function limpiarCaja(){
  document.querySelector('#valorUsuario').value = '';
 
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
  
  //Si se sortearon todos los números
if (listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p','Ya se sortearon todos lo números posibles');
} else {
    //Si el numero generado está incluido en la lista.
    if (listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
    } else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
    }
}
}

function condicionesIniciales(){
  asignarTextoElemento('h1','Juego del número secreto');
  asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego(){
  //Limpiar Caja
  limpiarCaja();
  //Indicar intervalo de números
  //Número aleatorio
  //Habilitar botón
  //Iniciar numero de intentos
  condicionesIniciales();
  //Desabilitar boton 'Reinciar'
  document.getElementById('reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();