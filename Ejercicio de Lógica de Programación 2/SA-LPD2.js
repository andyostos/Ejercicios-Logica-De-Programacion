//Declarar Variables
let valorCelcius;
let fahrenheitDOM;
let fahrenheitConv;
let kelvinDOM;
let kelvinConv;

//Funciones

function obtenerValor() {
   
    valorCelcius = document.getElementById("celciusInput").value;
    valorCelcius = Number(valorCelcius);
    
    if (isNaN(valorCelcius)) {
        alert('Inserte un numero en digitos, no con letras por favor')
        
        } else {
            let celsiusDOM = document.getElementById("celciusTemp");
            celsiusDOM.textContent = (`La temperatura en Celsius es: ${valorCelcius}°C`);


                fahrenheitConv = ((valorCelcius) * (9/5)) + 32;
                fahrenheitDOM = document.getElementById("fahrenheitTemp");
                fahrenheitDOM.textContent = (`La temperatura en Fahrenheit es: ${fahrenheitConv}°F`);
            
    

                kelvinConv = ((valorCelcius) + 273.15);
                kelvinDOM = document.getElementById("kelvinTemp");
                kelvinDOM.textContent = (`La temperatura en Kelvin es: ${kelvinConv}°K`)
            
                console.log(`La temperatura en Celsius es: ${valorCelcius}°C`);
                console.log(`La temperatura en Fahrenheit es: ${fahrenheitConv}°F`);
                console.log(`La temperatura en Kelvin es: ${kelvinConv}°K`);
            
        }

        
}



