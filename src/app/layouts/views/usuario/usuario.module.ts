import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { MaterialModule } from 'app/angular-material/material-module';
import { UsuarioRoutingModule } from "./usuario.routing.module";
import { UsuarioService } from "./service/usuario.service";
import { UsuarioComponent } from "./usuario.component";
import { UsuarioFilterPipe } from "./filter/usuario.filter";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UsuarioRoutingModule,
        MaterialModule
    ],
    declarations: [
        UsuarioComponent,
        UsuarioFilterPipe
    ],
    providers: [
        UsuarioService,
    ]
})
export class UsuarioModule {}