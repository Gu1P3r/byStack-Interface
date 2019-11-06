import { Endereco } from './../endereco/endereco';
export class Fornecedor {
    id: number;
    nome_fantasia: String;
    razao_social: String;
    cnpj: String;
    endereco: Endereco = new Endereco();
}
