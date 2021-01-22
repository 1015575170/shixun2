import { Component} from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
function userNameValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match()) {
  return { invalidUser: true };
  }
  }
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  myForm: FormGroup;
  userName: AbstractControl;
  password: AbstractControl;
  baseUrl = 'http://127.0.0.1:3000/';
  name$: Observable<string>;

  constructor(private fb: FormBuilder,private router: Router,private httpClient:HttpClient,private authService: AuthService) { 
    this.myForm = this.fb.group(
      {
      'userName': ['', Validators.compose([Validators.required, userNameValidator])],
      'password': ['', Validators.compose([Validators.required,Validators.minLength(1)])]
      }
      ); 
  this.userName = this.myForm.controls['userName'];
  this.password = this.myForm.controls['password'];
  this.name$=this.userName.valueChanges;
  }

  login() {
    console.log(this.myForm.value);
      this.httpClient.post(this.baseUrl + 'login',this.myForm.value).subscribe(
        (val: any) => {  
          if (val.succ) {
        this.authService.login();  
      
        this.router.navigate(['/manage']);
 
         }else{
        this.authService.logout();
        alert("用户名或者密码无效");
      }
        }
       );            
       
    //this.router.navigate(['/manage']);

    // const szw={"userName": this.userName,"password": this.password}
    // console.log(szw);
    // this.httpClient.post(this.baseUrl + 'login',szw).subscribe(
    //   (val:any) => {
    //     if (val.succ){
    //       this.authService.login();
    //       this.router.navigate(['/manage']);
    //     }else{
    //      this.authService.logout();
    //       alert("登录失败");
    //     }
    //   }
    // );
    }

}
