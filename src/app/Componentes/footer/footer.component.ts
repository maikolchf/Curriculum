import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    standalone: true
})
export class FooterComponent {

  correoElectronico: string = 'maikolchf@outlook.com';
  celular: string = '+(506) 83588363';
  anno: number = obtenerAnno();  
}

function obtenerAnno(): number {
  const fechaActual = new Date();
  return fechaActual.getFullYear();
}
