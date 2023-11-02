import { resolve } from '@angular-devkit/core';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'advance';
  num:number=50;
  status:boolean=false;
  myPromise:any;
  users:any[]=[
    {id:1,name:'a'},
    {id:2,name:'b'},
    {id:3,name:'c'},
    {id:4,name:'d'},
    {id:5,name:'e'},
]
  onRefresh(){
    if(this.users.length===5){
      this.users=[
        {id:1,name:'a'},
        {id:2,name:'b'},
        {id:4,name:'d'},
        {id:5,name:'e'},
        {id:6,name:'f'},
        {id:7,name:'g'},
    ]
    }
    else{
      this.users=[
        {id:1,name:'a'},
        {id:2,name:'b'},
        {id:3,name:'c'},
        {id:4,name:'d'},
        {id:5,name:'e'},
    ]
    }
  }
  trackByUser(index:number,item:any){
    // return index;
    return item.id;
  }
  ngOnInit(): void {
    
  }
}
