import { CategoriaService } from './service/categoria.service';
import { CategoriaComponent } from './categoria.component';
import { CategoriaRoutingModule } from './categoria.routing.module';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { MaterialModule } from 'app/angular-material/material-module';
import { CategoriaFilterPipe } from './filter/categoria.filter';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CategoriaRoutingModule,
        MaterialModule
    ],
    declarations: [
        CategoriaComponent,
        CategoriaFilterPipe
    ],
    providers: [
        CategoriaService,
    ]
})
export class CategoriaModule {}