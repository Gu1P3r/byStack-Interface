import { Produto } from "../produto/produto";

export class ProdutoPreco {
    id: number;
    data_inicio: Date;
    data_fim: Date;
    preco: number;
    produto: Produto = new Produto();
}