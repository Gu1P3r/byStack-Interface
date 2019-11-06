import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'produtoFilter'})
export class ProdutoFilterPipe implements PipeTransform{
    transform(value: any[], term: string): any[]{
        return value.filter((x:any) => x.nome.toLowerCase().startsWith(term.toLowerCase()))
    }
}