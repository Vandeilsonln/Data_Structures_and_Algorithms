package materiais.pilha;

public class Pilha<T> {

    private T[] elementos;
    private int tamanho;

    public Pilha(int capacidade){
        elementos = (T[]) new Object[capacidade];
        tamanho = 0;
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
