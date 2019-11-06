import { LoginService } from './service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Login } from 'app/domain/login/login';
import { NomeStorageService } from 'app/storage/nome-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  login: Login = new Login();

  constructor(

    formBuilder: FormBuilder,
    private toastr: ToastrService,
    private loginService: LoginService,
    private router: Router,
    private nomeStorageService: NomeStorageService

  ) {
    this.formLogin = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  ngOnInit() {

  }

  geraQR(produto){
    console.log(produto);
  }

  sendSaveRequest() {
    
    var result,
      LoginValue = this.formLogin.value;
      console.log("ADICIONAR")
      result = this.loginService.login(LoginValue)
        .subscribe(
          suc => {
            alert('Login efetuado com sucesso');
            setTimeout(() => {
              this.router.navigateByUrl('/cliente');
            }, 500);
            this.nomeStorageService.saveNomeS(LoginValue.username);
          },
          err => {
            alert('Ocorreu um erro ao tentar logar');
          }
        );
    }
}