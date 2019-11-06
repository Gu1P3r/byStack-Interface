import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { UsuarioComponent } from "./usuario.component";



const usuarioRoutes: Routes = [
    { path: '', component: UsuarioComponent}
]

@NgModule({
    imports: [RouterModule.forChild(usuarioRoutes)],
    exports: [RouterModule]
})

export class UsuarioRoutingModule {
    
}