package materiais.array;

public class ObjectVetor {

    private Object[] elementos;
    private int tamanho;

    public ObjectVetor(int capacidade){
        this.elementos = new Object[capacidade];
        this.tamanho = 0;
    }

    public boolean adiciona(Object elemento){
        if(this.tamanho < this.elementos.length){
            elementos[tamanho] = elemento;
            tamanho++;
            return true;
        } else {
            return false;
        }
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

    public void adiciona(Object elemento, int pos){
        verifyIfPositionIsValid(pos);

        for(int i = this.tamanho-1; i>=pos; i--){
            this.elementos[i+1] = this.elementos[i];
        }
        this.elementos[pos] = elemento;
        this.tamanho++;
    }

    public void remover(int pos){
        verifyIfPositionIsValid(pos);

        for(int i=pos; i< this.tamanho-1; i++){
            this.elementos[i] = this.elementos[i+1];
        }
        this.elementos[this.tamanho-1] = null;
        this.tamanho--;
    }

    public void remover(Object elemento){
        int pos = this.busca(elemento);
        if(pos >= 0){
            this.remover(pos);
        } else {
            System.out.println("Esse elemento não existe no vetor");
        }

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

    private void verifyIfPositionIsValid(int posicao) {
        if (!(posicao >= 0 && posicao < tamanho)) {
            throw new IllegalArgumentException("Posicao Invalida");
        }
    }
}