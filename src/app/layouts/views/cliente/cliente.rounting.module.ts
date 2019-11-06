import { ClienteComponent } from './cliente.component';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';


const fornecedorRoutes: Routes = [
    { path: '', component: ClienteComponent}
]

@NgModule({
    imports: [RouterModule.forChild(fornecedorRoutes)],
    exports: [RouterModule]
})

export class ClienteRoutingModule {
    
}