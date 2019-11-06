import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { TipoCliente } from 'app/domain/tipocliente/tipocliente';

@Injectable({
  providedIn: 'root'
})
export class TipoClienteService{

  private ip: String = 'https://bystack-server-java.herokuapp.com/';
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient, private router: Router) { }

  
  getAllTipos(): Observable<TipoCliente[]> {
    return this.http.get<TipoCliente[]>(this.ip + "tipo_cliente/getall");
  }

  getTipoCliente(id): Observable<TipoCliente> {
    return this.http.get<TipoCliente>(this.ip + "tipo_cliente/get/" + id);
  }

  saveTipoCliente(tipocliente) {
    return this.http.post(this.ip + "tipo_cliente/add", JSON.stringify(tipocliente), this.options);
  }

  updateTipoCliente(tipocliente) {
    return this.http.put(this.ip + "tipo_cliente/update/" + tipocliente.id, JSON.stringify(tipocliente), this.options);
  }

  deleteTipoCliente(id) {
    return this.http.delete(this.ip + "tipo_cliente/delete/" + id);
  }

}
