import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { ProdutoComponent } from "./produto.component";
import { ProdutoService } from "./service/produto.service";
import { ProdutoRoutingModule } from "./produto.routing.module";
import { CategoriaService } from "../categoria/service/categoria.service";
import { MaterialModule } from "app/angular-material/material-module";
import { NgxQRCodeModule } from "ngx-qrcode2";
import { ProdutoFilterPipe } from "./filter/produto.filter";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ProdutoRoutingModule,
        MaterialModule,
        NgxQRCodeModule,
    ],
    declarations: [
        ProdutoComponent,
        ProdutoFilterPipe
    ],
    providers: [
        ProdutoService,
        CategoriaService
    ]
})
export class ProdutoModule {}