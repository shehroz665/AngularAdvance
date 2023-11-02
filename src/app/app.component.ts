import { resolve } from '@angular-devkit/core';
import { Component } from '@angular/core';
import { Chart,registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chartInstance:Chart | null=null;
  data:string='';
  topic: string = 'Hello Word';
  title = 'advance';
  num: number = 50;
  status: boolean = false;
  myPromise: any;
  constructor(){}
  ngOnInit(): void {
    this.RenderChart();
  }
  users: any[] = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 3, name: 'c' },
  { id: 4, name: 'd' },
  { id: 5, name: 'e' }
  ];
  updateChart(){
    if (this.chartInstance) {
      this.chartInstance.data.labels = ['New Red', 'New Blue', 'New Yellow', 'New Green', 'New Purple', 'New Orange'];
      this.chartInstance.data.datasets[0].data = [10, 15, 5, 8, 12, 4];
      this.chartInstance.update();
    }  
  }
  RenderChart(){
   this.chartInstance=  new Chart("barChart", {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          backgroundColor:['red','blue','yellow','green', 'purple', 'orange'],
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });    
  }
  updateTopic(item:string){
    this.topic=item;
  }
  onRefresh() {
    if (this.users.length === 5) {
      this.users = [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
        { id: 4, name: 'd' },
        { id: 5, name: 'e' },
        { id: 6, name: 'f' },
        { id: 7, name: 'g' },
      ]
    }
    else {
      this.users = [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
        { id: 3, name: 'c' },
        { id: 4, name: 'd' },
        { id: 5, name: 'e' },
      ]
    }
  }
  trackByUser(index: number, item: any) {
    // return index;
    return item.id;
  }
  onChangeParentData(){
    console.log(this.data); 
  }

}
