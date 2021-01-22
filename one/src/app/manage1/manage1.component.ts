import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { DeviceService } from '../device.service';
import { User } from './user';

@Component({
  selector: 'app-manage1',
  templateUrl: './manage1.component.html',
  styleUrls: ['./manage1.component.css']
})
export class Manage1Component implements OnInit {
  led$=null;
  timer;
  feed$=null;
  dangwei$=null;
  temp1: AbstractControl;
  myForm:FormGroup;
  id:AbstractControl;
  time:AbstractControl;
  users$: Observable<User>;
  baseUrl = 'http://127.0.0.1:3000/';
  currentUser: User;
  Type: AbstractControl;
  Value: AbstractControl;
  baowen$=null;
  baowen1$=null;
  hum1$=null;
  temp$=null;
  hum$=null;
  dogT$=null;
  constructor(private deviceService: DeviceService,private fb: FormBuilder,private httpClient:HttpClient) {
    this.myForm = this.fb.group({
      'id':[''],
      'Type':[''],
      'Value':[''],
      'time':[''],
      'temp1':['']
    });

    this.id = this.myForm.controls['id'];
    this.Type = this.myForm.controls['Type'];
    this.Value = this.myForm.controls['Value'];
    this.time = this.myForm.controls['time'];
    this.temp1 = this.myForm.controls['temp1'];
  }

  ngOnInit(): void {
 
    // this.baowen$ = this.deviceService.getbaowen(); 
    this.timer = setInterval(()=>{
    this.dangwei$ = this.deviceService.getdw();
    this.led$ = this.deviceService.getLED();
    this.feed$ = this.deviceService.getfeed();
    this.baowen$ = this.deviceService.getbaowen();
    this.baowen1$ = this.deviceService.getbaowen1();
    this.hum1$ = this.deviceService.gethum1();
    this.temp$ = this.deviceService.gettemp();
    this.hum$ = this.deviceService.gethum();
    this.dogT$ = this.deviceService.getdogT();
    console.log(this.dangwei$)
      },2000)

    

    // this.led$ = this.deviceService.getLED();
    // console.log(this.led$) 
   }
   ledOn(){
   this.deviceService.toggleLED(1).subscribe(
    () => {
    console.log('Turn on SXT');
    }
    );
    }
    // 关灯
    ledOff(){
    this.deviceService.toggleLED(0).subscribe(
    () => {
    console.log('Turn off SXT');
    }
    );
    }

   feedOn(){
   this.deviceService.togglefeed(1).subscribe(
    () => {
    console.log('Turn on feed');
    }
    );
    }
    // 关灯
    feedOff(){
    this.deviceService.togglefeed(0).subscribe(
    () => {
    console.log('Turn off feed');
    }
    );
    }
    time1(){
      this.httpClient.post(this.baseUrl + 'time',this.myForm.value).subscribe(
        (val:any) =>{
          if(val.succ){
            alert('修改成功');
          }
        }
      )
    }
    one(){
      var one = {time:'500'};
      this.httpClient.post(this.baseUrl + 'one',one).subscribe(
        (val:any) =>{
          if(val.succ){
            alert('设置成功');
          }
        }
      )
    }
    two(){
      var two = {time:'1000'};
      this.httpClient.post(this.baseUrl + 'two',two).subscribe(
        (val:any) =>{
          if(val.succ){
            alert('设置成功');
          }
        }
      )
    }
    three(){
      var three = {time:'1500'};
      this.httpClient.post(this.baseUrl + 'three',three).subscribe(
        (val:any) =>{
          if(val.succ){
            alert('设置成功');
          }
        }
      )
    }
    four(){
      var four = {time:'2000'};
      this.httpClient.post(this.baseUrl + 'four',four).subscribe(
        (val:any) =>{
          if(val.succ){
            alert('设置成功');
          }
        }
      )
    }
    five(){
      var five = {time:'2500'};
      this.httpClient.post(this.baseUrl + 'five',five).subscribe(
        (val:any) =>{
          if(val.succ){
            alert('设置成功');
          }
        }
      )
    }
    six(){
      var six = {time:'3000'};
      this.httpClient.post(this.baseUrl + 'six',six).subscribe(
        (val:any) =>{
          if(val.succ){
            alert('设置成功');
          }
        }
      )
    }
    temp(){
      this.httpClient.post(this.baseUrl + 'temp1',this.myForm.value).subscribe(
        (val:any) =>{
          if(val.succ){
            alert('设置成功');
          }
        }
      )
    }
    Tips(){
      timer(2000,2000).subscribe(
        ()=>{
        var zzz = [];
        this.httpClient.post(this.baseUrl + 'dogT',zzz).subscribe(
        (val:any) =>{
          //console.log(val)
          if(val.succ){
            console.log('111')
          }else{
           alert('狗子体温不正常')
          }
        }
      )
        }
      )
      
    }
}
