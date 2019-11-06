import { EnderecoComponent } from './endereco.component';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';


const enderecoRoutes: Routes = [
    { path: '', component: EnderecoComponent}
]

@NgModule({
    imports: [RouterModule.forChild(enderecoRoutes)],
    exports: [RouterModule]
})

export class EnderecoRoutingModule {
    
}