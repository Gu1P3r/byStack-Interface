import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Cidade } from 'app/domain/cidade/cidade';
import { CidadeService } from './service/cidade.service';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.scss']
})
export class CidadeComponent implements OnInit {

  formCidade: FormGroup;
  cidade: Cidade = new Cidade();
  cidades: Cidade[];


  displayedColumns = ['cod', 'nome', 'editar', 'excluir'];
  dataSource: MatTableDataSource<Cidade>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(

    formBuilder: FormBuilder,
    private toastr: ToastrService,
    private cidadeService: CidadeService,

  ) {
    this.formCidade = formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
    });

    this.dataSource = new MatTableDataSource(this.cidades);
  }

  ngOnInit() {

    this.initializeObjects();
  }

  initializeObjects() {
    this.cidadeService.getAllCidade()
      .subscribe(res => {
        this.dataSource.data = res as Cidade[];
      });
  }

  popularDadosForm(dados) {
    this.formCidade.patchValue({
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
  
  excluir(cidade) {
    let resp = confirm('Deseja mesmo excluir este Cidade ?');
    if (resp === true) {
      this.cidadeService.deleteCidade(cidade.id)
        .subscribe(
          suc => {
            alert('Registro excluido com sucesso.');
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

  editar(Endereco) {
    this.popularDadosForm(Endereco);
  }


  sendSaveRequest() {
    var result,
      cidadeValue = this.formCidade.value;

    if (cidadeValue.id) {
      console.log("UPDATE")
      result = this.cidadeService.updateCidade(cidadeValue)
        .subscribe(
          suc => {
            alert('Cidade editado com sucesso');
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
      result = this.cidadeService.saveCidade(cidadeValue)
        .subscribe(
          suc => {
            alert('Cidade cadastrado com sucesso');
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