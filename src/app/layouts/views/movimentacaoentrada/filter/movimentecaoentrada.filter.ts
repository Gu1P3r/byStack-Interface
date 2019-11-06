import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'movimentacaoentradaFilter'})
export class MovimentacaoEntradaFilterPipe implements PipeTransform{
    transform(value: any[], term: string): any[]{
        return value.filter((x:any) => x.fornecedor.toLowerCase().startsWith(term.toLowerCase()))
    }
}