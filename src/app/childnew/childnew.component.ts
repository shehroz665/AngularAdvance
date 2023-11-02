import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-childnew',
  templateUrl: './childnew.component.html',
  styleUrls: ['./childnew.component.css']
})
export class ChildnewComponent {
  @Input() parentData:any='';
}
