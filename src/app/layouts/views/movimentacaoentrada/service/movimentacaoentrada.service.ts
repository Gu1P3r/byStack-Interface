import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { MovimentacaoEntrada } from 'app/domain/movimentacaoentrada/movimentacaoentrada';



@Injectable({
  providedIn: 'root'
})
export class MovimentacaoEntradaService {

  private ip: String = 'https://bystack-server-java.herokuapp.com/';

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient, private router: Router) { }

  
  getAllMovimentacaoEntrada(): Observable<MovimentacaoEntrada[]> {
    return this.http.get<MovimentacaoEntrada[]>(this.ip + "movimentacao_entrada/getall");
  }

  getMovimentacaoEntrada(id): Observable<MovimentacaoEntrada> {
    return this.http.get<MovimentacaoEntrada>(this.ip + "movimentacao_entrada/get/" + id);
  }

  saveMovimentacaoEntrada(movimentacaoEntrada) {
    return this.http.post(this.ip + "movimentacao_entrada/add ", JSON.stringify(movimentacaoEntrada), this.options);
  }

  updateMovimentacaoEntrada(movimentacaoEntrada) {
    return this.http.put(this.ip + "movimentacao_entrada/update/" + movimentacaoEntrada.id, JSON.stringify(movimentacaoEntrada), this.options);
  }

  deleteMovimentacaoEntrada(id) {
    return this.http.delete(this.ip + "movimentacao_entrada/delete/" + id);
  }

}