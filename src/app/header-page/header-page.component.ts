import { Component, Input } from '@angular/core';
import { Modale } from '../models/model.component';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent {
  @Input() model!: Modale;
  
}
