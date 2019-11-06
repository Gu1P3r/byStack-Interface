import { EnderecoService } from './service/endereco.service';
import { EnderecoComponent } from './endereco.component';
import { EnderecoRoutingModule } from './endereco.routing.module';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { MaterialModule } from 'app/angular-material/material-module';
import { EnderecoFilterPipe } from './filter/endereco.filter';
import { CidadeService } from '../cidade/service/cidade.service';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EnderecoRoutingModule,
        MaterialModule,
        TextMaskModule
    ],
    declarations: [
        EnderecoComponent,
        EnderecoFilterPipe
    ],
    providers: [
        EnderecoService,
        CidadeService
    ]
})
export class EnderecoModule {}