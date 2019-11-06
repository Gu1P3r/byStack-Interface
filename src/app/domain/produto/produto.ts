import { Categoria } from './../categoria/categoria';
export class Produto {
    id: number;
    nome: number;
    categoria: Categoria = new Categoria();
    cod_barra: number;
    quantidade: number;
}