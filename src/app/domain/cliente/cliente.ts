import { Endereco } from './../endereco/endereco';
import { TipoCliente } from "../tipocliente/tipocliente";

export class Cliente {
    id: number;
    nome: String;
    data_nascimento: Date;
    cpf: String;
    telefone: String;
    tipo_cliente: TipoCliente = new TipoCliente();
    endereco: Endereco = new Endereco();
}