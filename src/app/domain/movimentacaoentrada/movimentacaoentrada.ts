import { Fornecedor } from 'app/domain/fornecedor/fornecedor';
import { Usuario } from '../usuario/usuario';;
import { Produto } from '../produto/produto';
export class MovimentacaoEntrada {
    id_movimentacao_entrada: number;
    quantidade: number;
    valor_total: number;
    data_movimentacao: Date;
    usuario: String;
    produto: Produto = new Produto();
    fornecedor: Fornecedor = new Fornecedor();
}