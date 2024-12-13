import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selection',
  standalone: false,

  templateUrl: './selection.component.html',
  styleUrl: './selection.component.css'
})
export class SelectionComponent {
  @Input() title: string = ''
  @Input() description: string = ''
}
