import { Usuario } from '../usuario/usuario';

export class MovimentacaoSaida {
    id: number;
    valor_total: number;
    data_movimentacao: Date;
    usuario: Usuario = new Usuario();
}