import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // si usás rutas
import { CommonModule } from '@angular/common';
import { BannerComponent } from './Componentes/banner/banner.component';
import { AboutComponent } from './Componentes/about/about.component';
import { TracksComponent } from './Componentes/tracks/tracks.component';
import { WorkExperienceComponent } from './Componentes/work-experience/work-experience.component';
import { ContactComponent } from './Componentes/contact/contact.component';
import { FooterComponent } from './Componentes/footer/footer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
      CommonModule,
      RouterModule,
      BannerComponent,
      AboutComponent,
      TracksComponent,
      WorkExperienceComponent,
      ContactComponent,
      FooterComponent
    ],
})
export class AppComponent {
  title = 'mi_portafolio';
}
