import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'movimentacaoSaidaFilter'})
export class MovimentacaoSaidaFilterPipe implements PipeTransform{
    transform(value: any[], term: string): any[]{
        return value.filter((x:any) => x.data_movimentacao.toLowerCase().startsWith(term.toLowerCase()))
    }
}