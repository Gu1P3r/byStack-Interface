import { EnderecoService } from './service/endereco.service';
import { ToastrService } from 'ngx-toastr';
import { Endereco } from './../../../domain/endereco/endereco';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Cidade } from 'app/domain/cidade/cidade';
import { CidadeService } from '../cidade/service/cidade.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {

  formEndereco: FormGroup;
  endereco: Endereco = new Endereco();
  enderecos: Endereco[];

  cidade: Cidade = new Cidade();
  cidades: Cidade[];

  displayedColumns = ['cod', 'cep', 'bairro', 'logradouro', 'numero', 'cidade', 'editar', 'excluir'];
  dataSource: MatTableDataSource<Endereco>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public mcep = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  

  constructor(

    formBuilder: FormBuilder,
    private toastr: ToastrService,
    private enderecoService: EnderecoService,
    private cidadeService: CidadeService,

  ) {
    this.formEndereco = formBuilder.group({
      id: [''],
      cep: ['', Validators.required],
      bairro: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      cidade: formBuilder.group({
        id: ['', Validators.required]
      }),
    });

    this.dataSource = new MatTableDataSource(this.enderecos);
  }

  ngOnInit() {

    this.initializeObjects();
  }

  initializeObjects() {
    this.enderecoService.getAllEndereco()
      .subscribe(res => {
        this.dataSource.data = res as Endereco[];
      });

    this.cidadeService.getAllCidade()
      .subscribe(cidades => this.cidades = cidades);


  }

  popularDadosForm(dados) {
    this.formEndereco.patchValue({
      id: dados.id,
      cep: dados.cep,
      bairro: dados.bairro,
      logradouro: dados.logradouro,
      numero: dados.numero,
      cidade: dados.cidade
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

  excluir(endereco) {
    let resp = confirm('Deseja mesmo excluir este Endereco ?');
    if (resp === true) {
      this.enderecoService.deleteEndereco(endereco.id)
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
      enderecoValue = this.formEndereco.value;

    if (enderecoValue.id) {
      console.log("UPDATE")
      result = this.enderecoService.updateEndereco(enderecoValue)
        .subscribe(
          suc => {
            alert('Endereco editado com sucesso');
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
      result = this.enderecoService.saveEndereco(enderecoValue)
        .subscribe(
          suc => {
            alert('Endereco cadastrado com sucesso');
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