var contador=0;

function cambioUno(){

    if(contador==0){
        document.getElementById("txtCambiarUno").innerHTML="Lectura completada";
        contador=1;
    }else{
        document.getElementById("txtCambiarUno").innerHTML="Lectura de 3 min";
        contador=0;
    }

}

function cambioUno(){

    if(contador==0){
        document.getElementById("txtCambiarUno").innerHTML="Lectura completada";
        contador=1;
    }else{
        document.getElementById("txtCambiarUno").innerHTML="Lectura de 3 min";
        contador=0;
    }

}

function cambioTres(){

    if(contador==0){
        document.getElementById("txtCambiarTres").innerHTML="Lectura completada";
        contador=1;
    }else{
        document.getElementById("txtCambiarTres").innerHTML="Lectura de 3 min";
        contador=0;
    }

}

var date=new Date;

function fecha(){
    
    if(contador==0){
        document.getElementById("mostrarFecha").innerHTML="Fecha: " +date;
        contador=1;
    }else{
        document.getElementById("mostrarFecha").innerHTML="";
        contador=0;
    }
}

function mostraImagenes(){

    var imagenes= document.getElementById("imgs"),
        imgReal=document.getElementById("imgMostrar");
    
    if (imagenes.style.display === "block") {
        imgReal.style.display = "block";
        imagenes.style.display = "none";
    } else {
        imagenes.style.display = "block";
        imgReal.style.display = "none";
    }
}