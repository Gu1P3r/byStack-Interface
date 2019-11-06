import { MovimentacaoentradaComponent } from './movimentacaoentrada.component';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';


const movimentacaoEntradaRoutes: Routes = [
    { path: '', component: MovimentacaoentradaComponent}
]

@NgModule({
    imports: [RouterModule.forChild(movimentacaoEntradaRoutes)],
    exports: [RouterModule]
})

export class MovimentacaoEntradaRoutingModule {
    
}