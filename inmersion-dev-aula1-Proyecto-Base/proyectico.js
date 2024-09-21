let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contraseña = document.getElementById("contrasena");
let botonLimpiar= document.getElementById("limpiar");
let mensaje= document.getElementById("mensaje");
let nivelForteleza= document.getElementById("nivelFortaleza");

const letrasMinusculas="abcdefghijklmnopqrstuvwxyz";
        const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numeros = "0123456789";
        const caracteresEspeciales = "!@#$%^&*()-_=+[]{}|;:,.<>?/~`";
function generar(){


    let numeroDigitado = parseInt(cantidad.value);
    let nivelSeleccionado= nivelForteleza.value;

    

    if(numeroDigitado <8){
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return;
    }
   
    let password = "";
    switch(nivelSeleccionado) {
        case "debiles":
            password = generarDebiles(numeroDigitado);
            break;
        case "medianas":
            password = generarMedianas(numeroDigitado);
            break;
        case "fuertes":
            password = generarFuertes(numeroDigitado);
            break;
        case "excelentes":
            password = generarExcelentes(numeroDigitado);
            break; 




}
    
contrasena.value = password;

validarFortaleza(password);

}
function generarExcelentes(longitud) {
    let incluirMayusculas = Math.random() > 0.3;
    let incluirNumeros = Math.random() > 0.4;
    let incluirCaracteresEspeciales = Math.random() > 0.5;

    let caracteres = letrasMinusculas;

    if (incluirMayusculas) {
        caracteres += letrasMayusculas;
    }

    if (incluirNumeros) {
        caracteres += numeros;
    }

    if (incluirCaracteresEspeciales) {
        caracteres += caracteresEspeciales;
    }

    return generarDesdeCaracteres(caracteres, longitud);
}


function generarDesdeCaracteres(caracteres, longitud) {
    let password = "";
    for (let i = 0; i < longitud; i++) {
        let caracterAleatorio = caracteres[Math.floor(Math.random() * caracteres.length)];
        password += caracterAleatorio;
    }
    return password;

    }


function validarFortaleza(password){

    let tieneLetra= /[a-z]/.test(password);
    let tieneMayuscula=/[A-Z]/.test(password);
    let tieneNumero=/\d/.test(password);
    let tieneCaracterEspecial=/[!@#$%^&*()\-_=+[\]{}|;:,.<>?/~`]/.test(password);

    let nivelBarra = document.querySelector("barraFortaleza.nivel");

    if (!barraNivel) {
        console.error("La barra de fortaleza no se encuentra en el DOM");
        return;
    }
    barraNivel.style.width = "0%"; 
    barraNivel.style.backgroundColor = "lightgrey";

    if (tieneLetra && tieneMayuscula && tieneNumero && tieneCaracterEspecial){
        mensaje.textContent="La contraseña es excelente";
        mensaje.style.color="green";
        barraNivel.style.width="100%";
        barraNivel.style.backgroundColor="green";
    }else if (tieneLetra && tieneMayuscula && tieneNumero){
        mensaje.textContent="La contraseña es fuerte";
        mensaje.style.color="blue";
        barraNivel.style.width="75%";
        barraNivel.style.backgroundColor="blue";

    }else if (tieneLetra && tieneMayuscula){
        mensaje.textContent= "La contraseña es mediana";
        mensaje.style.color="orange";
        barraNivel.style.width="50%";
        barraNivel.style.backgroundColor="orange";
    }else if (tieneLetra){
        mensaje.textContent="La contraseña es debil";
        mensaje.style.color="red";
        barraNivel.style.width="25%";
        barraNivel.style.backgroundColor="red";
    }else{
        mensaje.textContent="La contraseña no es valida";
        mensaje.style.color="black";
        barraNivel.style.width="0%"
    
    }
}



function limpiar(){
    cantidad.value = "";
    contraseña.value= "";
    mensaje.textContent="";
}
document.addEventListener("DOMContentLoaded", function() {
boton.addEventListener("click",generar)
botonLimpiar.addEventListener("click",limpiar);
});







