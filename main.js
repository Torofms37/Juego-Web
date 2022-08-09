const sectionSeleccionrAtaque = document.getElementById('seleccionar-ataque');
const sectionReiniciar = document.getElementById('reiniciar');
const botonMascotaJugador = document.getElementById('boton-mascota');
const botonReiniciar = document.getElementById('boton-reiniciar');
const sectionSeleccionrMascota = document.getElementById('seleccionar-mascota');
const spanMascotaJugador = document.getElementById('mascota-jugador');
const spanMascotaEnemigo = document.getElementById('mascota-enemigo');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');
const sectionMensaje = document.getElementById('resultado');
const ataquesDelJugador = document.getElementById('ataques-del-jugador');
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo');
const spanVidasJugador = document.getElementById('vidas-jugador');
const contenedorTarjetas = document.getElementById('contenedorTarjetas');
const contenedorAtaques = document.getElementById('contenedor-ataques');

let mokepones = [];
let ataqueJugador = [];
let ataqueEnemigo;
let opcionesMokepones;
let inputHipo;
let inputCapi;
let inputRati;
let mascotaJugador;
let ataquesMokepon;
let botonFuego;
let botonAgua;
let botonTierra;
let botones = [];
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

    botonReiniciar.addEventListener('click', reiniciarJuego);
}

function seleccionarMascotaJugador(){
    sectionSeleccionrMascota.style.display = 'none';
    sectionSeleccionrAtaque.style.display = 'flex';

    if(inputHipo.checked) {
        spanMascotaJugador.innerHTML = inputHipo.id;
        mascotaJugador = inputHipo.id;
    } else if (inputCapi.checked) {
        spanMascotaJugador.innerHTML = inputCapi.id;
        mascotaJugador = inputCapi.id;
    } else if (inputRati.checked) {
        spanMascotaJugador.innerHTML = inputRati.id;
        mascotaJugador = inputRati.id;
    } else {
        alert ('Selecciona a un jugador');
    }
    extraerAtaques(mascotaJugador);
    seleccionarMascotaEnemigo();
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

     botonFuego = document.getElementById('boton-fuego')
     botonAgua = document.getElementById('boton-agua')
     botonTierra = document.getElementById('boton-tierra')
     botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('Fuego')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'   
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('Agua')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            } else {
                ataqueJugador.push('Tierra')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            }
        })
    })

}

function seleccionarMascotaEnemigo() {
    let mascotaAletario = aleatorio(0,mokepones.length -1);
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAletario].nombre
    secuenciaAtaque();
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