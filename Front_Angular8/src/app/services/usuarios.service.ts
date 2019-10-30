import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../compartir/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  API_END = 'http://localhost:8000/api';
  constructor(private httpClient: HttpClient ) { }

  get() {
    return this.httpClient.get(this.API_END + '/usuarios');
  }

  save(usuario: Usuario) {
    //diferent request to get, preference post
const headers = new HttpHeaders({'Content-type': 'application/json'});
return this.httpClient.post(this.API_END + '/usuarios', usuario, {headers: headers})
  }

  put(usuario) {
    const headers = new HttpHeaders({'Content-type': 'application/json'});
return this.httpClient.put(this.API_END + '/usuarios/' + usuario.id, usuario, {headers: headers})
  }
  delete(id) {
    return this.httpClient.delete(this.API_END + '/usuarios/' + id);
  }

}
