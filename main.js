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
const sectionVerMapa = document.getElementById('ver-mapa');
const mapa = document.getElementById('mapa');

let mokepones = [];
let ataqueJugador = [];
let ataqueEnemigo = [];
let opcionesMokepones;
let inputHipo;
let inputCapi;
let inputRati;
// let inputLangostelvis;
// let inputPydos;
// let inputTucapalma;
let mascotaJugador;
let mascotaJugadorObjeto;
let ataquesMokepon;
let ataqueMokeponEnemigo;
let botonFuego;
let botonAgua;
let botonTierra;
// let botonVeneno;
// let botonViento;
let botones = [];
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidasJugador = 3;
let vidasEnemigo = 3;
let lienzo = mapa.getContext('2d');
let intervalo;
let mapaBackground = new Image();
mapaBackground.src = 'https://static.platzi.com/media/user_upload/mokemap-ca51ea18-7ac8-492f-be96-6181d766a99d.jpg';
let alturaQueBuscamos;
let anchoDelMapa  = window.innerWidth - 20
const anchoMaximoMapa = 350

if(anchoDelMapa > anchoMaximoMapa) {
    anchoDelMapa = anchoMaximoMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Mokepon {
    constructor(nombre,foto,vida,fotoMapa) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
        this.ancho = 40;
        this.alto = 40;
        this.x = aleatorio(0, mapa.width - this.ancho);
        this.y = aleatorio(0, mapa.height - this.alto);
        this.mapaFoto = new Image();
        this.mapaFoto.src = fotoMapa;
        this.velocidadX = 0;
        this.velocidadY = 0;
    }

    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto,  
          );
    }
}
// mascota del jugador
let hipodoge = new Mokepon('Hipodoge', 'https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_hipodoge_attack.png', 5, 'https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-65-clases-methods/programar/mokepon/assets/hipodoge.png');
let capipepo = new Mokepon('Capipepo', 'https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_capipepo_attack.png', 5, 'https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-65-clases-methods/programar/mokepon/assets/capipepo.png');
let ratigueya = new Mokepon('Ratigueya', 'https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_ratigueya_attack.png', 5, 'https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-65-clases-methods/programar/mokepon/assets/ratigueya.png') ;
// let langostelvis = new Mokepon('Langostelvis', 'https://github.com/platzi/curso-programacion-basica/blob/59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_langostelvis_attack.png?raw=true', 5, '');
// let pydos = new Mokepon('Pydos', 'https://github.com/platzi/curso-programacion-basica/blob/59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_pydos_attack.png?raw=true', 5, '');
// let tucapalma = new Mokepon('Tucapalma', 'https://github.com/platzi/curso-programacion-basica/blob/59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_tucapalma_attack.png?raw=true', 5, '');

// mascota del enemigo
let hipodogeEnemigo = new Mokepon('Hipodoge', 'https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_hipodoge_attack.png', 5, 'https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-65-clases-methods/programar/mokepon/assets/hipodoge.png');
let capipepoEnemigo = new Mokepon('Capipepo', 'https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_capipepo_attack.png', 5, 'https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-65-clases-methods/programar/mokepon/assets/capipepo.png',);
let ratigueyaEnemigo = new Mokepon('Ratigueya', 'https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_ratigueya_attack.png', 5, 'https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-65-clases-methods/programar/mokepon/assets/ratigueya.png') ;


hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
);

hipodogeEnemigo.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
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
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
);

capipepoEnemigo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
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
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
);

ratigueyaEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
);

// langostelvis.ataques.push(
//     { nombre: '🔥', id: 'boton-fuego' },
//     { nombre: '🔥', id: 'boton-fuego' },
//     { nombre: '🔥', id: 'boton-fuego' },
//     { nombre: '🔥', id: 'boton-fuego' },
//     { nombre: '🌱', id: 'boton-tierra' },
//     { nombre: '🌱', id: 'boton-tierra' },
// );

// pydos.ataques.push(
//     { nombre: '🐍', id: 'boton-veneno' },
//     { nombre: '🐍', id: 'boton-veneno' },
//     { nombre: '🐍', id: 'boton-veneno' },
//     { nombre: '🐍', id: 'boton-veneno' },
//     { nombre: '🔥', id: 'boton-fuego' },
//     { nombre: '🔥', id: 'boton-fuego' },
// );

