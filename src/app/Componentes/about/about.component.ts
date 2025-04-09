import { Component } from '@angular/core';
import { environment } from '../../../environments/environment'

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: false
})
export class AboutComponent {
  imagenPerfil: string = "";
  TablaMostrar: string[] = [];

  constructor(){
    if(environment.production){
      this.imagenPerfil = environment.imfPerfil;
    }else {
      this.imagenPerfil = '../../assets/img/Img-perfil.jpg';
    }
    this.misConocimientos()
  }

  misConocimientos() {      
     this.TablaMostrar = [
      "+--------------------------------------------------------+",
      "|                    Mis Conocimientos                   |",
      "+---------------------------+----------------------------+",
      "|Lenguajes de programación  |Frameworks y herramientas   |",
      "+---------------------------+----------------------------+",
      "|Linux                      |.Net Framework              |",
      "|HTML5                      |.Net Core                   |",
      "|CSS3                       |Angular                     |",
      "|JavaScript                 |MVC                         |",
      "|Firebase                   |...                         |",
      "|SQL Server                 |                            |",
      "|...                        |                            |",
      "+---------------------------+----------------------------+"
    ];
  }
}
