let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function inicarJuego() {
    let sectionSeleccionrAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionrAtaque.style.display = 'none';

    let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display = 'none';

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)   
    
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)

}

function seleccionarMascotaJugador(){
    let sectionSeleccionrMascota = document.getElementById('seleccionar-mascota');
    sectionSeleccionrMascota.style.display = 'none';

    let sectionSeleccionrAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionrAtaque.style.display = 'block'

    let inputHipo = document.getElementById('hipodoge')
    let inputCapi = document.getElementById('capipepo')
    let inputRati = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if(inputHipo.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapi.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRati.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert ('Selecciona a un jugador')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAletario = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(ataqueAletario == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAletario == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego() {
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAletario = aleatorio(1,3)

    if(ataqueAletario == 1) {
        ataqueEnemigo = 'Fuego'
    } else if (aleatorio == 2){
        ataqueEnemigo = 'Agua'
    } else {
        ataqueEnemigo = 'Tierra'
    }

    combate();
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador');
    let spanVidasEnemigo = document.getElementById('vidas-enemigo');

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje('Empatado');
    } else if(ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra') {
        crearMensaje('Ganado')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

    }  else if(ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego') {
        crearMensaje('Ganado')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

    }  else if(ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua') {
        crearMensaje('Ganado')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

    }  else {
        crearMensaje('Perdido')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    checkVidas();
}

function checkVidas() {
    if(vidasEnemigo == 0) {
        crearMensajeFinal('¡Ganaste we, te ganaste un mes más suscripcióm Platzi!')
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Perdiste we, ni pepe. Sigue intentando!')
    }
}

function crearMensaje(resultado) {
    let sectionMensaje = document.getElementById('mensajes');
    
    let parrafo = document.createElement('p');

    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueEnemigo + ' - Usted a: ' + resultado;

    sectionMensaje.appendChild(parrafo);
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensaje = document.getElementById('mensajes');
    
    let parrafo = document.createElement('p');
    parrafo.innerHTML = resultadoFinal

    sectionMensaje.appendChild(parrafo);

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display = 'block';
}

function reiniciarJuego() {
    location.reload();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', inicarJuego)