import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILogin } from '../../VM/ilogin';
import { error } from 'console';
import { Router } from '@angular/router';

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
        this.route.navigateByUrl("/Products/Product");
      },
      error: (err: Error) => { console.log(err.message) }
    }; 
    this.authService.CheckLoginCredentials(loginData).subscribe(observer);
  }
}
