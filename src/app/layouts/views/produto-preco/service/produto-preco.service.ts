import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { ProdutoPreco } from 'app/domain/produtopreco/produtopreco';

@Injectable({
  providedIn: 'root'
})
export class ProdutoPrecoService {

  private ip: String = 'https://bystack-server-java.herokuapp.com/';

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient, private router: Router) { }

  
  getAllProdutoPreco(): Observable<ProdutoPreco[]> {
    return this.http.get<ProdutoPreco[]>(this.ip + "produto_preco/getall");
  }

  getProdutoPrecor(id): Observable<ProdutoPreco> {
    return this.http.get<ProdutoPreco>(this.ip + "produto_preco/get/" + id);
  }

  saveProdutoPrecor(produto) {
    return this.http.post(this.ip + "produto_preco/add ", JSON.stringify(produto), this.options);
  }

  updateProdutoPreco(produto) {
    return this.http.put(this.ip + "produto_preco/update/" + produto.id, JSON.stringify(produto), this.options);
  }

  deleteProdutoPreco(id) {
    return this.http.delete(this.ip + "produto_preco/delete/" + id);
  }
}
  
