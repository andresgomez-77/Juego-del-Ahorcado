const generadorPalabras=["CORAZON","FE","ESPIRITU","AMOR"];
let palabraEscogida="";
let letras = "QWERTYUIOPASDFGHJKLÑZXCVBNM";
let ganar = 0;
let errores = 0;
let teclas = document.querySelector(".teclas");
let letrasEncontradas="";


let guardarIncio = document.querySelector("#save");
guardarIncio.addEventListener("click", function () {
    let text = document.getElementById("nuevoTexto").value;
    generadorPalabras.push(text);
    inicioJuego();
    document.getElementById("nuevoTexto").value = "";
});

var listener = function (event){
    let keyValue = event.key.toUpperCase();
    emparejar(keyValue);
}
function palabraSecreta(){
    const aleatorio = generadorPalabras[Math.floor(Math.random()*generadorPalabras.length)];
    palabraEscogida = aleatorio.toUpperCase();
    return palabraEscogida;
}


function finDelJuego() {
    if(comprobarTodasLasLetras(letrasEncontradas,palabraEscogida)){
        ganar=true;
        pincel.strokeStyle="black";
        pincel.font="bold 52px Achafsex";
        pincel.strokeText("Enhorabuena !!",100,200);
        pincel.fillText("Enhorabuena !!",100,200);
        pincel.strokeText("Ganaste.",100,250);
        pincel.fillText("Ganaste.",100,250);
    }
}

function comprobarTodasLasLetras(l,palabra){
    for(let i = 0; i <palabra.length;i++){
        if(!l.includes(palabra[i])){
            return false;
        }
    }
    return true;
}

function logica(letra){
    if(!letras.includes(letra)){
        return;
    }else{
        if(errores>8 || ganar){
            return;
        }
        if(!palabraEscogida.includes(letra) && !document.querySelector(".text").innerHTML.includes(letra)){
            if(errores<=8){
                dibujarMadera(errores);
                errores++;
                agregarLetraIncorrecta(letra,errores);
            }
            if(errores==8){
                pincel.strokeStyle="red";
                pincel.font="bold 52px Achafsex";
                pincel.strokeText("Que mal !!",100,200);
                pincel.fillText("Que mal !!",100,200);
                pincel.strokeText("Perdiste.",100,250);
                pincel.fillText("Perdiste.",100,250);  
            }
            return;
        }
        mostrarLetraAcertada(letra);
        finDelJuego();
    }
}
function mostrarTeclado(){
    for(let i = 0; i <letras.length;i++){
            teclas.innerHTML += '<button onclick="pintar(this)" class="tecla" id="tecla'+letras[i]+'">'+letras[i]+'</button>';
    }
}
function pintar(boton) {
    let datoBoton = boton.innerHTML;
    if(errores<10 && !ganar){
        if(!palabraEscogida.includes(datoBoton)){
            boton.style.background="#cf1500";
        }else{
            boton.style.background="#8f9044";
        }
        logica(datoBoton);
    }
}

function mostrarLetraAcertada(keyValue) {

    if(!letrasEncontradas.includes(keyValue)){
        letrasEncontradas += keyValue;
    }
    let anchura = 600/palabraEscogida.length;
    for(let i = 0; i <palabraEscogida.length;i++){
        if(palabraEscogida[i] == keyValue){
            pincel.fillStyle="red";
            pincel.font="bold 45px arial";
            pincel.fillText(keyValue,510+(anchura*i),597);
        }
    }

}
function agregarLetraIncorrecta(letra,errorLeft){
    pincel.font= "bold 40px Inter";
    pincel.LineWidth = 6;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle= "#F3F5F6";
    pincel.fillText(letra,535+(40*(10-errorLeft)),710,40);

}
function emparejar(letra) {
    let boton = document.getElementById("tecla"+letra);
    pintar(boton);
}


function resetearValores() {
    let letrasIncorretas = document.querySelector(".text")
    letrasIncorretas.innerHTML ="";
    ganar=false;
    letrasEncontradas="";
    teclas.innerHTML="";
}