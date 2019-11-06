import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Produto } from 'app/domain/produto/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private ip: String = 'https://bystack-server-java.herokuapp.com/';
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient, private router: Router) { }

  
  getAllProduto(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.ip + "produto/getall");
  }

  getProduto(id): Observable<Produto> {
    return this.http.get<Produto>(this.ip + "produto/get/" + id);
  }

  saveProduto(produto) {
    return this.http.post(this.ip + "produto/add ", JSON.stringify(produto), this.options);
  }

  updateProduto(produto) {
    return this.http.put(this.ip + "produto/update/" + produto.id, JSON.stringify(produto), this.options);
  }

  deleteProduto(id) {
    return this.http.delete(this.ip + "produto/delete/" + id);
  }

}