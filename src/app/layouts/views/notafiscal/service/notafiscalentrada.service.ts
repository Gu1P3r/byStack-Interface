import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { NotaFiscalEntrada } from 'app/domain/notafiscalentrada/notafiscalentrada';



@Injectable({
  providedIn: 'root'
})
export class NotaFiscalEntradaService {

  private ip: String = 'https://bystack-server-java.herokuapp.com/';
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient, private router: Router) { }

  
  getAllNotaFiscalEntrada(): Observable<NotaFiscalEntrada[]> {
    return this.http.get<NotaFiscalEntrada[]>(this.ip + "nota_fiscal_entrada/getall");
  }

  getNotaFiscalEntrada(id): Observable<NotaFiscalEntrada> {
    return this.http.get<NotaFiscalEntrada>(this.ip + "nota_fiscal_entrada/get/" + id);
  }

  saveNotaFiscalEntrada(NotaFiscalEntrada) {
    return this.http.post(this.ip + "nota_fiscal_entrada/add ", JSON.stringify(NotaFiscalEntrada), this.options);
  }

  updateNotaFiscalEntrada(NotaFiscalEntrada) {
    return this.http.put(this.ip + "nota_fiscal_entrada/update/" + NotaFiscalEntrada.id, JSON.stringify(NotaFiscalEntrada), this.options);
  }

  deleteNotaFiscalEntrada(id) {
    return this.http.delete(this.ip + "nota_fiscal_entrada/delete/" + id);
  }

}