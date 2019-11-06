import { Cliente } from './../../../../domain/cliente/cliente';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private ip: String = 'https://bystack-server-java.herokuapp.com/';
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient, private router: Router) { }

  
  getAllCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.ip + "cliente/getall");
  }

  getCliente(id): Observable<Cliente> {
    return this.http.get<Cliente>(this.ip + "cliente/get/" + id);
  }

  saveCliente(cliente) {
    return this.http.post(this.ip + "cliente/add ", JSON.stringify(cliente), this.options);
  }

  updateCliente(cliente) {
    return this.http.put(this.ip + "cliente/update/" + cliente.id, JSON.stringify(cliente), this.options);
  }

  deleteCliente(id) {
    return this.http.delete(this.ip + "cliente/delete/" + id);
  }

}