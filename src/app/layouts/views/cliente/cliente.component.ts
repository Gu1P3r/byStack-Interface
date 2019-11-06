import { Endereco } from './../../../domain/endereco/endereco';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'app/domain/cliente/cliente';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ClienteService } from './service/cliente.service';
import { TipoCliente } from 'app/domain/tipocliente/tipocliente';
import { ToastrService } from 'ngx-toastr';
import { EnderecoService } from '../endereco/service/endereco.service';
import { TipoClienteService } from '../tipocliente/service/tipocliente.service';
import *as $ from 'jquery';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  formCliente: FormGroup;
  cliente: Cliente = new Cliente();
  clientes: Cliente[];

  tipo_cliente: TipoCliente = new TipoCliente();
  tipo_clientes: TipoCliente[];

  endereco: Endereco = new Endereco();
  enderecos: Endereco[];

  tipo: number;
  mascaraCpf: any;

  displayedColumns = ['cod', 'nome', 'cpf', 'telefone', 'tipo_cliente', 'editar', 'excluir'];
  dataSource: MatTableDataSource<Cliente>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public tel = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public mcpf;


  constructor(

    formBuilder: FormBuilder,
    private toastr: ToastrService,
    private clienteService: ClienteService,
    private enderecoService: EnderecoService,
    private tipoService: TipoClienteService,

  ) {
    this.formCliente = formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      data_nascimento: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],
      tipo_cliente: formBuilder.group({
        id: ['', Validators.required]
      }),
      endereco: formBuilder.group({
        id: ['', Validators.required]
      })
    });

    this.dataSource = new MatTableDataSource(this.clientes);
  }

  changed(e){

    var valorCliente = this.formCliente.value;

    this.tipo = valorCliente.tipo_cliente.id;

    console.log(this.tipo);

    if(this.tipo == 2){
      this.mcpf = [/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]

    }

    if(this.tipo == 1){
      this.mcpf = [/[0-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]

      console.log(this.mcpf);

    }
    
  }

  ngOnInit() {

    this.initializeObjects();
  }

  initializeObjects() {
    this.clienteService.getAllCliente()
      .subscribe(res => {
        this.dataSource.data = res as Cliente[];
      });

    this.tipoService.getAllTipos()
      .subscribe(tipos => this.tipo_clientes = tipos);

    this.enderecoService.getAllEndereco()
      .subscribe(enderecos => this.enderecos = enderecos);
  }

  popularDadosForm(dados) {
    this.formCliente.patchValue({
      id: dados.id,
      nome: dados.nome,
      data_nascimento: dados.data_nascimento,
      cpf: dados.cpf,
      telefone: dados.telefone,
      tipo_cliente: dados.tipo_cliente,
      endereco: dados.endereco,
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
  

  excluir(cliente) {
    let resp = confirm('Deseja mesmo excluir este cliente ?');
    if (resp === true) {
      this.clienteService.deleteCliente(cliente.id)
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

  editar(cliente) {
    this.popularDadosForm(cliente);
  }


  sendSaveRequest() {
    var result,
      clienteValue = this.formCliente.value;

    if (clienteValue.id) {
      console.log("UPDATE")
      result = this.clienteService.updateCliente(clienteValue)
        .subscribe(
          suc => {
            alert('Cliente editado com sucesso');
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
      result = this.clienteService.saveCliente(clienteValue)
        .subscribe(
          suc => {
            alert('Cliente cadastrado com sucesso');
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