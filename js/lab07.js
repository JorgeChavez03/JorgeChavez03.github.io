//Funcion de colorear al hacer click
//declaramo variables
var btn=document.getElementById("colorear"),
    //
    lablP=document.getElementById("myLabelP"),
    lablP2=document.getElementById("myLabelP2"),
    //
    labl=document.getElementById("myLabel"),
    labl2=document.getElementById("myLabel2"),
    labl3=document.getElementById("myLabel3"),
    //
    lablR=document.getElementById("myLabelA"),
    lablR2=document.getElementById("myLabelA2"),
    lablR3=document.getElementById("myLabelA3"),
    contador=0;
//funcion que permitira cambiar de color
function cambiarColor(){

    if(contador==0){
        btn.classList.add("PintarBTN")
        //
        lablP.classList.add("PintarR");
        lablP2.classList.add("PintarR");
        //
        labl.classList.add("PintarR");
        labl2.classList.add("PintarR");
        labl3.classList.add("PintarR");
        //
        lablR.classList.add("PintarA");
        lablR2.classList.add("PintarA");
        lablR3.classList.add("PintarA");
        contador=1;

    }else{
        btn.classList.remove("PintarBTN")
        //
        lablP.classList.remove("PintarR");
        lablP2.classList.remove("PintarR");
        //
        labl.classList.remove("PintarR");
        labl2.classList.remove("PintarR");
        labl3.classList.remove("PintarR");
        //
        lablR.classList.remove("PintarA");
        lablR2.classList.remove("PintarA");
        lablR3.classList.remove("PintarA");
        contador=0;
    }
}    


btn.addEventListener("click",cambiarColor,true)

////////Funcino para separar apellidos
///////////////codigo de extraer ape materno y ape paterno

var btn2=document.getElementById("separar"),
    aPater=null,
    aMater=null,
    aNomb=null,
    aNombDos=null;

function separarApellidos(){
    var datos=document.getElementById("datos").value;

    aPater=datos.split(" ")[0];
    aMater=datos.split(" ")[1];
    aNomb=datos.split(" ")[2];
    aNombDos=datos.split(" ")[3];
    if(aNombDos==null){
        aNombDos="";
    }

    document.getElementById("aPaterno").value = aPater;
    document.getElementById("aMaterno").value = aMater;
    document.getElementById("aNombre").value = aNomb+" "+aNombDos;

}

btn2.addEventListener("click",separarApellidos,true)


/////////Funcion para convertir numero a mes y Edad

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function convMes(){

    var apeMate=document.getElementById("aPaterno").value,
        apePate=document.getElementById("aMaterno").value;

    //Fecha actual
    let hoy=new Date();
    let hYear=hoy.getFullYear();

    //fecha ingresada
    let fecha = new Date(document.getElementById("fecha").value);
    let mes_name = fecha.getMonth();
    let nacYear=fecha.getFullYear();

    //longitud de caracteres
    var longApe=apeMate.length+apePate.length;

    document.getElementById("mes").value=meses[mes_name];
    document.getElementById("edad").value=hYear-nacYear;
    document.getElementById("longitud").value=longApe;
}

btn2.addEventListener("click",convMes,true)


