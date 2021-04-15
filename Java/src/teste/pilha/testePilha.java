package teste.pilha;

import materiais.pilha.Pilha;

public class testePilha {
    public static void main(String[] args) {

        Pilha<Integer> pilha = new Pilha<>();

        for(int i =1; i<=20; i++){
            pilha.empilha(i*2);
        }

        System.out.println(pilha);
        System.out.println(pilha.topo());

        pilha.desempilha();
        System.out.println(pilha);
        System.out.println(pilha.topo());
    }
}
