package com.col;

import java.util.HashMap;
import java.util.Scanner;

public class colecciones {
    public static void main(String[] args) {
        // Crear un HashMap para almacenar las palabras y sus traducciones
        HashMap<String, String> diccionario = new HashMap<>();

        // Agregar las palabras y sus traducciones al HashMap
        diccionario.put("gato", "cat");
        diccionario.put("mago", "wizard");
        diccionario.put("princesa", "princess");
        diccionario.put("magia", "magic");
        diccionario.put("reina", "queen");
        diccionario.put("rosa", "rose");
        diccionario.put("estrella", "star");
        diccionario.put("corona", "crown");
        diccionario.put("bruja", "witch");
        diccionario.put("encanto", "charm");
        diccionario.put("vestido", "dress");
        diccionario.put("joya", "jewel");
        diccionario.put("bailar", "dance");
        diccionario.put("beso", "kiss");
        diccionario.put("amor", "love");
        diccionario.put("flor", "flower");
        diccionario.put("hada", "fairy");
        diccionario.put("cantar", "sing");
        diccionario.put("cuerpo", "body");
        diccionario.put("ojo", "eye");

        Scanner scanner = new Scanner(System.in);

        while (true) {
            // Solicitar al usuario que ingrese una palabra en español
            System.out.print("Ingrese una palabra en español: ");
            String palabraIngresada = scanner.nextLine();

            // Verificar si la palabra está presente en el diccionario
            if (diccionario.containsKey(palabraIngresada)) {
                String traduccion = diccionario.get(palabraIngresada);
                System.out.println("La traduccion de '" + palabraIngresada + " es: " + traduccion);
                break; // Salir del bucle mientras si la palabra está en el diccionario
            } else {
                System.out.println("Lo siento, la palabra '" + palabraIngresada + "' no está en el diccionario. Por favor, ingrese otra palabra.");
            }
        }


      
        scanner.close();
    }


}
