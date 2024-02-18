import { Component, OnInit } from '@angular/core';
import { Modale } from './models/model.component';
import { NEVER } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myModel!: Modale; 
  ngOnInit(): void {
     this.myModel= new Modale("Nihel BELHADJ KACEM");
   }

}
