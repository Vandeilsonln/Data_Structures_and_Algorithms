package teste;

import materiais.Vetores;

public class testeVetores {

    public static void main(String[] args) {

        Vetores vetores = new Vetores(10);

        vetores.adiciona("primeiro");
        vetores.adiciona("segundo");
        vetores.adiciona("terceiro");

        System.out.println(vetores.getTamanho());
        System.out.println(vetores);

        System.out.println(vetores.busca(0));
    }
}
