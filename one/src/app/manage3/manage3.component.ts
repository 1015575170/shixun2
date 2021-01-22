import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from './user';
  currentUser: User;

@Component({
  selector: 'app-manage3',
  templateUrl: './manage3.component.html',
  styleUrls: ['./manage3.component.css']
})
export class Manage3Component implements OnInit {
  currentUser: User;
  myForm:FormGroup;
  userName: AbstractControl;
  id: AbstractControl;
  password: AbstractControl;
  users$:Observable<User>;
  baseUrl="http://127.0.0.1:3000/";
  constructor(private fb:FormBuilder,private httpClient:HttpClient) { 
  this.myForm=this.fb.group({
    'userName':[''],
    'password':[''],
    'id':['']
  });
  this.userName=this.myForm.controls['userName'];
  this.id=this.myForm.controls['id'];
  this.password=this.myForm.controls['password'];
}
  ngOnInit(): void {
    this.users$=<Observable<User>>this.httpClient.get(this.baseUrl+'checks');
  }
  search() {
      if (this.id.value) {
      this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'checks1/' +this.id.value);
     } else {
      this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl+'checks');
     }
    }
    add() {
        console.log(this.myForm.value);
        // 对于可观察对象执行，我们需要订阅其结果
        this.httpClient.post(this.baseUrl + 'add',this.myForm.value).subscribe(
        (val: any) => {  // val是服务器返回的值
          if (val.succ) {
           alert('添加成功!');
      this.users$=<Observable<User>>this.httpClient.get(this.baseUrl+'checks');
         }
        }
       );
      }
      delete() {
          if (!this.currentUser) {
           alert('必须先选择用户!');
         }
          else {
          console.log(this.currentUser.id)
           this.httpClient.post(this.baseUrl + 'delete',this.myForm.value).subscribe(
           (val: any) => {
             if (val.succ) {
              alert('删除成功!');
        this.users$=<Observable<User>>this.httpClient.get(this.baseUrl+'checks');
            }
           }
          )
         }
        }
    update() {
        if (!this.currentUser) {
         alert('必须先选择用户!');
       }
        else {
         this.httpClient.post(this.baseUrl + 'update',this.myForm.value).subscribe(
         (val: any) => {
           if (val.succ) {
            alert('修改成功!');
      this.users$=<Observable<User>>this.httpClient.get(this.baseUrl+'checks');
          }
         }
        )
       }
      }
  select(u:User){
    this.currentUser=u;
    this.myForm.setValue(this.currentUser);
  }
}
