import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { CidadeComponent } from './cidade.component';


const cidadeRoutes: Routes = [
    { path: '', component: CidadeComponent}
]

@NgModule({
    imports: [RouterModule.forChild(cidadeRoutes)],
    exports: [RouterModule]
})

export class CidadeRoutingModule {
    
}