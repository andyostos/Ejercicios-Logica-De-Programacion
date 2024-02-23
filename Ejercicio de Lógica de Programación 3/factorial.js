//declaro 

let numeroIngresado;
let n;


function calcularFactorial(){

    //Con esto se reinicia el DOM
    document.getElementById("resultado-valoracion").textContent = "";
    document.getElementById("resultado").textContent = "";
   
    //Gestionando el DOM

    numeroIngresado = document.getElementById('input-factorial').value;
   
    while(isNaN(numeroIngresado)){
       document.getElementById("resultado-valoracion").textContent="Dato no valido, Introduzca un numero";
        return;
    }
    
    //Le damos el valor de entero del numero ingresado a n.
    var n = parseInt(numeroIngresado);
    
    // Calcular el factorial
    var resultado = factorial(n);
    
    // Mostrar el resultado en la consola o en otro lugar de tu interfaz
    var elementoResultado = document.getElementById("resultado");
    elementoResultado.textContent = resultado;
   
}

function factorial(n){
        // Caso base: Si n es 0 o 1, el factorial es 1
        if (n <= 0) {
            return 1;
        }

        // Caso recursivo: n! = n * (n-1)!
        return n * factorial(n - 1);
}





