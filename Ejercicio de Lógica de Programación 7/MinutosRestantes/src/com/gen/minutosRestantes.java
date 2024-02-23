package com.gen;
import java.util.Scanner; 

public class minutosRestantes {
    public static void main(String[] args) {
    	// Iniciamos el scanner
        Scanner scanner = new Scanner(System.in);
        //Creamos el Array de los dias de la semana
        String[] diasSemana = {"lunes", "martes", "miércoles", "jueves", "viernes"};
        //Minutos restantes para el fin de semana al comenzar cada día
        int[] minutosSemana = {6660, 5220, 3780, 2340, 900}; 
        //Declaramos las variables de los datos que vamos a solicitar 
        String dia = "";
        int hora = -1;
        int minutos = -1;
        
        boolean datosValidos = false;
        
        //Solicitamos el dia
        while (!datosValidos) {
            System.out.print("Ingrese un día de la semana (lunes a viernes): ");
            dia = scanner.nextLine().toLowerCase();
        //Verificamos si el dia es valido   
            for (int i = 0; i < diasSemana.length; i++) {
                if (dia.equals(diasSemana[i])) {
                    datosValidos = true;
                    break;
                }
            }
            
            if (!datosValidos) {
                System.out.println("Error: ¡Día de la semana inválido!");
            }
        }
        //Reinicimaos la verificacion
        datosValidos = false;
        //Solicitamos la hora
        while (!datosValidos) {
            System.out.print("Ingrese la hora (0 a 23): ");
            hora = scanner.nextInt();
         // Limpiar el scanner
            scanner.nextLine(); 
            
            //Verificamos si el la hora es valida 
            if (hora >= 0 && hora <= 23) {
                datosValidos = true;
            } else {
                System.out.println("Error: ¡Hora inválida!");
            }
        }
        //Reinicimaos la verificacion
        datosValidos = false;
        //Solicitamos los minutos
        while (!datosValidos) {
            System.out.print("Ingrese los minutos (0 a 59): ");
            minutos = scanner.nextInt();
            scanner.nextLine(); 
            //Verificamos si los minutos son validos
            if (minutos >= 0 && minutos <= 59) {
                datosValidos = true;
            } else {
                System.out.println("Error: ¡Minutos inválidos!");
            }
        }
        
        //Declaramos variables para calcular los minutos obtenidos y faltantes
        int minutosTotales = hora * 60 + minutos;
        int minutosFaltantes = 0;
        
        //Creamos un bucle sqitch para seleccionar el caso que tenemos
        switch (dia) {
            case "lunes":
                minutosFaltantes = minutosSemana[0] - minutosTotales;
                break;
            case "martes":
                minutosFaltantes = minutosSemana[1] - minutosTotales;
                break;
            case "miércoles":
                minutosFaltantes = minutosSemana[2] - minutosTotales;
                break;
            case "jueves":
                minutosFaltantes = minutosSemana[3] - minutosTotales;
                break;
            case "viernes":
                minutosFaltantes = minutosSemana[4] - minutosTotales;
                break;
        }
        
        //imprimimos el resultado
        System.out.println("Faltan " + minutosFaltantes + " minutos para el fin de semana.");
    }
}