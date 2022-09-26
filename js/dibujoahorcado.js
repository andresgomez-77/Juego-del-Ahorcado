function tablero() {
    let pantalla=document.getElementById("plantilla");
    let pincel = pantalla.getContext("2d");
    pincel.lineWidth = 14;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "#020024";
    pincel.strokeStyle = "black"
    pincel.fillRect(0,0,1200,800); 
    pincel.beginPath();
    pincel.moveTo(650,500);
    pincel.lineTo(900, 500);
    pincel.stroke();
    pincel.closePath();
    dibujarMadera(0);
    lineasLetras();
}
function colorPiso(){
    pincel.lineWidth = 8;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.strokeStyle = "#6a4139"
    pincel.beginPath();
    pincel.moveTo(650,500);
    pincel.lineTo(900,500);
    pincel.stroke();
    pincel.closePath();
}
function lineasLetras(){
    pincel.lineWidth = 2;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.strokeStyle = "#6a4139"
    let anchura = 600/palabraEscogida.length;
    for(let i=0; i < palabraEscogida.length;i++){
        pincel.moveTo(500+(anchura*i),600);
        pincel.lineTo(550+(anchura*i),600);
    }
    pincel.stroke();
    pincel.closePath();
}

function cabeza(){
    pincel.fillStyle="#fdddca";
    pincel.beginPath();
    pincel.arc(845,245,35,0,2*3.14);
    pincel.fill();
    pincel.stroke();
    let img = new Image();
    img.src = "img/cara.png";
    img.onload = function(){
        pincel.drawImage(img, 805, 215,80,60);
    }
}

function madera(x, y, base, altura, color){
    pincel.fillStyle=color;
    pincel.fillRect(x,y,base,altura);
    pincel.strokeStyle="black";
    pincel.strokeRect(x,y,base,altura);
}

function dibujarMadera(errores){
    if(errores==1){
        madera(650,155,20,340,"#6a4139"); 
    }
    else if(errores==2){
        madera(650,150,200,20,"#6a4139"); 
    }
    else if(errores==3){
        madera(840,170,8,40,"#ece2c6");
    }    
    else if(errores==4){
        cabeza(); 
    }
    else if(errores==5){
        madera(840,280,10,110,"blue"); 
    }
    else if(errores==6){
        madera(800,300,100,10,"#fdddca"); 
    }    
    else if(errores==7){
        madera(835,385,10,80,"#fdddca"); 
        madera(845,385,10,80,"#fdddca");
    }       
}