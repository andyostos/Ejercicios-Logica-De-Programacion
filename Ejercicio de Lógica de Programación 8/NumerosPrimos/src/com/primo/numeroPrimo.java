package com.primo;
import java.util.Scanner;
public class numeroPrimo {
	
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //declaramos los Arrays
        int[] numeros = new int[10];
        int[] primos = new int[10];
        int[] noPrimos = new int[10];
        //Declaramos las variables para ingresar los numeros para los acomodos
        int indicePrimos = 0;
        int indiceNoPrimos = 0;

        System.out.println("Ingrese 10 números:");

        // Leer los números y separar primos de no primos
        for (int i = 0; i < 10; i++) {
        	//Aqui almacenamos los numeros hasta que sean 10
            numeros[i] = scanner.nextInt();
            //Aqui almacenamos los numeros si son primos o no
            if (esPrimo(numeros[i])) {
                primos[indicePrimos++] = numeros[i];
            } else {
                noPrimos[indiceNoPrimos++] = numeros[i];
            }
        }

        // Mostrar el array original
        System.out.println("Array Original:");
        for (int i = 0; i < 10; i++) {
            System.out.println("Índice " + i + ": " + numeros[i]);
        }

        // Mostrar el array con primos al principio
        System.out.println("Array con primos al principio:");
        for (int i = 0; i < indicePrimos; i++) {
            System.out.println("Índice " + i + ": " + primos[i]);
        }
        for (int i = 0; i < indiceNoPrimos; i++) {
            System.out.println("Índice " + (indicePrimos + i) + ": " + noPrimos[i]);
        }
    }

    // Método para verificar si un número es primo
    public static boolean esPrimo(int numero) {
        if (numero <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i == 0) {
                return false;
            }
        }
        return true;
    }

}
