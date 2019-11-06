import { CategoriaService } from './service/categoria.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Categoria } from './../../../domain/categoria/categoria';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  formCategoria: FormGroup;
  categoria: Categoria = new Categoria();
  categorias: Categoria[]


  displayedColumns = ['cod', 'nome', 'editar', 'excluir'];
  dataSource: MatTableDataSource<Categoria>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    formBuilder: FormBuilder,
    private categoriaService: CategoriaService,
    private toastr: ToastrService,

  ) {
    this.formCategoria = formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
    });

    this.dataSource = new MatTableDataSource(this.categorias);
  }

  ngOnInit() {

    this.initializeObjects();
  }

  initializeObjects() {
    this.categoriaService.getAllCategoria()
      .subscribe(res => {
        this.dataSource.data = res as Categoria[];
      });
  }

  popularDadosForm(dados) {
    this.formCategoria.patchValue({
      id: dados.id,
      nome: dados.nome
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

  excluir(categoria) {
    let resp = confirm('Deseja mesmo excluir esta categoria ?');
    if (resp === true) {
      this.categoriaService.deleteCategoria(categoria.id)
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

  editar(categoria) {
    this.popularDadosForm(categoria);
  }


  sendSaveRequest() {
    var result,
      categoriaValue = this.formCategoria.value;

    if (categoriaValue.id) {
      console.log("UPDATE")
      result = this.categoriaService.updateCategoria(categoriaValue)
        .subscribe(
          suc => {
            alert('Categoria editada com sucesso');
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
      result = this.categoriaService.saveCategoria(categoriaValue)
        .subscribe(
          suc => {
            alert('Categoria cadastrada com sucesso');
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
