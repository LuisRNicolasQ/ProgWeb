/*function pulsar(){
 var CabeceraPágina;
 CabeceraPágina=document.getElementById("CabeceraPágina");
 CabeceraPágina.addEventListener('click',alertaClick);
 function alertaClick(){
 alert("El contenido es "+CabeceraPágina.innerHTML);
 }
}
addEventListener('load',pulsar);

function pulsar(){
 var tit;
 tit=document.getElementsByTagName("h1")[0];
 tit.addEventListener('click',alertaClick);
 function alertaClick(){
 alert("El contenido es "+tit.innerHTML);
 }
}
addEventListener('load',pulsar);


function pulsar(){
 var galería;
 galería=document.getElementsByClassName("galeria")[0];
 galería.addEventListener('click',alertaClick);
 function alertaClick(){
 alert("El contenido es "+galería.innerHTML);
 }
}
addEventListener('load',pulsar);

function pulsar(){
 var foto1;
 foto1=document.querySelectorAll("#sobreContxita img")[0];
 foto1.addEventListener('click',alertaClick);
 function alertaClick(){ alert("Ésta es la foto.");
 }
}
addEventListener('load',pulsar);

function pulsar(){
 var fotos;
 fotos=document.querySelectorAll(".galeria img");
 for(var No=0; No<fotos.length; No++){
 fotos[No].addEventListener('click',alertaClick);
 function alertaClick(){
 alert("Ésta es una foto ");
 }
 }
}
addEventListener('load',pulsar);

function cambio(){
 var títuloPág = document.querySelector("#CabeceraPágina h1");
 títuloPág.addEventListener('click',cambioTit);
function cambioTit(){
títuloPág.innerHTML = "Musicoterapia";
 }
 }

function cambio(){
 var subtítuloPág = document.querySelector("#CabeceraPágina h2");
 var texto = subtítuloPág.innerHTML;
 subtítuloPág.addEventListener('click',cambioTit);
 function cambioTit(){
subtítuloPág.innerHTML = "Musicoterapia " + texto;
 }
}
addEventListener('load',cambio)

function cambio(){
 var imagen1 = document.querySelector("#sobreContxita img");
 imagen1.addEventListener('click',cambioFoto);
 function cambioFoto(){
 imagen1.src="Imagenes/CBdePie.jpg"
 }
 }
addEventListener('load',cambio)

function iniciar(){
 var imagen1 = document.querySelector("#sobreContxita img"); //la imagen del doc
 var fuentes = new Array(); //crea matriz de fuentes
   fuentes[0]="Imagenes/ContxitaBentz02.jpg";
   fuentes[1]="Imagenes/CBdePie.jpg";
   fuentes[2]="Imagenes/CBdePie1.jpg";
 var x = 0; //Variables que controlan el bucle
 var i = fuentes.length;
 function cambiar() { //Bucle
   x++;
   if (x == i) {
    x = 0;
    }
 imagen1.src=fuentes[x];//cambia la fuente de la imagen por valor suministrado en bucle
 }
 imagen1.addEventListener('click',cambiar)
}
window.onload=iniciar;

var fondo
function iniciar(){
 fondo=document.getElementById('principal');
 fondo.addEventListener('click',cambio);
 function cambio(){
   //fondo.style.backgroundColor='#FFCC66';
   fondo.style.color='#FFCC66';
   }
 }
addEventListener('load',iniciar);

var logo
function iniciar(){
 logo=document.querySelector('#CabeceraPágina img');
 logo.addEventListener('click',cambio);
 function cambio(){
 logo.style.border='5px solid black';
 }
 }
addEventListener('load',iniciar);

var blog, contenedor
function iniciar(){
 blog=document.querySelector('#blog');
 //alert(blog.tagName);
 alert(blog.parentNode);
 contenedor=blog.parentNode;
 alert(contenedor.nodeName+"/"+contenedor.id)
 contenedor.style.border='black solid 3px'
 }
addEventListener('load',iniciar);
 //}
//addEventListener('load',iniciar);

var barra, botón
function iniciar(){
 barra=document.querySelector('#barra');
 //botón=barra.firstElementChild;
 //botón=barra.firstElementChild.firstElementChild;
 botón=barra.firstElementChild.lastElementChild;
 //alert(botón.tagName)
 botón.previousElementSibling.style.border='black solid 3px'
 //botón.style.border='black solid 3px'
 }
addEventListener('load',iniciar);

var cabecera, estilo
 function iniciar(){
 cabecera=document.querySelector('#CabeceraPágina');
 estilo=cabecera.className;
 botones=document.querySelector('#barra ul');
 botones.addEventListener('mouseover',cambiar);
 function cambiar(){ botones.className = estilo;
 };
 botones.addEventListener('mouseout',volver);
 function volver(){
 botones.className = "null";
 };
 //alert(estilo)
 }
addEventListener('load', iniciar);

function iniciar(){
 var botones, x
 botones=document.querySelectorAll('#barra ul li');
 for(x = 0; x < botones.length; x++){
 botones[x].addEventListener('mouseover',cambiar)
 botones[x].addEventListener('mouseout',volver)
 function cambiar(botones){
 this.className='sombra'
 };
 function volver(botones){
 this.className='null'
 };
 };
 }
addEventListener('load', iniciar);
*/
var lienzodoc,lienzo
function iniciar(){
 var lienzodoc=document.getElementById('lienzo');
 lienzo=lienzodoc.getContext('2d');
 var imagen=document.querySelector(".sombra img");
 var patrón=lienzo.createPattern(imagen, "repeat");
 //var patrón=lienzo.createPattern(imagen, "no-repeat");
 //var patrón=lienzo.createPattern(imagen, "repeat-x");
 lienzo.fillStyle=patrón;
 lienzo.strokeStyle=patrón;
 lienzo.lineWidth=15;
 //lienzo.strokeStyle="green";
 lienzo.moveTo(0,0);
 lienzo.lineTo(50,50);
 //lienzo.stroke();
 lienzo.lineTo(0,50);
 //lienzo.fillStyle="red";
 //lienzo.lineJoin="bevel";
 lienzo.lineJoin="round";
 lienzo.fill();
 lienzo.stroke();
 lienzo.fillRect(100,100,350,150);
 lienzo.clearRect(150,125,250,100);
 lienzo.strokeRect(30,30,250,150);
 //lienzo.translate(150,150);
 //lienzo.rotate(Math.PI/180*45);
 //lienzo.translate(150,-200);
 //lienzo.scale(1,2);
 lienzo.translate(550,550);
 //lienzo.scale(-1,-2);
 lienzo.scale(-0.5,-2);
 //lienzo.clearRect(150,125,250,100);
 lienzo.beginPath();
 lienzo.strokeStyle="blue";
 lienzo.moveTo(225,300);
 lienzo.lineTo(550,300);
 lienzo.lineCap="round";
 lienzo.stroke();
 lienzo.closePath();
 lienzo.beginPath();
 //degradado1=lienzo.createLinearGradient(0,0,100,200);
 //degradado1=lienzo.createLinearGradient(450,0,550,0);
 degradado1=lienzo.createRadialGradient(500,50,10,500,50,40);
 //degradado1.addColorStop(0,"#F00");
 degradado1.addColorStop(0,"#FF0");
 degradado1.addColorStop(.5,"#0F0");
 degradado1.addColorStop(1,"#00F");
 lienzo.lineWidth=10;
 lienzo.strokeStyle="orange";
 lienzo.beginPath();
 lienzo.arc(500,50,50,0, Math.PI*2);
 //lienzo.arc(500,50,30,0, Math.PI*2);
 lienzo.stroke();
 lienzo.fillStyle=degradado1;
 lienzo.fill();
 lienzo.closePath();
 lienzo.beginPath();
 lienzo.strokeStyle="yellow";
 lienzo.beginPath();
 //lienzo.arc(50,300,30,Math.PI/2,3*Math.PI/2);
 //lienzo.arc(50,300,30,Math.PI/2,3*Math.PI/2,"false");
 lienzo.arc(50,300,50,Math.PI/2,3*Math.PI/2,"false");
 lienzo.closePath();
 //lienzo.lineTo(80, 300);
 lienzo.stroke();
 lienzo.fill();
 lienzo.beginPath();
 lienzo.moveTo(200,70);
 lienzo.quadraticCurveTo(220, 150, 350,70);
 lienzo.stroke();
 lienzo.closePath();
 lienzo.beginPath();
 lienzo.moveTo(200, 280);
 lienzo.bezierCurveTo(220, 100, 300, 460, 350, 280);
 lienzo.stroke();
 lienzo.closePath();
 lienzo.beginPath();
 //lienzo.arc(220,150,2,0,Math.PI*2);
 lienzo.arc(150,150,2,0,Math.PI*2);
 lienzo.stroke();
 lienzo.beginPath();
 lienzo.fillStyle="gray";
 lienzo.font="bold 40px arial, sans-serif";
 //lienzo.textAlign="center";
 lienzo.textAlign="start";
 //lienzo.textBaseline="middle";
 lienzo.textBaseline="top";
 lienzo.strokeText("Javascript", 150,150);
 lienzo.fillText("Javascript", 150,150);
 lienzo.closePath();

 //var imagen=document.querySelector(".sombra img");
 //var imagen=document.createElement('img');
 //imagen.src="Imagenes/Bentz.jpg";
 //imagen.name=bentz;
 //imagen.onload = function(){
 //lienzo.drawImage(imagen,250,220);
 //};
 lienzo.drawImage(imagen,900,0,100,100,450,250,90,90);
 
 var video1, reproducir, silenciar, volumen, intervalo;
 video1 = document.getElementById('video1');
 reproducir = document.getElementById('Reproducir');
 silenciar = document.getElementById('Silencio');
 reproducir.addEventListener('click', rep);
 video1.addEventListener('ended', reiniciar);
 silenciar.addEventListener('click', callar);
 volumen= document.getElementById('volume');
 volumen.addEventListener('change', nivelvolumen);
 video1.addEventListener('click', pantallacompleta);
 function rep(){
  if(reproducir.value=='Reproducir'){
  video1.play();
  reproducir.value = 'Detener';
  intervalo=setInterval(progresar,500);
  }
 else{
  video1.pause()
  reproducir.value = 'Reproducir';
  window.clearInterval(intervalo)
  }
 }

 function callar(){
 if(silenciar.value=='Escuchar'){
 video1.muted=false;
 silenciar.value = 'Silenciar';
 }else{
  video1.muted=true;
  silenciar.value = 'Escuchar';
  }
 }
 
 function reiniciar(){
  reproducir.value='Reproducir'
 }

 function progresar(){
 var relleno=parseInt(video1.currentTime*244/video1.duration);
 if(video1.ended==false){
 progreso.style.width=relleno+'px';
 }else{
 progreso.style.width='0px';
 }
}

function nivelvolumen(){
  video1.volume=volumen.value;
  video1.muted=false;
  silenciar.value="Silenciar";
  }

}

function pantallacompleta(){
 if(!video1.webkitfullscreenElement){
 video1.webkitRequestFullscreen();
 video1.play();
 }
}

addEventListener("load", iniciar);