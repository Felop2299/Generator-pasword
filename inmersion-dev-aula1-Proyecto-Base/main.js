let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contraseña = document.getElementById("contrasena");
let botonLimpiar= document.getElementById("limpiar");
const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?/~`";

function generar(){


    let numeroDigitado = parseInt(cantidad.value);

    

    if(numeroDigitado <8){
        alert("La cantidad de caracteres tiene que ser mayor que 8");
    }
   
    let password = "";
for(let i=0; i < numeroDigitado; i++ ){

    let caracterAleatorio = cadenaCaracteres [Math.floor( Math.random() *cadenaCaracteres.length)];
    console.log(caracterAleatorio);

    password+=caracterAleatorio;




}
    
contrasena.value = password;


}

function limpiar(){
    cantidad.value = "";
    contraseña.value= "";
}

boton.addEventListener("click",generar)
botonLimpiar.addEventListener("click",limpiar);








