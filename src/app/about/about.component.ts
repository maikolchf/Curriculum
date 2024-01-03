import { Component } from '@angular/core';
import { environment } from './../../environments/environment'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  imagenPerfil: string = '../../assets/img/Img-perfil.jpg';  
}
