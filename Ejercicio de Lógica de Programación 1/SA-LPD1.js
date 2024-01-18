//Práctica de comparación de números-Andy Ostos.
 
//Declarar variables
let numeroA = prompt('Elige el numero A');
let numeroB = prompt('Elige el numero B');
let numeroC = prompt('Elige el numero C');

let mayorOrden;
let menorOrden;
let numeroIgual;

//Converti Strings a number
numeroA = Number(numeroA);
numeroB = Number(numeroB);
numeroC = Number(numeroC);

//Comparacion de numeros
if (numeroA > numeroB) {
    if (numeroA > numeroC){
        if (numeroB > numeroC){
            mayorOrden = (`Mayor a Menor: ${numeroA}, ${numeroB}, ${numeroC}`);
            menorOrden = (`Menor a Mayor: ${numeroC}, ${numeroB}, ${numeroA}`);
            numeroIgual = ('Numeros Iguales: Ninguno');

            console.log(`Mayor a Menor:${numeroA}, ${numeroB}, ${numeroC}`)
            console.log(`Menor a Mayor:${numeroC}, ${numeroB}, ${numeroA}`)
                } else if (numeroC > numeroB) {
                        mayorOrden = (`Mayor a Menor: ${numeroA}, ${numeroC}, ${numeroB}`);
                        menorOrden = (`Menor a Mayor: ${numeroB}, ${numeroC}, ${numeroA}`);
                        numeroIgual = ('Numeros Iguales: Ninguno');

                         console.log(`Mayor a Menor:${numeroA}, ${numeroC}, ${numeroB}`)
                         console.log(`Menor a Mayor:${numeroB}, ${numeroC}, ${numeroA}`)
                    } else if (numeroB === numeroC) {
                        mayorOrden = (`Mayor a Menor: ${numeroA}, ${numeroB}, ${numeroC}`);
                        menorOrden = (`Menor a Mayor: ${numeroC}, ${numeroB}, ${numeroA}`);
                        numeroIgual = ('Numero B es igual a Numero C');

                        console.log(`Mayor a Menor:${numeroA}, ${numeroB}, ${numeroC}`)
                        console.log(`Menor a Mayor:${numeroC}, ${numeroB}, ${numeroA}`)
                        console.log('numero B es igual a numero C')
                        } else { console.log('ERROR!')}
    } else if (numeroC > numeroA){
        mayorOrden = (`Mayor a Menor: ${numeroC}, ${numeroA}, ${numeroB}`);
        menorOrden = (`Menor a Mayor: ${numeroB}, ${numeroA}, ${numeroC}`);
        numeroIgual = ('Numeros Iguales: Ninguno');

        console.log(`Mayor a Menor:${numeroC}, ${numeroA}, ${numeroB}`)
        console.log(`Menor a Mayor:${numeroB}, ${numeroA}, ${numeroC}`)
        } else if (numeroA === numeroC){
            mayorOrden = (`Mayor a Menor: ${numeroA}, ${numeroC}, ${numeroB}`);
            menorOrden = (`Menor a Mayor: ${numeroB}, ${numeroC}, ${numeroA}`);
            numeroIgual = ('Numero A es igual a Numero C');

            console.log(`Mayor a Menor:${numeroA}, ${numeroC}, ${numeroB}`)
            console.log(`Menor a Mayor:${numeroB}, ${numeroC}, ${numeroA}`)
            console.log('numero A es igual a numero C')
            } else { console.log('ERROR!')}

} else if (numeroB > numeroA){
    if (numeroB > numeroC){
        if (numeroA > numeroC) {
            mayorOrden = (`Mayor a Menor: ${numeroB}, ${numeroA}, ${numeroC}`);
            menorOrden = (`Menor a Mayor: ${numeroC}, ${numeroA}, ${numeroB}`);
            numeroIgual = ('Numeros Iguales: Ninguno');

            console.log(`Mayor a Menor:${numeroB}, ${numeroA}, ${numeroC}`)
            console.log(`Menor a Mayor:${numeroC}, ${numeroA}, ${numeroB}`)
            } else if (numeroC > numeroA) {
                mayorOrden = (`Mayor a Menor: ${numeroB}, ${numeroC}, ${numeroA}`);
                menorOrden = (`Menor a Mayor: ${numeroA}, ${numeroC}, ${numeroB}`);
                numeroIgual = ('Numeros Iguales: Ninguno');

                console.log(`Mayor a Menor:${numeroB}, ${numeroC}, ${numeroA}`)
                console.log(`Menor a Mayor:${numeroA}, ${numeroC}, ${numeroB}`)
                } else if (numeroA === numeroC) {
                    mayorOrden = (`Mayor a Menor: ${numeroB}, ${numeroA}, ${numeroC}`);
                    menorOrden = (`Menor a Mayor: ${numeroC}, ${numeroA}, ${numeroB}`);
                    numeroIgual = ('Numero A es igual a Numero C');

                    console.log(`Mayor a Menor:${numeroB}, ${numeroA}, ${numeroC}`)
                    console.log(`Menor a Mayor:${numeroC}, ${numeroA}, ${numeroB}`) 
                    console.log('numero A es igual a numero C')
                    }else { console.log('ERROR!')}
    } else if (numeroC > numeroB){
        mayorOrden = (`Mayor a Menor: ${numeroC}, ${numeroB}, ${numeroA}`);
        menorOrden = (`Menor a Mayor: ${numeroA}, ${numeroC}, ${numeroB}`);
        numeroIgual = ('Numeros Iguales: Ninguno');

        console.log(`Mayor a Menor:${numeroC}, ${numeroB}, ${numeroA}`)
        console.log(`Menor a Mayor:${numeroA}, ${numeroC}, ${numeroB}`)
        } else if (numeroC === numeroB){
            mayorOrden = (`Mayor a Menor: ${numeroB}, ${numeroC}, ${numeroA}`);
            menorOrden = (`Menor a Mayor: ${numeroA}, ${numeroC}, ${numeroB}`);
            numeroIgual = ('Numero B es igual a Numero C');

            console.log(`Mayor a Menor:${numeroB}, ${numeroC}, ${numeroA}`)
            console.log(`Menor a Mayor:${numeroA}, ${numeroC}, ${numeroB}`) 
            console.log('numero B es igual a numero C')
            } else { console.log('ERROR!')}
} else if (numeroA === numeroB) {
    if (numeroA === numeroC){
        mayorOrden = (`Mayor a Menor: ${numeroA}, ${numeroB}, ${numeroC}`);
        menorOrden = (`Menor a Mayor:${numeroC}, ${numeroB}, ${numeroA}`);
        numeroIgual = ('Numero A es igual a Numero B y a Numero C');

        console.log(`Mayor a Menor:${numeroA}, ${numeroB}, ${numeroC}`)
        console.log(`Menor a Mayor:${numeroC}, ${numeroB}, ${numeroA}`)
        console.log('numero A es igual a numero B y a numero C')
    } else if (numeroC > numeroA) {
        mayorOrden = (`Mayor a Menor: ${numeroC}, ${numeroB}, ${numeroA}`);
        menorOrden = (`Menor a Mayor: ${numeroA}, ${numeroC}, ${numeroB}`);
        numeroIgual = ('Numero A es igual Numero B');

        console.log(`Mayor a Menor:${numeroC}, ${numeroB}, ${numeroA}`)
        console.log(`Menor a Mayor:${numeroA}, ${numeroC}, ${numeroB}`)
        console.log('numero A es igual a numero B')
        } else if (numeroA > numeroC) {
            mayorOrden = (`Mayor a Menor: ${numeroA}, ${numeroB}, ${numeroC}`);
            menorOrden = (`Menor a Mayor: ${numeroC}, ${numeroB}, ${numeroA}`);
            numeroIgual = ('Numero A es igual a Numero B');

            console.log(`Mayor a Menor:${numeroA}, ${numeroB}, ${numeroC}`)
            console.log(`Menor a Mayor:${numeroC}, ${numeroB}, ${numeroA}`)
            console.log('numero A es igual a numero B') 
        }  else { console.log('ERROR!')}
}  else { console.log('ERROR!')}

//Manipulacion del DOM
let numADOM = document.getElementById("numA");
numADOM.textContent = (`Numero A: ${numeroA}`);

let numBDOM = document.getElementById("numB");
numBDOM.textContent = (`Numero B: ${numeroB}`);

let numCDOM = document.getElementById("numC");
numCDOM.textContent = (`Numero C: ${numeroC}`);

//Segunda Parte del DOM
let ascendenteOr = document.getElementById("OrdenDescendente");
ascendenteOr.textContent = (mayorOrden);

let descententeOr = document.getElementById("OrdenA");
descententeOr.textContent = (menorOrden);

let igualesOr = document.getElementById("NumerosIguales");
igualesOr.textContent = (numeroIgual);

//Sufri haciendo el DOM pero alfinal si lo logre que emocion (〃 ^ ▽ ^ 〃)