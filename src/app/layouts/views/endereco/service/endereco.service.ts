import { Endereco } from './../../../../domain/endereco/endereco';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private ip: String = 'https://bystack-server-java.herokuapp.com/';
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient, private router: Router) { }

  
  getAllEndereco(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.ip + "endereco/getall");
  }

  getEndereco(id): Observable<Endereco> {
    return this.http.get<Endereco>(this.ip + "endereco/get/" + id);
  }

  saveEndereco(endereco) {
    return this.http.post(this.ip + "endereco/add ", JSON.stringify(endereco), this.options);
  }

  updateEndereco(endereco) {
    return this.http.put(this.ip + "endereco/update/" + endereco.id, JSON.stringify(endereco), this.options);
  }

  deleteEndereco(id) {
    return this.http.delete(this.ip + "endereco/delete/" + id);
  }
}
  
