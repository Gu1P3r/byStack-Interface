import { Fornecedor } from './../../../../domain/fornecedor/fornecedor';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FornecedorFornecedorService {

  private ip: String = 'https://bystack-server-java.herokuapp.com/';

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient, private router: Router) { }

  
  getAllFornecedor(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.ip + "fornecedor/getall");
  }

  getFornecedor(id): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(this.ip + "fornecedor/get/" + id);
  }

  saveFornecedor(Fornecedor) {
    return this.http.post(this.ip + "fornecedor/add ", JSON.stringify(Fornecedor), this.options);
  }

  updateFornecedor(Fornecedor) {
    return this.http.put(this.ip + "fornecedor/update/" + Fornecedor.id, JSON.stringify(Fornecedor), this.options);
  }

  deleteFornecedor(id) {
    return this.http.delete(this.ip + "fornecedor/delete/" + id);
  }
}
  
