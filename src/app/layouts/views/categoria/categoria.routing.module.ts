import { CategoriaComponent } from './categoria.component';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';


const categoriaRoutes: Routes = [
    { path: '', component: CategoriaComponent}
]

@NgModule({
    imports: [RouterModule.forChild(categoriaRoutes)],
    exports: [RouterModule]
})

export class CategoriaRoutingModule {
    
}