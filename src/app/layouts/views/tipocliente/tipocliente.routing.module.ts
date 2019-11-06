
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { TipoClienteComponent } from "./tipocliente.component";


const tipoclienteRoutes: Routes = [
    { path: '', component: TipoClienteComponent}
]

@NgModule({
    imports: [RouterModule.forChild(tipoclienteRoutes)],
    exports: [RouterModule]
})

export class TipoClienteRoutingModule {
    
}