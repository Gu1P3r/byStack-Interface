import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'notafiscalFilter'})
export class NotaFiscalFilterPipe implements PipeTransform{
    transform(value: any[], term: string): any[]{
        return value.filter((x:any) => x.valor.toLowerCase().startsWith(term.toLowerCase()))
    }
}