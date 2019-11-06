import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { ProdutoPrecoComponent } from "./produto-preco.component";


const produtoPrecoRoutes: Routes = [
    { path: '', component: ProdutoPrecoComponent}
]

@NgModule({
    imports: [RouterModule.forChild(produtoPrecoRoutes)],
    exports: [RouterModule]
})

export class ProdutoPrecoRoutingModule {
    
}