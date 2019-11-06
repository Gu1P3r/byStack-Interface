import { ClienteRoutingModule } from './cliente.rounting.module';
import { ClienteComponent } from './cliente.component';
import { ClienteService } from './service/cliente.service';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { EnderecoService } from '../endereco/service/endereco.service';
import { TipoClienteService } from '../tipocliente/service/tipocliente.service';
import { MaterialModule } from 'app/angular-material/material-module';
import { ClienteFilterPipe } from './filter/cliente.filter';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ClienteRoutingModule,
        MaterialModule,
        TextMaskModule
    ],
    declarations: [
        ClienteComponent,
        ClienteFilterPipe
    ],
    providers: [
        ClienteService,
        EnderecoService,
        TipoClienteService,
    ]
})
export class ClienteModule {}