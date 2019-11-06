import { Cidade } from "../cidade/cidade";

export class Endereco {
    id: number;
    cep: String;
    bairro: String;
    logradouro: String;
    numero: number;
    cidade: Cidade = new Cidade();
    
}