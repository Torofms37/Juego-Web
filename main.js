function ataqueJugador() {

}

function inicarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)   
    
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador(){
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
    let ataqueAletario = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(ataqueAletario == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (ataqueAletario == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego() {
    ataqueJugador = 'Fuego'
    alert(ataqueJugador)
}

function ataqueAgua() {
    ataqueJugador = 'Agua'
    alert(ataqueJugador)
}

function ataqueTierra() {
    ataqueJugador = 'Tierra'
    alert(ataqueJugador)
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', inicarJuego)