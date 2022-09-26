let pantalla=document.getElementById("plantilla");
let pincel = pantalla.getContext("2d");
function inicioJuego(){
    document.getElementById('nuevaPalabra').style.display= "none";
    document.getElementById('menuInicio').style.display= "none";
    document.getElementById('inciarTablero').style.display="flex";
    document.getElementById('titulo').style.display="flex";
    resetearValores();
    palabraSecreta();
    tablero();
    colorPiso();
    mostrarTeclado();
    document.addEventListener('keydown', listener);
}

function anhadirPalabra(){
    document.getElementById('menuInicio').style.display= "none";
    document.getElementById('nuevaPalabra').style.display= "block";

}

let validarTexto = document.querySelector("#nuevoTexto");
validarTexto.addEventListener("input",function(evento){
    this.value = capital_letters(evento.target.value);
})

function capital_letters(text) {
    text = text.toUpperCase();
    if (text.length != 9) {
        let valid = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        let text1 = ""
        for (let i of text) {
            text1 += (valid.includes(i)) ? i : "";
        }
        return text1;
    } else {
        return text.substring(0, text.length - 1);
    }
}



//boton de nuevo juego
let nuevoJuego = document.querySelector('#newGame');
nuevoJuego.addEventListener("click",function(){
    document.getElementById('inciarTablero').style.display= "block";
    inicioJuego();
    errores=0;
    
})

// botones cancelar y desistir
let cancelarIncio = document.querySelector('#desist');
cancelarIncio.addEventListener("click",function(){
    document.getElementById('menuInicio').style.display= "block";
    document.getElementById('inciarTablero').style.display= "none";
    errores=0;
});
cancelarIncio = document.querySelector('#cancel');
cancelarIncio.addEventListener("click",function(){
    document.getElementById('menuInicio').style.display= "block";
    document.getElementById('nuevaPalabra').style.display= "none";
});
