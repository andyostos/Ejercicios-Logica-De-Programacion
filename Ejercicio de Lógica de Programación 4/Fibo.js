//declaro 
let numeroIngresado;
let n;

function calcularFibo(){

    //Con esto se reinicia el DOM
    document.getElementById("resultado-valoracion").textContent = "";
    document.getElementById("resultado").textContent = "";
   
    //Gestionando el DOM

    numeroIngresado = document.getElementById('input-fibo').value;
   
    while(isNaN(numeroIngresado)){
       document.getElementById("resultado-valoracion").textContent="Dato no valido, Introduzca un numero";
        return;
    }
    
    //Le damos el valor de entero del numero ingresado a n.
    var n = parseInt(numeroIngresado);
    
    // Calcular el factorial
    var resultado = fibonacci(n);
    
    // Mostrar el resultado en la consola o en otro lugar de tu interfaz
    var elementoResultado = document.getElementById("resultado");
    elementoResultado.textContent = resultado;
   
}
//Calcular la secuencia
function fibonacci(n) {
    var fibo = [0, 1];
    for (var i = 2; i < n; i++) {
      fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
    return fibo;
    
}
