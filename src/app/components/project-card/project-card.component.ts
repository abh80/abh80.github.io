import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  @Input() name: string = '';
  @Input() github: string = '';
  @Input() cover: string = '';
  @Input() description: string = '';
  
  constructor() {}
}
