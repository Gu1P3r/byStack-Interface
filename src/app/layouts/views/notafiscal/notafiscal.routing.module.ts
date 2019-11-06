import { NotafiscalComponent } from './notafiscal.component';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';


const notaFiscalRoutes: Routes = [
    { path: '', component: NotafiscalComponent}
]

@NgModule({
    imports: [RouterModule.forChild(notaFiscalRoutes)],
    exports: [RouterModule]
})

export class NotaFiscalRoutingModule {
    
}