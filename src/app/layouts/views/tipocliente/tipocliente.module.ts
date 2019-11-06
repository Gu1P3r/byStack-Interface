
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { TipoClienteRoutingModule } from "./tipocliente.routing.module";
import { TipoClienteComponent } from "./tipocliente.component";
import { TipoClienteService } from "./service/tipocliente.service";
import { MaterialModule } from "app/angular-material/material-module";
import { TipoClienteFilterPipe } from "./filter/tipocliente.filter";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TipoClienteRoutingModule,
        MaterialModule
    ],
    declarations: [
        TipoClienteComponent,
        TipoClienteFilterPipe
    ],
    providers: [
        TipoClienteService
    ]
})
export class TipoClienteModule {}