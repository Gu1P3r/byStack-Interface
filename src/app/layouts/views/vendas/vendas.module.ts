import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { MaterialModule } from 'app/angular-material/material-module';
import { VendasComponent } from "./vendas.component";
import { MovimentacaoSaidaService } from "./service/movimentacao-saida.service";
import { VendasRoutingModule } from "./vendas.routing.module";
import { NotafiscalSaidaService } from "./service/notafiscal-saida.service";
import { MovimentacaoSaidaFilterPipe } from "./filter/movimentacao-saida.filter";
import { DetalhesService } from "./service/detalhes.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        VendasRoutingModule,
        MaterialModule
    ],
    declarations: [
        VendasComponent,
        MovimentacaoSaidaFilterPipe
        
    ],
    providers: [
        MovimentacaoSaidaService,
        NotafiscalSaidaService,
        DetalhesService
    ]
})
export class VendasModule {}