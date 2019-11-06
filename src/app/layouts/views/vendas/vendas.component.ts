
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { MovimentacaoSaida } from 'app/domain/movimentacaosaida/movimentacaosaida';
import { NotaFiscalSaida } from 'app/domain/notafiscalsaida/notafiscalsaida';
import { MovimentacaoSaidaService } from './service/movimentacao-saida.service';
import { NotafiscalSaidaService } from './service/notafiscal-saida.service';
import { DetalhesService } from './service/detalhes.service';
import { VendaProduto } from 'app/domain/venda-produto/venda-produto';


@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements OnInit {

  modal: boolean = false;

  formNotaFiscalSaida: FormGroup;

  movimentacao_saida: MovimentacaoSaida = new MovimentacaoSaida();
  movimentacao_saidas: MovimentacaoSaida[];

  notaSaida: NotaFiscalSaida = new NotaFiscalSaida();
  notasSaidas: NotaFiscalSaida[];

  produto: VendaProduto = new VendaProduto();
  produtos: VendaProduto[];

  displayedColumns = ['cod', 'usuario', 'valor_total', 'data_movimentacao', 'detalhes'];
  dataSource: MatTableDataSource<MovimentacaoSaida>;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(

    formBuilder: FormBuilder,
    private toastr: ToastrService,
    private movimentacaoSaidaService: MovimentacaoSaidaService,
    private notaSaidaService: NotafiscalSaidaService,
    private detalheService: DetalhesService

  ) {

    this.formNotaFiscalSaida = formBuilder.group({
      id_nota_fiscal_saida: [''],
      movimentacao_saida: formBuilder.group({
        id: ['', Validators.required]
      }),
      data_nota: ['', Validators.required]
    });

    this.dataSource = new MatTableDataSource(this.movimentacao_saidas);
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
    this.movimentacaoSaidaService.getAllMovimentacaoSaida()
      .subscribe(res => {
        this.dataSource.data = res as MovimentacaoSaida[];
      });

    this.movimentacaoSaidaService.getAllMovimentacaoSaida()
      .subscribe(saidas => this.movimentacao_saidas = saidas);

  }

  popularDadosForm(dados) {

    this.formNotaFiscalSaida.patchValue({
      id_nota_fiscal_saida: dados.id_nota_fiscal_saida,
      id_movimentacao_saida: dados.id_movimentacao_saida,
      data_nota: dados.data_nota
    });

  }

  excluirNotaSaida(movimentacaoSaida) {
    let resp = confirm('Deseja mesmo excluir esta movimentação de saida ?');
    if (resp === true) {
      this.notaSaidaService.deleteNotaFiscalSaida(movimentacaoSaida.id)
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

  editarNotaSaida(notaSaida) {
    this.popularDadosForm(notaSaida);
    $("#listaPessoas").toggle("slow");
  }


  sendSaveRequestMovimentacao() {
    var result,
      movimentacaoSaidaValue = this.formNotaFiscalSaida.value;

    if (movimentacaoSaidaValue.id) {
      console.log("UPDATE")
      result = this.notaSaidaService.updateNotaFiscalSaida(movimentacaoSaidaValue)
        .subscribe(
          suc => {
            alert('Movimentacao de saida editada com sucesso');
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
      result = this.notaSaidaService.saveNotaFiscalSaida(movimentacaoSaidaValue)
        .subscribe(
          suc => {
            alert('Movimentacao de saida cadastrada com sucesso');
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

  detalhes(detalhes) {
    this.detalheService.getDetalhes(detalhes.id)
    .subscribe(detalhes => this.produtos = detalhes);
  }

}
