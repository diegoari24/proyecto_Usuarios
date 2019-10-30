import { Component, OnInit } from '@angular/core';
import { Usuario } from '../compartir/usuario';
import { UsuariosService } from '../services/usuarios.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

usuario: Usuario =
{
nombre: null,
apellidos: null,
cedula: null,
correo: null,
telefono: null
};
id: any;
editar: boolean = false;
usuarios: Usuario[];
  constructor(private usuarioService: UsuariosService, private activatedRoute: ActivatedRoute) {
   this.id = this.activatedRoute.snapshot.params['id'];
   if (this.id) {
     this.editar = true;
     this.usuarioService.get().subscribe((dato: Usuario[]) => {
      this.usuarios = dato;
      this.usuario = this.usuarios.find((m) => {return m.id == this.id});
      console.log(this.usuario);
    }, (error) => {
      console.log(error);
    });
   } else {
   this.editar = false;
  }
  }

  ngOnInit() {
  }

  saveUsuario() {
    if (this.editar) {
      this.usuarioService.put(this.usuario).subscribe((dato) => {
        alert('Usuario actualizado con exito');
        console.log(dato);
      }, (error) => {
        console.log(error);
        alert('ocurrio una problema');
      });
    } else {
      this.usuarioService.save(this.usuario).subscribe((dato) => {
        alert('Usuario guardado con exito');
        console.log(dato);
      }, (error) => {
        console.log(error);
        alert('ocurrio una problema');
      });
    }
  }

}
