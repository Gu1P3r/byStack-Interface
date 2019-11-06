import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'categoriaFilter'})
export class CategoriaFilterPipe implements PipeTransform{
    transform(value: any[], term: string): any[]{
        return value.filter((x:any) => x.nome.toLowerCase().startsWith(term.toLowerCase()))
    }
}