// tucapalma.ataques.push(
//     { nombre: '🌪', id: 'boton-viento' },
//     { nombre: '🌪', id: 'boton-viento' },
//     { nombre: '🌪', id: 'boton-viento' },
//     { nombre: '🌪', id: 'boton-viento' },
//     { nombre: '🔥', id: 'boton-fuego' },
//     { nombre: '🍃', id: 'boton-ramas' },
// );



mokepones.push(hipodoge,capipepo,ratigueya); //<-- luego agregar: langostelvis,pydos,tucapalma

function inicarJuego() {
    sectionSeleccionrAtaque.style.display = 'none';
    sectionVerMapa.style.display = 'none';
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
        // inputLangostelvis = document.getElementById('Langostelvis');
        // inputPydos = document.getElementById('Pydos');
        // inputTucapalma = document.getElementById('Tucapalma');

    });
    sectionReiniciar.style.display = 'none';
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);  
    botonReiniciar.addEventListener('click', reiniciarJuego);
}

function seleccionarMascotaJugador(){
    sectionSeleccionrMascota.style.display = 'none';

    if(inputHipo.checked) {
        spanMascotaJugador.innerHTML = inputHipo.id;
        mascotaJugador = inputHipo.id;
    } else if (inputCapi.checked) {
        spanMascotaJugador.innerHTML = inputCapi.id;
        mascotaJugador = inputCapi.id;
    } else if (inputRati.checked) {
        spanMascotaJugador.innerHTML = inputRati.id;
        mascotaJugador = inputRati.id;
    // } else if (inputLangostelvis.checked) {
    //     spanMascotaJugador.innerHTML = inputLangostelvis.id;
    //     mascotaJugador = inputLangostelvis.id;
    // } else if (inputPydos.checked) {
    //     spanMascotaJugador.innerHTML = inputPydos.id;
    //     mascotaJugador = inputPydos.id;
    // } else if (inputTucapalma.checked) {
    //     spanMascotaJugador.innerHTML = inputTucapalma.id;
    //     mascotaJugador = inputTucapalma.id;
    } else {
        alert ('Selecciona a un jugador');
    }
    extraerAtaques(mascotaJugador);
    sectionVerMapa.style.display = 'flex';
    inicarMapa();

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

     botonFuego = document.getElementById('boton-fuego');
     botonAgua = document.getElementById('boton-agua');
     botonTierra = document.getElementById('boton-tierra');
    //  botonVeneno = document.getElementById('boton-veneno');
    //  botonViento = document.getElementById('boton-viento')
     botones = document.querySelectorAll('.BAtaque');
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('Fuego')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true;
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('Agua')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true;
            
            } else {
                ataqueJugador.push('Tierra')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true;
            }
            // } else if (e.target.textContent === '🐍') {
            //     ataqueJugador.push('Veneno')
            //     console.log(ataqueJugador)
            //     boton.style.background = '#112f58'
            //     boton.disabled = true;
            // } else {
            //     ataqueJugador.push('Viento')
            //     console.log(ataqueJugador)
            //     boton.style.background = '#112f58'
            //     boton.disabled = true;
            // }
            ataqueAleatorioEnemigo();
        })
    })
}

function seleccionarMascotaEnemigo() {
    let mascotaAletario = aleatorio(0,mokepones.length -1);
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAletario].nombre
    ataqueMokeponEnemigo = mokepones[mascotaAletario].ataques
    secuenciaAtaque();
}

function ataqueAleatorioEnemigo() {
    let ataqueAletario = aleatorio(0,ataqueMokeponEnemigo.length -1);
    if(ataqueAletario == 0 || ataqueAletario == 1) {
        ataqueEnemigo.push('Fuego');
    } else if (ataqueAletario == 3 || ataqueAletario == 4){
        ataqueEnemigo.push('Agua');
    }  else {
        ataqueEnemigo.push('Viento');
    }
    // } else if (ataqueAletario == 4 || ataqueAletario == 5){
    //     ataqueEnemigo.push('Tierra');
    // } else if (ataqueAletario == 6 || ataqueAletario == 7){
    //     ataqueEnemigo.push('Veneno');
    // } else {
    //     ataqueEnemigo.push('Viento');
    // }
    iniciarPelea();
}

function iniciarPelea() {
    if(ataqueJugador.length === 6) {
        combate();
    }
}

function indexAmbosOponentes(jugador,enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador];
    indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}

