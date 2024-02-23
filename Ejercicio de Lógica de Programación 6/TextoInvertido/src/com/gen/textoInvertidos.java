package com.gen;

import java.util.Scanner;

public class textoInvertidos {
	public static void main(String[] args) {
        // Inicia Scanner
        Scanner scanner = new Scanner(System.in);

        // Solicitar la palabra y guardarla
        System.out.println("Ingrese una palabra:");
        String palabra = scanner.nextLine();

        // Convertir la palabra en un array
        char[] caracteres = palabra.toCharArray();

        // Invertir el array 
        for (int i = 0; i < caracteres.length / 2; i++) {
            char temp = caracteres[i];
            caracteres[i] = caracteres[caracteres.length - 1 - i];
            caracteres[caracteres.length - 1 - i] = temp;
        }

        // Crear un String con los caracteres invertidos
        String palabraAlreves = new String(caracteres);

        // Imprimir la palabra invertida
        System.out.println("Palabra al revés: " + palabraAlreves);

        
        scanner.close();
    }
}
