package materiais.pilha;

import materiais.estaticos.EstruturaEstatica;

public class Pilha<T> extends EstruturaEstatica<T> {

    private T[] elementos;
    private int tamanho;

    public Pilha(){
        super(10);
    }

    public Pilha(int capacidade){
        super(capacidade);
    }

    public int getTamanho(){
        return this.tamanho;
    }



    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("[");

        for (int i = 0; i < this.tamanho - 1; i++){
            sb.append(this.elementos[i]);
            sb.append(", ");
        }

        if(this.tamanho>0){
            sb.append(this.elementos[this.tamanho-1]);
        }

        sb.append("]");

        return sb.toString();
    }
}
