import { MovimentacaoEntrada } from 'app/domain/movimentacaoentrada/movimentacaoentrada';
import { NotaFiscalEntradaService } from '../notafiscal/service/notafiscalentrada.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { NotaFiscalEntrada } from 'app/domain/notafiscalentrada/notafiscalentrada';
import { MovimentacaoEntradaService } from '../movimentacaoentrada/service/movimentacaoentrada.service';

@Component({
  selector: 'app-notafiscal',
  templateUrl: './notafiscal.component.html',
  styleUrls: ['./notafiscal.component.scss']
})
export class NotafiscalComponent implements OnInit {

  formNotaFiscalEntrada: FormGroup;

  movimentacao_entrada: MovimentacaoEntrada = new MovimentacaoEntrada();
  movimentacao_entradas: MovimentacaoEntrada[];

  nota: NotaFiscalEntrada = new NotaFiscalEntrada();
  notas: NotaFiscalEntrada[];

  displayedColumns2 = ['cod', 'movimentacao_entrada', 'data_nota', 'editar', 'excluir'];
  dataSource2: MatTableDataSource<NotaFiscalEntrada>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(

    formBuilder: FormBuilder,
    private toastr: ToastrService,
    private movimentacaoEntradaService: MovimentacaoEntradaService,
    private notaFiscalEntradaService: NotaFiscalEntradaService,

  ) {
    this.formNotaFiscalEntrada = formBuilder.group({
      id_nota_fiscal_entrada: [''],
      movimentacao_entrada: formBuilder.group({
        id_movimentacao_entrada: ['', Validators.required]
      }),
      data_nota: ['', Validators.required],
    });

    this.dataSource2 = new MatTableDataSource(this.notas);


  }

  ngOnInit() {

    this.initializeObjects();


  }

  ngAfterViewInit() {
    this.dataSource2.paginator = this.paginator;
    this.dataSource2.sort = this.sort;
  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource2.filter = filterValue;
  }

  initializeObjects() {

    this.movimentacaoEntradaService.getAllMovimentacaoEntrada()
      .subscribe(res => this.movimentacao_entradas = res);

    this.notaFiscalEntradaService.getAllNotaFiscalEntrada()
      .subscribe(res => {
        this.dataSource2.data = res as NotaFiscalEntrada[];
      });
  }

  popularDadosForm(dados) {

    this.formNotaFiscalEntrada.patchValue({
      id_nota_fiscal_entrada: dados.id_nota_fiscal_entrada,
      data_nota_fiscal: dados.data_nota_fiscal,
      id_movimentacao_entrada: dados.id_movimentacao_entrada,
    });

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
