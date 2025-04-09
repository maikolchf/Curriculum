import { Component } from '@angular/core';
import { PathTerminalComponent } from '../path-terminal/path-terminal.component';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    standalone: true,
    imports: [PathTerminalComponent]
})
export class ContactComponent {

}
