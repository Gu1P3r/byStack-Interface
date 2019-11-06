import { Endereco } from './../../../domain/endereco/endereco';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Fornecedor } from 'app/domain/Fornecedor/Fornecedor';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { EnderecoService } from '../endereco/service/endereco.service';
import { FornecedorFornecedorService } from '../fornecedor/service/fornecedor-fornecedor.service';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.scss']
})
export class FornecedorComponent implements OnInit {

  formFornecedor: FormGroup;
  fornecedor: Fornecedor = new Fornecedor();
  fornecedores: Fornecedor[];

  endereco: Endereco = new Endereco();
  enderecos: Endereco[];


  displayedColumns = ['cod', 'nome_fantasia', 'telefone', 'editar', 'excluir'];
  dataSource: MatTableDataSource<Fornecedor>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public tel = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public cnpj = [/[0-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  constructor(

    formBuilder: FormBuilder,
    private toastr: ToastrService,
    private fornecedorService: FornecedorFornecedorService,
    private enderecoService: EnderecoService,

  ) {
    this.formFornecedor = formBuilder.group({
      id: [''],
      nome_fantasia: ['', Validators.required],
      razao_social: ['', Validators.required],
      cnpj: ['', Validators.required],
      telefone: ['', Validators.required],
      endereco: formBuilder.group({
        id: ['', Validators.required]
      })
      
    });

    this.dataSource = new MatTableDataSource(this.fornecedores);
  }

  ngOnInit() {

    this.initializeObjects();
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

  initializeObjects() {
    this.fornecedorService.getAllFornecedor()
      .subscribe(res => {
        this.dataSource.data = res as Fornecedor[];
      });

    this.enderecoService.getAllEndereco()
      .subscribe(enderecos => this.enderecos = enderecos);
  }

  popularDadosForm(dados) {
    this.formFornecedor.patchValue({
      id: dados.id,
      nome_fantasia: dados.nome_fantasia,
      razao_social: dados.razao_social,
      cnpj: dados.cnpj,
      telefone: dados.telefone,
      endereco: dados.endereco,
    });
  }

  excluir(fornecedor) {
    let resp = confirm('Deseja mesmo excluir este fornecedor ?');
    if (resp === true) {
      this.fornecedorService.deleteFornecedor(fornecedor.id)
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

  editar(fornecedor) {
    this.popularDadosForm(fornecedor);
  }


  sendSaveRequest() {
    var result,
      fornecedorValue = this.formFornecedor.value;

    if (fornecedorValue.id) {
      console.log("UPDATE")
      result = this.fornecedorService.updateFornecedor(fornecedorValue)
        .subscribe(
          suc => {
            alert('Fornecedor editado com sucesso');

            console.log(fornecedorValue);
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
      result = this.fornecedorService.saveFornecedor(fornecedorValue)
        .subscribe(
          suc => {
            alert('Fornecedor cadastrado com sucesso');
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