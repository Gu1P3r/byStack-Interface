import { MovimentacaoEntrada } from './../movimentacaoentrada/movimentacaoentrada';
export class NotaFiscalEntrada {
    id_nota_fiscal_entrada: number;
    movimentacao_entrada: MovimentacaoEntrada = new MovimentacaoEntrada();
    data_nota: Date;
    valor: number;
  
}