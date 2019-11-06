import { NotaFiscalEntradaService } from '../notafiscal/service/notafiscalentrada.service';
import { FornecedorFornecedorService } from './../fornecedor/service/fornecedor-fornecedor.service';
import { MovimentacaoentradaComponent } from './movimentacaoentrada.component';
import { MovimentacaoEntradaService } from './service/movimentacaoentrada.service';
import { MovimentacaoEntradaRoutingModule } from './movimentacaoentrada.routing.module';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { ProdutoService } from '../produto/service/produto.service';
import { MaterialModule } from 'app/angular-material/material-module';
import { MovimentacaoEntradaFilterPipe } from './filter/movimentecaoentrada.filter';
import { UsuarioService } from '../usuario/service/usuario.service';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        MovimentacaoEntradaRoutingModule,
        TextMaskModule
    ],
    declarations: [
        MovimentacaoentradaComponent,
        MovimentacaoEntradaFilterPipe
    ],
    providers: [
        MovimentacaoEntradaService,
        NotaFiscalEntradaService,
        ProdutoService,
        FornecedorFornecedorService,
        UsuarioService
    ]
})
export class MovimentacaoEntradaModule {}