import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'tipoclienteFilter'})
export class TipoClienteFilterPipe implements PipeTransform{
    transform(value: any[], term: string): any[]{
        return value.filter((x:any) => x.descricao.toLowerCase().startsWith(term.toLowerCase()))
    }
}