function combate() {
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje('Empate');
        } else if(ataqueJugador[index] === 'Fuego' && ataqueEnemigo[index] === 'tierra') {
            indexAmbosOponentes(index, index)
            crearMensaje('Ganaste');
            victoriasJugador++;
            spanVidasEnemigo.innerHTML = victoriasJugador;
        }  else if(ataqueJugador[index] === 'Agua' && ataqueEnemigo[index] === 'Fuego') {
            indexAmbosOponentes(index, index)
            crearMensaje('Ganaste');
            victoriasJugador++;
            spanVidasEnemigo.innerHTML = victoriasJugador;
        }  else if(ataqueJugador[index] === 'Tierra' && ataqueEnemigo[index] === 'Agua') {
            indexAmbosOponentes(index, index)
            crearMensaje('Ganaste')
            victoriasJugador++;
            spanVidasEnemigo.innerHTML = victoriasJugador;
        // }  else if(ataqueJugador[index] === 'Fuego' && ataqueEnemigo[index] === 'Veneno') {
        //     indexAmbosOponentes(index, index)
        //     crearMensaje('Ganaste')
        //     victoriasJugador++;
        //     spanVidasEnemigo.innerHTML = victoriasJugador;
        // }  else if(ataqueJugador[index] === 'Veneno' && ataqueEnemigo[index] === 'Agua') {
        //     indexAmbosOponentes(index, index)
        //     crearMensaje('Ganaste')
        //     victoriasJugador++;
        //     spanVidasEnemigo.innerHTML = victoriasJugador;
        // }  else if(ataqueJugador[index] === 'Viento' && ataqueEnemigo[index] === 'Tierra') {
        //     indexAmbosOponentes(index, index)
        //     crearMensaje('Ganaste')
        //     victoriasJugador++;
        // }  else if(ataqueJugador[index] === 'Veneno' && ataqueEnemigo[index] === 'Tierra') {
        //     indexAmbosOponentes(index, index)
        //     crearMensaje('Ganaste')
        //     victoriasJugador++;
        //     spanVidasEnemigo.innerHTML = victoriasJugador;
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje('Perdiste');
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo;
        }
    checkVidas();
    }
}

function checkVidas() {
    if(victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal('¡Esto fue un Empate!');
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal('¡Ganaste we, te ganaste un mes más suscripcióm Platzi!');
    } else {
        crearMensaje('¡Ganó el enemigo!');
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p');
    let nuevoAtaqueDelEnemigo = document.createElement('p');

    sectionMensaje.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensaje.innerHTML = resultadoFinal;

    sectionReiniciar.style.display = 'block';
}

function reiniciarJuego() {
    location.reload();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function pintarCanvas() {

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height,
    )
    mascotaJugadorObjeto.pintarMokepon();
    hipodogeEnemigo.pintarMokepon();
    capipepoEnemigo.pintarMokepon();
    ratigueyaEnemigo.pintarMokepon();
    if(mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
    }

}
// y & y - 5 va arriba
function moverArriba() {
    const mascotaJugadorObjeto = obtenerObjetosMascota();
    mascotaJugadorObjeto.velocidadY = -5
}
// x & x - 5 va izquierda
function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5
}
// y & y + 5 va abajo
function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5
}
// x & x + 5 va derecha
function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5
}

function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0;
    mascotaJugadorObjeto.velocidadY = 0;
}

function precionDeTecla(event) {
    console.log(event.key)
    switch (event.key) {
        case 'w':
            moverArriba()
            break;
        case 's':
            moverAbajo()
            break;
        case 'a':
            moverIzquierda()
            break;
        case 'd':
            moverDerecha()
            break;
        default:
            break;
    }
}

function inicarMapa() {
    mascotaJugadorObjeto = obtenerObjetosMascota(mascotaJugador);
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener('keydown', precionDeTecla)
    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetosMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = 
    mascotaJugadorObjeto.y
    const abajoEnemigo = 
    mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaEnemigo = 
    mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaEnemigo = 
    mascotaJugadorObjeto.x

    const arribaMascota = enemigo.y
    const abajoMascota = enemigo.y + enemigo.alto
    const derechaMascota = enemigo.x + enemigo.ancho
    const izquierdaMascota = enemigo.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return;
    }
    detenerMovimiento();
    clearInterval(intervalo);
    sectionSeleccionrAtaque.style.display = 'flex';
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo);
}

window.addEventListener('load', inicarJuego);