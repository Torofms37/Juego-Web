const sectionSeleccionrAtaque = document.getElementById('seleccionar-ataque');
const sectionReiniciar = document.getElementById('reiniciar');
const botonMascotaJugador = document.getElementById('boton-mascota');
const botonFuego = document.getElementById('boton-fuego');
const botonAgua = document.getElementById('boton-agua');
const botonTierra = document.getElementById('boton-tierra');
const botonReiniciar = document.getElementById('boton-reiniciar');
const sectionSeleccionrMascota = document.getElementById('seleccionar-mascota');

const spanMascotaJugador = document.getElementById('mascota-jugador');
const spanMascotaEnemigo = document.getElementById('mascota-enemigo');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');
const sectionMensaje = document.getElementById('resultado');
const ataquesDelJugador = document.getElementById('ataques-del-jugador');
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo');
const spanVidasJugador = document.getElementById('vidas-jugador');
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

let mokepones = []
let ataqueJugador;
let ataqueEnemigo;
let opcionesMokepones;
let inputHipo;
let inputCapi;
let inputRati;
let vidasJugador = 3;
let vidasEnemigo = 3;

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
    }
}

let hipodoge = new Mokepon('Hipodoge', 'https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_hipodoge_attack.png', 5);

let capipepo = new Mokepon('Capipepo', 'https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_capipepo_attack.png', 5);

let ratigueya = new Mokepon('Ratigueya', 'https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_ratigueya_attack.png', 5);

hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
);

capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
);

ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
);

mokepones.push(hipodoge,capipepo,ratigueya);

function inicarJuego() {
    sectionSeleccionrAtaque.style.display = 'none';
    mokepones.forEach((mokepon) => {
        opcionesMokepones = `
        <input type="radio" name="mascota" id=${ mokepon.nombre } />
        <label class="tarjeta-de-mokepon" for=${ mokepon.nombre } >
            <p>${ mokepon.nombre } </p>
            <img src=${ mokepon.foto }  alt=${ mokepon.nombre } >
        </label>
        `
        contenedorTarjetas.innerHTML += opcionesMokepones;

        inputHipo = document.getElementById('Hipodoge');
        inputCapi = document.getElementById('Capipepo');
        inputRati = document.getElementById('Ratigueya');

    });
    sectionReiniciar.style.display = 'none';
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador) ;  
    botonFuego.addEventListener('click', ataqueFuego);
    botonAgua.addEventListener('click', ataqueAgua);
    botonTierra.addEventListener('click', ataqueTierra);
    botonReiniciar.addEventListener('click', reiniciarJuego);
}

function seleccionarMascotaJugador(){
    sectionSeleccionrMascota.style.display = 'none';
    sectionSeleccionrAtaque.style.display = 'flex';

    if(inputHipo.checked) {
        spanMascotaJugador.innerHTML = inputHipo.id;
    } else if (inputCapi.checked) {
        spanMascotaJugador.innerHTML = inputCapi.id;
    } else if (inputRati.checked) {
        spanMascotaJugador.innerHTML = inputRati.id;
    } else {
        alert ('Selecciona a un jugador');
    }
    seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
    let mascotaAletario = aleatorio(0,mokepones.length -1);

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAletario].nombre
}

function ataqueFuego() {
    ataqueJugador = 'Fuego';
    ataqueAleatorioEnemigo();
}

function ataqueAgua() {
    ataqueJugador = 'Agua';
    ataqueAleatorioEnemigo();
}

function ataqueTierra() {
    ataqueJugador = 'Tierra';
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
    let ataqueAletario = aleatorio(1,3);
    if(ataqueAletario == 1) {
        ataqueEnemigo = 'Fuego';
    } else if (aleatorio == 2){
        ataqueEnemigo = 'Agua';
    } else {
        ataqueEnemigo = 'Tierra';
    }
    combate();
}

function combate() {
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje('Empatado');
    } else if(ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra') {
        crearMensaje('Ganado');
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    }  else if(ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego') {
        crearMensaje('Ganado');
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    }  else if(ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua') {
        crearMensaje('Ganado');
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    }  else {
        crearMensaje('Perdido');
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    }
    checkVidas();
}

function checkVidas() {
    if(vidasEnemigo == 0) {
        crearMensajeFinal('¡Ganaste we, te ganaste un mes más suscripcióm Platzi!');
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Perdiste we, ni pepe. Sigue intentando!');
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p');
    let nuevoAtaqueDelEnemigo = document.createElement('p');

    sectionMensaje.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensaje.innerHTML = resultadoFinal;
    botonFuego.disabled = true;
    botonAgua.disabled = true;
    botonTierra.disabled = true;
    sectionReiniciar.style.display = 'block';
}

function reiniciarJuego() {
    location.reload();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', inicarJuego);