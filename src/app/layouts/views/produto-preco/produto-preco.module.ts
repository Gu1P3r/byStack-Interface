import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { MaterialModule } from "app/angular-material/material-module";
import { ProdutoPrecoRoutingModule } from "./produto-preco.rounting.module";
import { ProdutoPrecoComponent } from "./produto-preco.component";
import { ProdutoPrecoService } from "./service/produto-preco.service";
import { ProdutoService } from "../produto/service/produto.service";
import { ProdutoPrecoFilterPipe } from "./filter/produtopreco.filter";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ProdutoPrecoRoutingModule,
        MaterialModule
    ],
    declarations: [
        ProdutoPrecoComponent,
        ProdutoPrecoFilterPipe
    ],
    providers: [
        ProdutoPrecoService,
        ProdutoService
    ]
})
export class ProdutoPrecoModule {}