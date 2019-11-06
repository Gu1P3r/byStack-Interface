import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { MaterialModule } from 'app/angular-material/material-module';
import { CidadeRoutingModule } from './cidade.routing.module';
import { CidadeComponent } from './cidade.component';
import { CidadeFilterPipe } from './filter/cidade.filter';
import { CidadeService } from './service/cidade.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CidadeRoutingModule,
        MaterialModule
    ],
    declarations: [
        CidadeComponent,
        CidadeFilterPipe
    ],
    providers: [
        CidadeService
    ]
})
export class CidadeModule {}