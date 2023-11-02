import { Component } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() updateTopicEvent=new EventEmitter<string>();
  val:string='';
  onChange(){
   this.updateTopicEvent.emit(this.val);
    
  }
}
