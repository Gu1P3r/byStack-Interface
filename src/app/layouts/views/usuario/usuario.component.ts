import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'app/domain/usuario/usuario';
import { UsuarioService } from './service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  formUsuario: FormGroup;
  usuario: Usuario = new Usuario();
  usuarios: Usuario[];

  displayedColumns = ['cod', 'login', 'nome', 'editar', 'excluir'];
  dataSource: MatTableDataSource<Usuario>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(

    formBuilder: FormBuilder,
    private toastr: ToastrService,
    private usuarioService: UsuarioService,

  ) {
    this.formUsuario = formBuilder.group({
      id: [''],
      login: ['', Validators.required],
      senha: ['', Validators.required],
      nome: ['', Validators.required]
    });

    this.dataSource = new MatTableDataSource(this.usuarios);
  }

  ngOnInit() {

    this.initializeObjects();
  }

  initializeObjects() {
    this.usuarioService.getAllUsuario()
      .subscribe(res => {
        this.dataSource.data = res as Usuario[];
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  popularDadosForm(dados) {
    this.formUsuario.patchValue({
      id: dados.id,
      login: dados.login,
      senha: dados.senha,
      nome: dados.nome,
    });
  }

  excluir(Usuario) {
    let resp = confirm('Deseja mesmo excluir este Usuario ?');
    if (resp === true) {
      this.usuarioService.deleteUsuario(Usuario.id)
        .subscribe(
          suc => {
            alert('Registro excluido com sucesso. ');
            location.reload();
          },
          err => {
            alert('Ocorreu um erro ao tentar excluir o registro');
          }
        )
    } else {
      return;
    }
  }

  editar(Usuario) {
    this.popularDadosForm(Usuario);
  }


  sendSaveRequest() {
    var result,
      UsuarioValue = this.formUsuario.value;

    if (UsuarioValue.id) {
      console.log("UPDATE")
      result = this.usuarioService.updateUsuario(UsuarioValue)
        .subscribe(
          suc => {
            alert('Usuario editado com sucesso');
            setTimeout(() => {
              location.reload();
            }, 2000);
          },
          err => {
            alert('Ocorreu um erro ao tentar salvar');
          }
        );
    } else {
      console.log("ADICIONAR")
      result = this.usuarioService.saveUsuario(UsuarioValue)
        .subscribe(
          suc => {
            alert('Usuario cadastrado com sucesso');
            setTimeout(() => {
              location.reload();
            }, 2000);
          },
          err => {
            alert('Ocorreu um erro ao tentar salvar');
          }
        );
    }
  }

}