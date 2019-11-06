import { NotafiscalComponent } from './notafiscal.component';
import { NotaFiscalRoutingModule } from './notafiscal.routing.module';
import { NotaFiscalEntradaService } from './service/notafiscalentrada.service';
import { FornecedorFornecedorService } from './../fornecedor/service/fornecedor-fornecedor.service';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule, MatRippleModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTooltipModule } from "@angular/material";
import { NgModule } from "@angular/core";
import { MaterialModule } from 'app/angular-material/material-module';
import { MovimentacaoEntradaService } from '../movimentacaoentrada/service/movimentacaoentrada.service';
import { NotaFiscalFilterPipe } from './filter/notafiscal.filter';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        NotaFiscalRoutingModule,
    ],
    declarations: [
        NotafiscalComponent,
        NotaFiscalFilterPipe
    ],
    providers: [
        NotaFiscalEntradaService,
        MovimentacaoEntradaService,
    ]
})
export class NotaFiscalModule {}