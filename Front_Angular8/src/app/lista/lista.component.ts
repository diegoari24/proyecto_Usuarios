import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../compartir/usuario';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
API_END = 'http://localhost:8000/api';
usuarios: Usuario[];
  constructor(private usuarioService: UsuariosService) {
this.getUsuarios();
}

getUsuarios(){
  this.usuarioService.get().subscribe((dato: Usuario[]) => {
    this.usuarios = dato;
  }, (error) => {
    console.log(error);
    alert('algo ocurrio');
  });
}
  ngOnInit() {
  }

  delete(id){
    if(confirm('desea eliminar el usuario?')){
      this.usuarioService.delete(id).subscribe((dato: Usuario[]) => {
        alert('Se ha eliminado el usuario');
        console.log(dato);
        this.getUsuarios();
      }, (error) => {
        console.log(error);
      });
    }

  }
}
