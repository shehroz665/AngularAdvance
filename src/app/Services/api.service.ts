import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  uploadFile(url:string,data:any){
    return this.http.post(url,data);
  }
  getFile(url:string){
    const headers = new HttpHeaders({
      'Accept': 'image/jpg',  
    });
    return this.http.get(url,{  responseType: 'blob' });
  }
}
