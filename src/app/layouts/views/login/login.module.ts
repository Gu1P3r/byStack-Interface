import { LoginRoutingModule } from './login.routing.module';
import { LoginService } from './service/login.service';
import { LoginComponent } from './login.component';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { MaterialModule } from "app/angular-material/material-module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        MaterialModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        LoginService,
        
    ]
})
export class LoginModule {}