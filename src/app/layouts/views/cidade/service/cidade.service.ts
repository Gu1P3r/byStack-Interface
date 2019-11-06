import { Cliente } from './../../../../domain/cliente/cliente';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Cidade } from 'app/domain/cidade/cidade';


@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  private ip: String = 'https://bystack-server-java.herokuapp.com/';
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient, private router: Router) { }

  
  getAllCidade(): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(this.ip + "cidade/getall");
  }

  getCidade(id): Observable<Cidade> {
    return this.http.get<Cidade>(this.ip + "cidade/get/" + id);
  }

  saveCidade(cidade) {
    return this.http.post(this.ip + "cidade/add ", JSON.stringify(cidade), this.options);
  }

  updateCidade(cidade) {
    return this.http.put(this.ip + "cidade/update/" + cidade.id, JSON.stringify(cidade), this.options);
  }

  deleteCidade(id) {
    return this.http.delete(this.ip + "cidade/delete/" + id);
  }

}