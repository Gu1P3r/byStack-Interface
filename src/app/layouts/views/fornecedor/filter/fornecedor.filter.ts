import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'fornecedorFilter'})
export class FornecedorFilterPipe implements PipeTransform{
    transform(value: any[], term: string): any[]{
        return value.filter((x:any) => x.nome_fantasia.toLowerCase().startsWith(term.toLowerCase()))
    }
}