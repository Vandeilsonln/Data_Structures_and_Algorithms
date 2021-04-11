package teste.pilha;

import materiais.pilha.Pilha;

public class testePilha {
    public static void main(String[] args) {

        Pilha<Integer> pilha = new Pilha<>(5);
        System.out.println(pilha);
        System.out.println(pilha.getTamanho());
    }
}
