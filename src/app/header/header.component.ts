import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private route:Router){}
  goToAbout(){
    this.route.navigate(['about']);
  }
  goToHome(){
    this.route.navigate(['home']);
  }
  goToProducts(){
    this.route.navigate(['products']);
  }
}
