import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { MovimentacaoSaida } from 'app/domain/movimentacaosaida/movimentacaosaida';
import { VendaProduto } from 'app/domain/venda-produto/venda-produto';

@Injectable({
  providedIn: 'root'
})
export class DetalhesService {

  private ip: String = 'https://bystack-server-java.herokuapp.com/';

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient, private router: Router) { }

  getDetalhes(id): Observable<VendaProduto[]> {
    return this.http.get<VendaProduto[]>(this.ip + "venda_produto/getVendaMov/" + id);
  }
}