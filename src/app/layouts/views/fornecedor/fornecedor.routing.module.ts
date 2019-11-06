import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { FornecedorComponent } from "./fornecedor.component";


const fornecedorRoutes: Routes = [
    { path: '', component: FornecedorComponent}
]

@NgModule({
    imports: [RouterModule.forChild(fornecedorRoutes)],
    exports: [RouterModule]
})

export class FornecedorRoutingModule {
    
}