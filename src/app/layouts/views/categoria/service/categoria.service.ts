import { Categoria } from './../../../../domain/categoria/categoria';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';;
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private ip: String = 'https://bystack-server-java.herokuapp.com/';
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient, private router: Router) { }

  
  getAllCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.ip + "categoria/getall");
  }

  getCategoria(id): Observable<Categoria> {
    return this.http.get<Categoria>(this.ip + "categoria/get/" + id);
  }

  saveCategoria(categoria) {
    return this.http.post(this.ip + "categoria/add ", JSON.stringify(categoria), this.options);
  }

  updateCategoria(categoria) {
    return this.http.put(this.ip + "categoria/update/" + categoria.id, JSON.stringify(categoria), this.options);
  }

  deleteCategoria(id) {
    return this.http.delete(this.ip + "categoria/delete/" + id);
  }
}
