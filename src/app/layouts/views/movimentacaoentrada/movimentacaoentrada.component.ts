import { NotaFiscalEntradaService } from '../notafiscal/service/notafiscalentrada.service';
import { Produto } from './../../../domain/produto/produto';
import { FornecedorFornecedorService } from './../fornecedor/service/fornecedor-fornecedor.service';
import { Fornecedor } from 'app/domain/fornecedor/fornecedor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { MovimentacaoEntrada } from 'app/domain/movimentacaoentrada/movimentacaoentrada';
import { MovimentacaoEntradaService } from './service/movimentacaoentrada.service';
import { NotaFiscalEntrada } from 'app/domain/notafiscalentrada/notafiscalentrada';
import { ProdutoService } from '../produto/service/produto.service';
import { Usuario } from 'app/domain/usuario/usuario';
import { UsuarioService } from '../usuario/service/usuario.service';
import { Router } from '@angular/router';
import { NomeStorageService } from 'app/storage/nome-storage.service';



@Component({
  selector: 'app-movimentacaoentrada',
  templateUrl: './movimentacaoentrada.component.html',
  styleUrls: ['./movimentacaoentrada.component.scss']
})
export class MovimentacaoentradaComponent implements OnInit {

  modal: boolean = false;

  formMovimentacaoEntrada: FormGroup;
  formNotaFiscalEntrada: FormGroup;

  entrada: MovimentacaoEntrada = new MovimentacaoEntrada();
  entradas: MovimentacaoEntrada[];

  nota: NotaFiscalEntrada = new NotaFiscalEntrada();
  notas: NotaFiscalEntrada[];

  produto: Produto = new Produto();
  produtos: Produto[];

  fornecedor: Fornecedor = new Fornecedor();
  fornecedores: Fornecedor[];

  usuario: Usuario = new Usuario();
  usuarios: Usuario[];


  displayedColumns1 = ['cod', 'valor_total', 'data_movimentacao', 'produto', 'fornecedor', 'usuario', 'editar', 'excluir'];
  dataSource1: MatTableDataSource<MovimentacaoEntrada>;

  @ViewChild(MatPaginator) paginator1: MatPaginator;
  @ViewChild(MatSort) sort1: MatSort;


  constructor(

    formBuilder: FormBuilder,
    private toastr: ToastrService,
    private movimentacaoEntradaService: MovimentacaoEntradaService,
    private ProdutoService: ProdutoService,
    private fornecedorService: FornecedorFornecedorService,
    private notaFiscalEntradaService: NotaFiscalEntradaService,
    private usuarioService: UsuarioService,
    private router: Router,
    private nomeStorageService: NomeStorageService 

  ) {
    this.formMovimentacaoEntrada = formBuilder.group({
      id_movimentacao_entrada: [''],
      quantidade: ['', Validators.required],
      valor_total: ['', Validators.required],
      data_movimentacao: ['', Validators.required],
      usuario: [''],
      produto: formBuilder.group({
        id: ['', Validators.required]
      }),
      fornecedor: formBuilder.group({
        id: ['', Validators.required]
      }),
    });

    this.dataSource1 = new MatTableDataSource(this.entradas);
  }

  ngOnInit() {

    this.initializeObjects();

  }

  ngAfterViewInit() {
    this.dataSource1.paginator = this.paginator1;
    this.dataSource1.sort = this.sort1;
  }

  applyFilter(filterValue1: string) {
    filterValue1 = filterValue1.trim();
    filterValue1 = filterValue1.toLowerCase();
    this.dataSource1.filter = filterValue1;
  }

  gerarNota() {
    this.modal = !this.modal;
  }

  gerarNF(){
    this.router.navigateByUrl("/notafiscalentrada");
  }

  initializeObjects() {
    this.ProdutoService.getAllProduto()
      .subscribe(produtos => this.produtos = produtos);

    this.fornecedorService.getAllFornecedor()
      .subscribe(fornecedores => this.fornecedores = fornecedores);

    this.movimentacaoEntradaService.getAllMovimentacaoEntrada()
      .subscribe(entradas => this.entradas = entradas);

    this.usuarioService.getAllUsuario()
      .subscribe(usuarios => this.usuarios = usuarios);

    this.movimentacaoEntradaService.getAllMovimentacaoEntrada()
      .subscribe(res => {
        this.dataSource1.data = res as MovimentacaoEntrada[];
      });
  }

  popularDadosForm(dados) {

    this.formMovimentacaoEntrada.patchValue({
      id_movimentacao_entrada: dados.id_movimentacao_entrada,
      quantidade: dados.quantidade,
      valor_total: dados.valor_total,
      data_movimentacao: dados.data_movimentacao,
      produto: dados.produto,
      fornecedor: dados.fornecedor,
    });

  }

  excluirMovimentacao(movimentacaoEntrada) {
    let resp = confirm('Deseja mesmo excluir esta movimentação de entrada ?');
    if (resp === true) {
      this.movimentacaoEntradaService.deleteMovimentacaoEntrada(movimentacaoEntrada.id_movimentacao_entrada)
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

  editarMovimentacao(movimentacaoEntrada) {
    this.popularDadosForm(movimentacaoEntrada);
  }


  sendSaveRequestMovimentacao() {
    var result,
      movimentacaoEntradaValue = this.formMovimentacaoEntrada.value;
      movimentacaoEntradaValue.usuario = this.nomeStorageService.getNomeS();
      console.log(movimentacaoEntradaValue.usuario);
      console.log(movimentacaoEntradaValue.value);

    if (movimentacaoEntradaValue.id) {
      console.log("UPDATE")
      result = this.movimentacaoEntradaService.updateMovimentacaoEntrada(movimentacaoEntradaValue)
        .subscribe(
          suc => {
            alert('Movimentacao de Entrada editado com sucesso');
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
      result = this.movimentacaoEntradaService.saveMovimentacaoEntrada(movimentacaoEntradaValue)
        .subscribe(
          suc => {
            alert('Movimentacao de Entrada cadastrado com sucesso');
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



  excluirNota(notaEntrada) {
    let resp = confirm('Deseja mesmo excluir esta nota de entrada ?');
    if (resp === true) {
      this.notaFiscalEntradaService.deleteNotaFiscalEntrada(notaEntrada.id)
        .subscribe(
          suc => {
            alert('Registro excluido com sucesso. ');
          },
          err => {
            alert('Ocorreu um erro ao tentar excluir o registro');
          }
        )
    } else {
      return;
    }
  }

  editarNota(notaEntrada) {
    this.popularDadosForm(notaEntrada);
  }


  sendSaveRequestNota() {
    var result,
      notaEntradaValue = this.formNotaFiscalEntrada.value;

    if (notaEntradaValue.id) {
      console.log("UPDATE")
      result = this.notaFiscalEntradaService.updateNotaFiscalEntrada(notaEntradaValue)
        .subscribe(
          suc => {
            alert('Movimentacao de Entrada editado com sucesso');
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
      result = this.notaFiscalEntradaService.saveNotaFiscalEntrada(notaEntradaValue)
        .subscribe(
          suc => {
            alert('Movimentacao de Entrada cadastrado com sucesso');
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