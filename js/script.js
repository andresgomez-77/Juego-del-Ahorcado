let pantallaDibuja = document.querySelector("#calculo");
pantallaDibuja.addEventListener("click", function () {
    ocultar_tag("pantallaDibuja");
});
let añadirPalabra = document.querySelector("#anhado");
añadirPalabra.addEventListener("click", function () {
    ocultar_tag("menuPalabraNueva");
});
pantallaDibuja = document.querySelector("#newGame");
pantallaDibuja.addEventListener("click", function () {
    ocultar_tag("pantallaDibuja");
});

let start = document.querySelector("#desist");
start.addEventListener("click", function () {
    ocultar_tag("start");
});

start = document.querySelector("#right");
start.addEventListener("click", function () {
    ocultar_tag("start");
});


function ocultar_tag(opcion) {
  if (opcion == "pantallaDibuja") {
      hideBox("none","block","none");
      pantallaDibujo();
      // teclado();
      limpiar();
  } else if (opcion == "menuPalabraNueva") {
      hideBox("block","none","none");
      limpiar();
  } else {
      hideBox("none","none","block");
      limpiar();
  }
}

function limpiar(){
  document.getElementById("text").value = "";
  document.getElementById("mensaje").innerHTML = "";
  document.getElementById("textoErroneo").innerHTML = "";
}
function hideBox(value_menu, value_pantallaDibuja, value_calculo){
  document.getElementById("menuPalabraNueva").style.display = value_menu;
  document.getElementById("pantalla").style.display = value_pantallaDibuja;
  document.getElementById("inicio").style.display = value_calculo;
}

function pantallaDibujo(){
  document.getElementById("inciarPantalla").innerHTML="";
  let pantallaDibujo1= document.getElementById("inciarPantalla")
  pantallaDibujo1.appendChild(canvas);
  let pantalla=document.querySelector("canvas");
  let pincel = pantalla.getContext("2d");
  canvas.setAttribute('id','board');
  pincel.fillStyle = "lightcyan";
  pincel.fillRect(0,0,1200,800); 
}


function palabraSecreta(){
  const generadorPalabras=["corazon","fe","espiritu","amor"]

  const aleatorio=generadorPalabras[Math.floor(Math.random()*generadorPalabras)]
}
// var contador=0;
// var intentos;
// var comp;
// var cont=0;
// var cursorr=4;
// var numcorrecto[]= "546";
// var ingreso[3];
/*lcd.clear();
lcd.setCursor(0,0);
lcd.print("pulse A para");
delay(1000);
lcd.clear();
lcd.setCursor(0,0);
lcd.print("confirmar su ");
delay(1000);
lcd.clear();
lcd.setCursor(0,0);
lcd.print("respuesta ");
delay(1000);
lcd.clear();
lcd.setCursor(0,0);
lcd.print("pulse B para");
delay(1000);
lcd.clear();
lcd.setCursor(0,0);
lcd.print("ver puntuacion");


ingreso[contador] = teclado.getKey(); // almacenar en la posicion contador la tecla pulsada
  if (ingreso[contador] != NO_KEY){
    switch (ingreso[contador]){
      
    lcd.clear();
  
    case 'A':
  

   comp = comprobacion(ingreso,numcorrecto);
   if(comp==3){
    ledverde();
    delay(1000);
    lcdtextoizq("enhorabuena");
    delay(600);
    lcdtextocentrado("es correcto");
    delay(2000);
    lcd.clear();
    lcdtextoizq("pulse 'D' para");
    delay(2000);
    lcdtextocentrado("ir a inicio");
    
    
  
    cont=cont+1;
   }
   else
   {
    
    intentos=intentos+1;
    ledrojo();
    equivocado();
   }
   break;
   case 'B':
   puntuacion ();
   break;
   case 'D':
   setup ();
   break;
    default:
    
                     escribirn(ingreso);
  }
  } 
  if (contador==3){  //Vuelve a hacer que el cursor comience a partir de cuadrito 6
  
   contador=0;
   cursorr=4;
   delay(1000);
     lcd.setCursor(4,1);
   lcd.print("   ");
    lcd.setCursor(5,1);
   lcd.print("   ");
    lcd.setCursor(6,1);
   lcd.print("   ");
 }
}


void lcdtextocentrado(String A){   //escribe el mensaje segundo renglon 1er cuadro
  lcd.setCursor(0,1);
  lcd.print("                   ");
  lcd.setCursor(5,1);
  lcd.print(A); //imprime el valor introducido
} //fin de lcdresetparatexto
             
void lcdtextoizq(String A){   //escribe el mensaje segundo renglon 6to cuadro
  lcd.setCursor(0,0);
  lcd.print("                  ");
  lcd.setCursor(0,0);
  lcd.print(A); //imprime el valor introducido
} //fin de lcdresetparatexto
          
void ledrojo(){ //enciende led rojo
   digitalWrite(50, HIGH);
  digitalWrite(51,LOW);
  delay(200);
   digitalWrite(50, LOW);
   delay(200);
    digitalWrite(50, HIGH);
} 
void ledverde(){ //prende led verde
  digitalWrite(50, LOW);
  digitalWrite(51, HIGH);
} 
int comprobacion(char *v1,char *v2){
  int igual = 0;
  for(int i = 0; i<=3; i++){
    if(v1[i]==v2[i])
    igual= igual + 1;
  }
  return igual;
}
void escribirn(char *v){ //escribe el valor de un array en la posicion  actual del contador
      lcd.setCursor(cursorr,1);
      lcd.print(v[contador]);
      v[contador+1]= (' ');
      delay(250);
      lcd.setCursor(cursorr,1);
      
      cursorr++;
      contador++;
      
}     

void puntuacion (){
lcd.clear();
lcdtextoizq("tu puntuacion es:");
lcd.clear();
lcd.print(cont);
delay(3000); 
lcd.clear();

    lcdtextoizq("pulse 'D' para");
    delay(2000);
    lcdtextocentrado("ir a inicio"); 
}

    

void equivocado(){
  

  if(intentos==1)
  {
    lcd.setCursor(15,0);
    lcd.print("|");
  }
    if(intentos==2)
  {
    lcd.setCursor(14,0);
    lcd.print("-");
  }
    if(intentos==3)
  {
    lcd.setCursor(13,0);
    lcd.print("-");
  }
    if(intentos==4)
  {
    lcd.setCursor(12,0);
    lcd.print("o");
  }
    if(intentos==5)
  {
    lcd.setCursor(11,0);
    lcd.print("-");
  }
    if(intentos==6)
  {
    lcd.setCursor(11,1);
    lcd.print("/");
  }
    if(intentos==7)
  {
    lcd.setCursor(10,0);
    lcd.print("-");
  }
    if(intentos==8)
  {
    lcd.setCursor(10,1);
    lcd.print("/");
  }
    if(intentos==9)
  {
    lcd.setCursor(9,0);
    lcd.print("-");
  }
    if(intentos==10)
  {
    lcd.setCursor(9,1);
    lcd.print("/");
    delay(7000);
    lcd.clear();
    lcdtextoizq("has perdido");
    delay(1000);
    lcd.clear();
    lcdtextoizq("pulse 'D' para");
    delay(2000);
    lcdtextocentrado("ir a inicio");
 
  }
  
}*/