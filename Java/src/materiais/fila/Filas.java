package materiais.fila;

import materiais.estaticos.EstruturaEstatica;

public class Filas<T> extends EstruturaEstatica<T> {

    public Filas(){
        super();
    }

    public Filas(int capacidade){
        super(capacidade);
    }

    public void enfileirar(T elemento){
        super.adiciona(elemento);
    }

    public T desenfileirar(){

        final int POS = 0;

        if (this.estaVazia()){
            return null;
        }
        T elem = this.elementos[POS];
        this.remover(POS);

        return elem;
    }

}
