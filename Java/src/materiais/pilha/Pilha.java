package materiais.pilha;

import materiais.estaticos.EstruturaEstatica;

public class Pilha<T> extends EstruturaEstatica<T> {

    public Pilha(){
        super();
    }

    public Pilha(int capacidade){
        super(capacidade);
    }

    public int getTamanho(){
        return super.tamanho;
    }

    public void empilha(T elemento){
        super.adiciona(elemento);
    }

    public T desempilha(){

        T elem = topo();
        this.tamanho--;

        return elem;
    }

    public T topo(){
        if (this.tamanho == 0){
            return null;
        }
        return this.elementos[tamanho-1];
    }

    @Override
    public String toString() {
        return super.toString();
    }
}
