import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Eqs } from './eqs';
import { Pr } from './pr';
@Component({
  selector: 'app-manage4',
  templateUrl: './manage4.component.html',
  styleUrls: ['./manage4.component.css']
})
export class Manage4Component implements OnInit {
  ProductName:string;
myForm:FormGroup;
myForm1:FormGroup;
name: AbstractControl;
ProductKey: AbstractControl;
id: AbstractControl;
ProductKey1: AbstractControl;
DeviceName:AbstractControl;
DeviceSecret:AbstractControl;
prs$:Observable<Pr>;
eqs$:Observable<Eqs>
pr:string
currentUser:Eqs
zz;
t1;
baseUrl="http://127.0.0.1:8080/";
constructor(private fb:FormBuilder,private httpClient:HttpClient) { 
  this.myForm=this.fb.group({
    'ProductKey':[''],
    'name':[''],
  });
  this.ProductKey=this.myForm.controls['ProductKey'];
  this.name=this.myForm.controls['name'];
this.myForm1=this.fb.group({
  'ProductKey1':[''],
  'DeviceName':[''],  
  'DeviceSecret':[''],
'id':['']
})
this.ProductKey1=this.myForm1.controls['ProductKey1'];
this.DeviceName=this.myForm1.controls['DeviceName'];
this.DeviceSecret=this.myForm1.controls['DeviceSecret'];
this.id=this.myForm1.controls['id']
}
ngOnInit(): void {
 this.prs$=<Observable<Pr>>this.httpClient.get(this.baseUrl+'serch');
    }
eq(cc:HTMLInputElement){
  const xx=""+cc;//从HTMLInputElement类型转string
   this.zz=[xx]   
 this.eqs$=<Observable<Eqs>>this.httpClient.post(this.baseUrl+'zzz',this.zz)
}   
    searcheq(){
      this.eqs$=<Observable<Eqs>>this.httpClient.post(this.baseUrl+'zzz',this.zz)
    }
    add() {
        console.log(this.myForm.value);
        // 对于可观察对象执行，我们需要订阅其结果
        this.httpClient.post(this.baseUrl + 'creq',this.myForm.value).subscribe(
        (val: any) => {  // val是服务器返回的值
          if (val.succ) {
           alert('添加成功!');
      this.prs$=<Observable<Pr>>this.httpClient.get(this.baseUrl+'serch');
         }
        }
       );
      }
 addeq(){
   console.log(this.myForm1.value)
  this.httpClient.post(this.baseUrl+'addeq',this.myForm1.value).subscribe(
    (val: any) => {  // val是服务器返回的值
        if (val.succ) {
         alert('添加成功!');
    console.log(this.zz)
    this.searcheq()
       }
      }
);
 }
  delete(){
      this.httpClient.post(this.baseUrl + 'deleq',this.myForm.value).subscribe(
        (val: any) => {  // val是服务器返回的值
          if (val.succ) {
       alert('删除成功!');
      this.prs$=<Observable<Pr>>this.httpClient.get(this.baseUrl+'serch');
         }
        }
       );
      }
deleteeq(){
  this.httpClient.post(this.baseUrl+'deleteeq',this.myForm1.value).subscribe(
      (val: any) => {  // val是服务器返回的值
          if (val.succ) {
      alert('删除成功!');
      console.log(this.zz)
      this.searcheq()
         }
        }
  );
}
glink(){
  this.httpClient.post(this.baseUrl+'glink',this.myForm1.value).subscribe(
      (val: any) => {  // val是服务器返回的值
          if (val.succ) {
      alert('删除成功!');
      console.log(this.zz)
      this.searcheq()
         }
        }
  );
    }
}
