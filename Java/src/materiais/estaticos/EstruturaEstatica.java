package materiais.estaticos;

public class EstruturaEstatica<T> {
    protected T[] elementos;
    protected int tamanho;

    protected EstruturaEstatica(int capacidade){
        this.elementos = (T[]) new Object[capacidade];
        this.tamanho = 0;
    }

    protected EstruturaEstatica(){
        this(10);
    }

    protected boolean adiciona(T elemento){
        this.aumentaCapacidade();
        if(this.tamanho < this.elementos.length){
            this.elementos[tamanho] = elemento;
            this.tamanho++;
            return true;
        } else {
            return false;
        }
    }

    protected void adiciona(T elemento, int pos){
        verifyIfPositionIsValid(pos);

        for(int i = this.tamanho-1; i>=pos; i--){
            this.elementos[i+1] = this.elementos[i];
        }
        this.elementos[pos] = elemento;
        this.tamanho++;
    }

    protected void aumentaCapacidade(){
        if(this.tamanho == this.elementos.length){
            T[] elementosNovos = (T[]) new Object[this.elementos.length * 2];
            for (int i = 0; i<this.elementos.length; i++){
                elementosNovos[i] = this.elementos[i];
            }
            this.elementos = elementosNovos;
        }
    }

    protected void verifyIfPositionIsValid(int posicao) {
        if (!(posicao >= 0 && posicao < tamanho)) {
            throw new IllegalArgumentException("Posicao Invalida");
        }
    }

    protected boolean estaVazia(){
        return this.tamanho == 0;
    }

    public void remover(int pos){
        verifyIfPositionIsValid(pos);

        for(int i=pos; i< this.tamanho-1; i++){
            this.elementos[i] = this.elementos[i+1];
        }
        this.elementos[this.tamanho-1] = null;
        this.tamanho--;
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
