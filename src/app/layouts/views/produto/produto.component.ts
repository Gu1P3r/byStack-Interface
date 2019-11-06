import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Produto } from 'app/domain/produto/produto';
import { ProdutoService } from './service/produto.service';
import { CategoriaService } from '../categoria/service/categoria.service';
import { Categoria } from 'app/domain/categoria/categoria';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  modal: boolean = false;

  variavel: string = null;
  formProduto: FormGroup;
  produto: Produto = new Produto();
  produtos: Produto[];

  categoria: Categoria = new Categoria();
  categorias: Categoria[];

  displayedColumns = ['cod', 'nome', 'cod_barra', 'quantidade', 'editar', 'excluir', 'gerarQR'];
  dataSource: MatTableDataSource<Produto>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  constructor(

    formBuilder: FormBuilder,
    private toastr: ToastrService,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService

  ) {
    this.formProduto = formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      categoria: formBuilder.group({
        id: ['', Validators.required]
      }),
      cod_barra: ['', Validators.required],
      quantidade: ['', Validators.required]
      
    });

    this.dataSource = new MatTableDataSource(this.produtos);
    var valor = this.formProduto.value.cod_barra;
    console.log(valor);
    
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

  geraQR(produto){

    this.modal = true;
    this.variavel = produto.cod_barra.toString();
    console.log(this.variavel);

  }

  initializeObjects() {
    this.produtoService.getAllProduto()
      .subscribe(res => {
        this.dataSource.data = res as Produto[];
      });

    this.categoriaService.getAllCategoria()
      .subscribe(categorias => this.categorias = categorias);
  }

  popularDadosForm(dados) {
    this.formProduto.patchValue({
      id: dados.id,
      nome: dados.nome,
      razao_social: dados.razao_social,
      cod_barra: dados.cod_barra,
      categoria:dados.categoria,
      quantidade: dados.quantidade
    });
  }

  excluir(produto) {
    let resp = confirm('Deseja mesmo excluir este produto ?');
    if (resp === true) {
      this.produtoService.deleteProduto(produto.id)
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

  editar(produto) {
    this.popularDadosForm(produto);
  }


  sendSaveRequest() {
      var result,
       produtoValue = this.formProduto.value;

    if (produtoValue.id) {
      console.log("UPDATE")
      result = this.produtoService.updateProduto(produtoValue)
        .subscribe(
          suc => {
            alert('Produto editado com sucesso');
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
      result = this.produtoService.saveProduto(produtoValue)
        .subscribe(
          suc => {
            alert('Produto cadastrado com sucesso');
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
