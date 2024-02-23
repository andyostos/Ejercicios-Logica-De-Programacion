package com.generation;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class diccionario {
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

        // Creamos un array para obtener las palabras del HashMap
        List<String> palabrasHashMap = new ArrayList<>(diccionario.keySet());

        // Seleccionamos al azar 5 palabras
        List<String> palabrasAlAzar = new ArrayList<>();
        Random random = new Random();
        for (int i = 0; i < 5; i++) {
            String palabraAzar = palabrasHashMap.get(random.nextInt(palabrasHashMap.size()));
            palabrasAlAzar.add(palabraAzar);
        }

        // Mostrar las palabras seleccionadas
        System.out.println("lista de  palabras en español:");
        
        for (String palabrasSeleccion : palabrasAlAzar) {
            System.out.println(palabrasSeleccion);
        }
        
       
     // Pedirle al usuario que ingrese las traducciones
        Scanner scanner = new Scanner(System.in);
        HashMap<String, String> traduccionesUsuario = new HashMap<>();
        for (String palabraEspanol : palabrasAlAzar) {
            System.out.print("Ingrese la traducción de '" + palabraEspanol + "': ");
            String traduccionUsuario = scanner.nextLine();
            traduccionesUsuario.put(palabraEspanol, traduccionUsuario);
        }

        // Separar las palabras traducidas correctamente e incorrectamente en diferentes Arrays
        List<String> pCorrectas = new ArrayList<>();
        List<String> pIncorrectas = new ArrayList<>();
        for (String palabraEspanol : palabrasAlAzar) {
            String traduccionDiccionario = diccionario.get(palabraEspanol);
            String traduccionUsuario = traduccionesUsuario.get(palabraEspanol);
            if (traduccionUsuario != null && traduccionUsuario.equalsIgnoreCase(traduccionDiccionario)) {
                pCorrectas.add(palabraEspanol);
            } else {
                pIncorrectas.add(palabraEspanol);
            }
        }

        // Mostrar las palabras traducidas correctamente e incorrectamente
        System.out.println("\nPalabras traducidas correctamente:");
        for (String palabraCorrecta : pCorrectas) {
        	String traduccionCorrecta = diccionario.get(palabraCorrecta);
            System.out.println(palabraCorrecta + " - " + traduccionCorrecta);
        }

        System.out.println("\nPalabras traducidas incorrectamente:");
        for (String palabraIncorrecta : pIncorrectas) {
        	String traduccionUsuario = traduccionesUsuario.get(palabraIncorrecta);
            System.out.println(palabraIncorrecta + " - " + traduccionUsuario);
        }

        // Cerrar el Scanner
        scanner.close();
    }
}
