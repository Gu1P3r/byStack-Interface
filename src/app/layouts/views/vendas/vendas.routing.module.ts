import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { VendasComponent } from "./vendas.component";



const vendasRoutes: Routes = [
    { path: '', component: VendasComponent}
]

@NgModule({
    imports: [RouterModule.forChild(vendasRoutes)],
    exports: [RouterModule]
})

export class VendasRoutingModule {
    
}