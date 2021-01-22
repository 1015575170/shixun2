import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  SERVER_URL = 'http://127.0.0.1:8080/jk';
  SERVER_URL1 = 'http://127.0.0.1:8080/feed';
  SERVER_URL2 = 'http://127.0.0.1:8080/dangwei';
  SERVER_URL3 = 'http://127.0.0.1:8080/baowen';
  SERVER_URL4 = 'http://127.0.0.1:8080/baowen1';
  SERVER_URL5 = 'http://127.0.0.1:8080/hum1';
  SERVER_URL6 = 'http://127.0.0.1:8080/temp';
  SERVER_URL7 = 'http://127.0.0.1:8080/hum';
  SERVER_URL8 = 'http://127.0.0.1:8080/dogT';
  // feed$=null;
  // dangwei$=null;
  // led$=null;
  httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'
  })
  };
  constructor(private httpClient: HttpClient) { }
  toggleLED(status:number){
    const obj = {
    status: status
    };
    //console.log(obj)
  return this.httpClient.post(this.SERVER_URL,obj,this.httpOptions);
    }
  getLED(){
    return this.httpClient.get(this.SERVER_URL);
  }

  togglefeed(status:number){
    const obj = {
    status: status
    };
    //console.log(obj)
  return this.httpClient.post(this.SERVER_URL1,obj,this.httpOptions);
    }
  getfeed(){
    return this.httpClient.get(this.SERVER_URL1);
  }  

  toggledangwei(status:number){
    const obj = {
    status: status
    };
    //console.log(obj)
  return this.httpClient.post(this.SERVER_URL2,obj,this.httpOptions);
    }
  getdw(){
    return this.httpClient.get(this.SERVER_URL2);
  }
  getbaowen(){
    return this.httpClient.get(this.SERVER_URL3);
  }
  getbaowen1(){
    return this.httpClient.get(this.SERVER_URL4);
  }
  gethum1(){
    return this.httpClient.get(this.SERVER_URL5);
  }
  gettemp(){
    return this.httpClient.get(this.SERVER_URL6);
  }
  gethum(){
    return this.httpClient.get(this.SERVER_URL7);
  }
  getdogT(){
    return this.httpClient.get(this.SERVER_URL8);
  }
}
    
      