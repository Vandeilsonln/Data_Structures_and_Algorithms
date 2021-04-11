package teste;

import materiais.ObjectVetor;
import materiais.Lista;

public class TesteObjectVetor {
    public static void main(String[] args) {
        ObjectVetor vetor = new ObjectVetor(5);

        Contato c1 = new Contato("vandeilson", "45678945", "van@email.com");
        Contato c2 = new Contato("lucy", "1234678", "lucy@email.com");
        Contato c3 = new Contato("aline", "98764532", "aline@email.com");


        vetor.adiciona(c1);
        vetor.adiciona(c2);
        vetor.adiciona(c3);

        System.out.println(vetor.getTamanho());
        System.out.println(vetor);

        // ----------------------------------------------

        Lista<String> lista = new Lista<>(5);

        lista.adiciona("Vandeilson");
        lista.adiciona("PicPay");

        System.out.println(lista);

        // ----------------------------------------------

        Lista<Contato> contatos = new Lista<>(5);

        contatos.adiciona(c1);
        contatos.adiciona(new Contato("Teste","7894560", "email.com"));

        System.out.println(contatos);
    }
}
