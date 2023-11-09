import { resolve } from '@angular-devkit/core';
import { Component } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { ApiService } from './Services/api.service';
Chart.register(...registerables);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:string='';
  topic: string = 'Hello Word';
  title = 'advance';
  num: number = 50;
  status: boolean = false;
  myPromise: any;
  chartInstance : Chart | undefined;
  labels:string[]= ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
  dataArr:number[]=[12, 19, 3, 5, 2, 3];
  backgroundColor:string[]=['red','blue','yellow','green', 'purple', 'orange'];
  users: any[] = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 3, name: 'c' },
  { id: 4, name: 'd' },
  { id: 5, name: 'e' }
  ];
  //
  selectedFile: File | null = null;
  imageUrl: string | ArrayBuffer | null = null;
  constructor(private api:ApiService){

  }
  ngOnInit(): void { 
    this.api.getFile('https://localhost:7295/api/auth/file').subscribe((response:Blob)=> {
      //this.selectedFile=response;
      this.imageUrl = URL.createObjectURL(response);
      
    })
    this.RenderChart(this.labels,this.dataArr,this.backgroundColor,'bar','barChart');
    this.RenderChart(this.labels,this.dataArr,this.backgroundColor,'pie','pieChart');
  }
  updateChart(){
    console.log(this.chartInstance);
    
    if (this.chartInstance) {
      this.chartInstance.data.labels = ['New Red', 'New Blue', 'New Yellow', 'New Green', 'New Purple'];
      this.chartInstance.data.datasets[0].data = [10, 15, 5, 8, 12];
      this.chartInstance.update();
    }  


  }
  RenderChart(labels:string[],dataArr:number[],backgroundColor:string[],charType:any,id:any){

  this.chartInstance=new Chart(id, {
      type: charType,
      data: {
        labels: labels,
  
        datasets: [{
          label: '# of Votes',
          data: dataArr,
          borderWidth: 1,
          backgroundColor:backgroundColor,
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
    
    
  //  this.chartInstance=  new Chart("barChart", {
  //     type: 'bar',
  //     data: {
  //       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  
  //       datasets: [{
  //         label: '# of Votes',
  //         data: [12, 19, 3, 5, 2, 3],
  //         borderWidth: 1,
  //         backgroundColor:['red','blue','yellow','green', 'purple', 'orange'],
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true
  //         }
  //       }
  //     }
  //   });    
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
  //
  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }
  uploadFile() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('formFile', this.selectedFile);
      this.api.uploadFile('https://localhost:7295/api/auth/file',formData).subscribe((response:any)=> {
        console.log(response);
      })
    } else {
      console.log('No file selected');
    }
  }

}
