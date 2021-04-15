package teste.fila;

import materiais.fila.Filas;

public class testeFilas {
    public static void main(String[] args) {
        Filas<Integer> fila = new Filas<>(15);

        System.out.println(fila);

        for (int i=1; i <= 10; i++){
            fila.enfileirar(i*i );
        }

        System.out.println(fila);
        System.out.println(fila.desenfileirar());
        System.out.println(fila);
    }


}
