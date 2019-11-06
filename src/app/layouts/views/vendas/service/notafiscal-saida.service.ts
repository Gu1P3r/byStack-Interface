import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { MovimentacaoSaida } from 'app/domain/movimentacaosaida/movimentacaosaida';
import { NotaFiscalSaida } from 'app/domain/notafiscalsaida/notafiscalsaida';

@Injectable({
  providedIn: 'root'
})
export class NotafiscalSaidaService {

  private ip: String = 'https://bystack-server-java.herokuapp.com/';

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient, private router: Router) { }

  
  getAllNotaFiscalSaida(): Observable<NotaFiscalSaida[]> {
    return this.http.get<NotaFiscalSaida[]>(this.ip + "nota_fiscal_saida/getall");
  }

  getNotaFiscalSaida(id): Observable<NotaFiscalSaida> {
    return this.http.get<NotaFiscalSaida>(this.ip + "nota_fiscal_saida/get/" + id);
  }

  saveNotaFiscalSaida(notafiscal_saida) {
    return this.http.post(this.ip + "nota_fiscal_saida/add ", JSON.stringify(notafiscal_saida), this.options);
  }

  updateNotaFiscalSaida(notafiscal_saida) {
    return this.http.put(this.ip + "nota_fiscal_saida/update/" + notafiscal_saida.id, JSON.stringify(notafiscal_saida), this.options);
  }

  deleteNotaFiscalSaida(id) {
    return this.http.delete(this.ip + "nota_fiscal_saida/delete/" + id);
  }

}