import { Endereco } from './../../../domain/endereco/endereco';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Fornecedor } from 'app/domain/Fornecedor/Fornecedor';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { EnderecoService } from '../endereco/service/endereco.service';
import { FornecedorFornecedorService } from '../fornecedor/service/fornecedor-fornecedor.service';
import { Produto } from 'app/domain/produto/produto';
import { ProdutoPreco } from 'app/domain/produtopreco/produtopreco';
import { ProdutoService } from '../produto/service/produto.service';
import { ProdutoPrecoService } from './service/produto-preco.service';

@Component({
  selector: 'app-produto-preco',
  templateUrl: './produto-preco.component.html',
  styleUrls: ['./produto-preco.component.scss']
})
export class ProdutoPrecoComponent implements OnInit {

  formProdutoPreco: FormGroup;
  preco: ProdutoPreco = new ProdutoPreco();
  precos: ProdutoPreco[];

  produto: Produto = new Produto();
  produtos: Produto[];

  displayedColumns = ['cod', 'data_inicio', 'data_fim', 'preco', 'produto', 'editar', 'excluir'];
  dataSource: MatTableDataSource<ProdutoPreco>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(

    formBuilder: FormBuilder,
    private toastr: ToastrService,
    private produtoService: ProdutoService,
    private precoService: ProdutoPrecoService,

  ) {
    this.formProdutoPreco = formBuilder.group({
      id: [''],
      data_inicio: ['', Validators.required],
      data_fim: [''],
      preco: ['', Validators.required],
      produto: formBuilder.group({
        id: ['', Validators.required]
      })
      
    });

    this.dataSource = new MatTableDataSource(this.precos);
  }

  ngOnInit() {

    this.initializeObjects();
  }

  initializeObjects() {
    this.precoService.getAllProdutoPreco()
      .subscribe(res => {
        this.dataSource.data = res as ProdutoPreco[];
      });

    this.produtoService.getAllProduto()
        .subscribe(produtos => this.produtos = produtos);
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
    this.formProdutoPreco.patchValue({
      id: dados.id,
      data_inicio: dados.data_inicio,
      data_fim: dados.data_fim,
      produto: dados.produto,
      preco: dados.preco
    });
  }

  excluir(preco) {
    let resp = confirm('Deseja mesmo excluir este preço ?');
    if (resp === true) {
      this.precoService.deleteProdutoPreco(preco.id)
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

  editar(preco) {
    this.popularDadosForm(preco);
  }


  sendSaveRequest() {
    var result,
      precoValue = this.formProdutoPreco.value;

    if (precoValue.id) {
      console.log("UPDATE")
      result = this.precoService.updateProdutoPreco(precoValue)
        .subscribe(
          suc => {
            alert('Preço editado com sucesso');
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
      result = this.precoService.saveProdutoPrecor(precoValue)
        .subscribe(
          suc => {
            alert('Preço cadastrado com sucesso');
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
