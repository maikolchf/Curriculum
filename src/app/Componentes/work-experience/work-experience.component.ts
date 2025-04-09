import { Component } from '@angular/core';
import { PathTerminalComponent } from '../path-terminal/path-terminal.component';

@Component({
    selector: 'app-work-experience',
    templateUrl: './work-experience.component.html',
    styleUrl: './work-experience.component.scss',
    standalone: true,
    imports: [PathTerminalComponent]
})
export class WorkExperienceComponent {

}
