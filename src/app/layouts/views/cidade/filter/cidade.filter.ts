import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'cidadeFilter'})
export class CidadeFilterPipe implements PipeTransform{
    transform(value: any[], term: string): any[]{
        return value.filter((x:any) => x.nome.toLowerCase().startsWith(term.toLowerCase()))
    }
}