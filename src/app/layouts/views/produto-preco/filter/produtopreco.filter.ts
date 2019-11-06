import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'produtoprecoFilter'})
export class ProdutoPrecoFilterPipe implements PipeTransform{
    transform(value: any[], term: string): any[]{
        return value.filter((x:any) => x.produto.toLowerCase().startsWith(term.toLowerCase()))
    }
}