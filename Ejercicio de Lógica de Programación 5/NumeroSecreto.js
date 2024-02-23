let numeroIngresado;
let n;
let nUsuario;
let errores =[];

// Generamos el numero Secreto.
let nSecreto = Math.round(Math.random() * 99) + 1;

console.log(nSecreto); // Muestra el número aleatorio generado;

function calcularNumSecreto(){

    //Con esto se reinicia el DOM
    document.getElementById("resultado-valoracion").textContent = "";
    document.getElementById("resultado").textContent = "";
    document.getElementById("lista-errores").textContent = "";
   
    //Gestionando el DOM

    numeroIngresado = document.getElementById('input-usuario').value;
   
    while(isNaN(numeroIngresado)){
       document.getElementById("resultado-valoracion").textContent="Ingrese un dato valido, un numero con un valor entre 1 a 100";
        return;
    }

    if(numeroIngresado < 1 || numeroIngresado > 100) {
        document.getElementById("resultado-valoracion").textContent = "Ingrese un dato valido, un numero con un valor entre 1 a 100";
        return;
    } else{
    //Le damos el valor de entero del numero ingresado a n.
    var n = parseInt(numeroIngresado);
    
        if( n == nSecreto){
        // Resultado Correcto
        var resultado = ("Felicidades, adivinaste el número secreto");
    
        // Mostrar el resultado en la consola o en otro lugar de tu interfaz
        var elementoResultado = document.getElementById("resultado");
        elementoResultado.textContent = resultado;
    } else {
        // Calcular el factorial Felicidades, adivinaste el número secreto
        var resultado = ('Ups, el número secreto es incorrecto, vuelve a intentarlo');

        //Agregamos el valor erroneo a errores
        errores.push(n);
    
        // Mostrar el resultado en la consola o en otro lugar de tu interfaz
        var elementoResultado = document.getElementById("resultado");
        elementoResultado.textContent = resultado;

        var elementoResultado = document.getElementById("lista-errores");
        elementoResultado.textContent = errores.join(", ");
        
    }
    }
   
}

