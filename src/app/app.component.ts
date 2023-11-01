import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'advance';
  num:number=50;
  isClick:boolean=false;
  onClick(){
    this.isClick=true;
  }
}
