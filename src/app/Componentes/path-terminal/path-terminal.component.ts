import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-path-terminal',
    templateUrl: './path-terminal.component.html',
    styleUrl: './path-terminal.component.scss',
    standalone: true
})
export class PathTerminalComponent {
 @Input() nombreFuncion: string = '';
 @Input() parametroFuncion: string = '';
}
