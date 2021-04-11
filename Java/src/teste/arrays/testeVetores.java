package teste.arrays;

import materiais.array.Vetores;

public class testeVetores {

    public static void main(String[] args) {

        Vetores vetores = new Vetores(10);

        vetores.adiciona("primeiro");
        vetores.adiciona("segundo");
        vetores.adiciona("terceiro");

        System.out.println(vetores.getTamanho());
        System.out.println(vetores);

        System.out.println(vetores.busca(0));
        System.out.println(vetores.busca("terceirol"));

//        vetores.adiciona("Zero", 2);
//        System.out.println(vetores);

//        vetores.remover(1);
//        System.out.println(vetores);

//        vetores.remover("terceiro");
//        System.out.println(vetores);
    }
}
