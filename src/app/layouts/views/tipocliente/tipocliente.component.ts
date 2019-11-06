import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { TipoCliente } from 'app/domain/tipocliente/tipocliente';
import { TipoClienteService } from './service/tipocliente.service';

@Component({
  selector: 'app-tipocliente',
  templateUrl: './tipocliente.component.html',
  styleUrls: ['./tipocliente.component.scss']
})
export class TipoClienteComponent implements OnInit {

  formTipoCliente: FormGroup;
  tipoCliente: TipoCliente = new TipoCliente();
  tiposClientes: TipoCliente[];


  displayedColumns = ['cod', 'descricao', 'editar', 'excluir'];
  dataSource: MatTableDataSource<TipoCliente>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(

    formBuilder: FormBuilder,
    private toastr: ToastrService,
    private tipoclienteService: TipoClienteService,

  ) {
    this.formTipoCliente = formBuilder.group({
      id: [''],
      descricao: ['', Validators.required]
    });

    this.dataSource = new MatTableDataSource(this.tiposClientes);
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
    this.tipoclienteService.getAllTipos()
      .subscribe(res => {
        this.dataSource.data = res as TipoCliente[];
      });
  }

  popularDadosForm(dados) {
    this.formTipoCliente.patchValue({
      id: dados.id,
      descricao: dados.descricao,
  
    });
  }

  excluir(tipocliente) {
    let resp = confirm('Deseja mesmo excluir este tipo de ciente ?');
    if (resp === true) {
      this.tipoclienteService.deleteTipoCliente(tipocliente.id)
        .subscribe(
          suc => {
            alert('Registro excluido com sucesso.');
          },
          err => {
            alert('Ocorreu um erro ao tentar excluir o registro');
          }
        )
    } else {
      return;
    }
  }

  editar(tipoclientes) {
    this.popularDadosForm(tipoclientes);
  }


  sendSaveRequest() {
    var result,
      tp_clienteValue = this.formTipoCliente.value;

    if (tp_clienteValue.id) {
      console.log("UPDATE")
      result = this.tipoclienteService.updateTipoCliente(tp_clienteValue)
        .subscribe(
          suc => {
            alert('Tipo cliente editado com sucesso');
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
      result = this.tipoclienteService.saveTipoCliente(tp_clienteValue)
        .subscribe(
          suc => {
            alert('Tipo cliente cadastrado com sucesso');
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
