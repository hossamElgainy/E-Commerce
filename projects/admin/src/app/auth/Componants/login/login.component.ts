import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from '../../../../../../client/src/app/auth/VM/ilogin';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm:FormGroup;
  constructor(private authService:AuthService,private Fb:FormBuilder, private route: Router)
  {

    this.loginForm=Fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }
  get username() {
    return this.loginForm.get('username');
  } 
   get password() {
    return this.loginForm.get('password');
  } 
  submit(){
    let loginData:ILogin = this.loginForm.value as ILogin;
    const observer = {
      next: (token:string) => {
        localStorage.setItem("token", JSON.stringify(token));
        this.authService.isLoggedSubject.next(true);
        this.route.navigateByUrl("/Cart");
      },
      error: (err: Error) => { 
        this.authService.toasterError("Error Occured Please Try Again")
       }
    }; 
    this.authService.CheckLoginCredentials(loginData).subscribe(observer);
  }
}
