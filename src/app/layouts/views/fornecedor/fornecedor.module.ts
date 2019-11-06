import { FornecedorComponent } from "./fornecedor.component";
import { FornecedorFornecedorService } from "./service/fornecedor-fornecedor.service";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { FornecedorRoutingModule } from "./fornecedor.routing.module";
import { EnderecoService } from "../endereco/service/endereco.service";
import { MaterialModule } from "app/angular-material/material-module";
import { FornecedorFilterPipe } from "./filter/fornecedor.filter";
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FornecedorRoutingModule,
        MaterialModule,
        TextMaskModule
    ],
    declarations: [
        FornecedorComponent,
        FornecedorFilterPipe
    ],
    providers: [
        EnderecoService,
        FornecedorFornecedorService
    ]
})
export class FornecedorModule {}