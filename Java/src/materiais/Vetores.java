package materiais;

import java.util.Arrays;

public class Vetores {

    private String[] elementos;
    private int tamanho;

    public Vetores(int capacidade){
        this.elementos = new String[capacidade];
        this.tamanho = 0;
    }

    public boolean adiciona(String elemento){
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
