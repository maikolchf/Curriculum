import { Component } from '@angular/core';
import { PathTerminalComponent } from '../path-terminal/path-terminal.component';

@Component({
    selector: 'app-tracks',
    templateUrl: './tracks.component.html',
    styleUrl: './tracks.component.scss',
    standalone: true,
    imports: [PathTerminalComponent]
})
export class TracksComponent {

}
