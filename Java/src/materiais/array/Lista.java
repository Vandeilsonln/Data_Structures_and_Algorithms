package materiais.array;

import materiais.estaticos.EstruturaEstatica;

import java.lang.reflect.Array;

public class Lista<T> extends EstruturaEstatica<T> {

    private T[] elementos;
    private int tamanho;

    public Lista(){
        super();
    }

    public Lista(int capacidade){
        super(capacidade);
    }

    public Lista(int capacidade, Class<T> tipoClasse){
        this.elementos = (T[]) Array.newInstance(tipoClasse, capacidade);
        this.tamanho = 0;
    }

    public boolean adiciona(T elemento){
        return super.adiciona(elemento);
    }

    public void adiciona(T elemento, int pos){
        super.adiciona(elemento, pos);
    }

    public void aumentaCapacidade(){
        super.aumentaCapacidade();
    }

    public int getTamanho(){
        return this.tamanho;
    }

    public Object busca(int posicao){
        verifyIfPositionIsValid(posicao);
        return this.elementos[posicao];
    }

    public int busca(Object elem){
        for(int i=0; i<this.tamanho; i++){
            if (this.elementos[i].equals(elem)){
                return i;
            }
        }
        return -1;
    }


    public void remover(int pos){
        verifyIfPositionIsValid(pos);

        for(int i=pos; i< this.tamanho-1; i++){
            this.elementos[i] = this.elementos[i+1];
        }
        this.elementos[this.tamanho-1] = null;
        this.tamanho--;
    }

    public void remover(T elemento){
        int pos = this.busca(elemento);
        if(pos >= 0){
            this.remover(pos);
        } else {
            System.out.println("Esse elemento não existe no vetor");
        }

    }

    @Override
    public String toString() {
        return super.toString();
    }

    protected void verifyIfPositionIsValid(int posicao) {
        if (!(posicao >= 0 && posicao < tamanho)) {
            throw new IllegalArgumentException("Posicao Invalida");
        }
    }
}