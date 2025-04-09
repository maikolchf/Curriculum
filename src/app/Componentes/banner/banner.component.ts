import { Component } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true, // Lo ponemos como standalone
  imports: [CommonModule], // Importamos CommonModule
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent {
 
 usuario : Usuario =  obtenerInformacionUsuario();
 constructor(){
  this.usuario.pasatiemposConcat = this.usuario.pasatiempos?.map(item => `'${item}'`).join(', ') ?? ''
 }
}

function obtenerInformacionUsuario(): Usuario {
  return {
    id: 1,
    nombre: 'Michael Chavarria Flores',
    puesto: 'Fullstack Developer',
    pasatiempos: ['Ciclismo','Video Juegos']
  };
}



