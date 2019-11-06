import { MovimentacaoSaida } from '../movimentacaosaida/movimentacaosaida';
export class NotaFiscalSaida {
    id_nota_fiscal_saida: number;
    movimentacao_saida: MovimentacaoSaida = new MovimentacaoSaida();
    data_nota: Date;
  
}