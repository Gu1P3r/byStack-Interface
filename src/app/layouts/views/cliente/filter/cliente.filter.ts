import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'clienteFilter'})
export class ClienteFilterPipe implements PipeTransform{
    transform(value: any[], term: string): any[]{
        return value.filter((x:any) => x.nome.toLowerCase().startsWith(term.toLowerCase()))
    }
}