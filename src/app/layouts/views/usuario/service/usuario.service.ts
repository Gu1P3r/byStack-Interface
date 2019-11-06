import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Usuario } from 'app/domain/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private ip: String = 'https://bystack-server-java.herokuapp.com/';

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient, private router: Router) { }

  
  getAllUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.ip + "usuario/usuario/getall");
  }

  getUsuario(id): Observable<Usuario> {
    return this.http.get<Usuario>(this.ip + "usuario/usuario/get/" + id);
  }

  saveUsuario(Usuario) {
    return this.http.post(this.ip + "usuario/signup ", JSON.stringify(Usuario), this.options);
  }

  updateUsuario(Usuario) {
    return this.http.put(this.ip + "usuario/usuario/update/" + Usuario.id, JSON.stringify(Usuario), this.options);
  }

  deleteUsuario(id) {
    return this.http.delete(this.ip + "usuario/usuario/delete/" + id);
  }

}