import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { MovimentacaoSaida } from 'app/domain/movimentacaosaida/movimentacaosaida';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoSaidaService {

  private ip: String = 'https://bystack-server-java.herokuapp.com/';

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient, private router: Router) { }

  
  getAllMovimentacaoSaida(): Observable<MovimentacaoSaida[]> {
    return this.http.get<MovimentacaoSaida[]>(this.ip + "movimentacao_saida/getall");
  }

  getMovimentacaoSaida(id): Observable<MovimentacaoSaida> {
    return this.http.get<MovimentacaoSaida>(this.ip + "movimentacao_saida/get/" + id);
  }

  saveMovimentacaoSaida(movimentacao_saida) {
    return this.http.post(this.ip + "movimentacao_saida/add ", JSON.stringify(movimentacao_saida), this.options);
  }

  updateMovimentacaoSaida(movimentacao_saida) {
    return this.http.put(this.ip + "movimentacao_saida/update/" + movimentacao_saida.id, JSON.stringify(movimentacao_saida), this.options);
  }

  deleteMovimentacaoSaida(id) {
    return this.http.delete(this.ip + "movimentacao_saida/delete/" + id);
  }

}