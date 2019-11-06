import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'enderecoFilter'})
export class EnderecoFilterPipe implements PipeTransform{
    transform(value: any[], term: string): any[]{
        return value.filter((x:any) => x.logradouro.toLowerCase().startsWith(term.toLowerCase()))
    }
}