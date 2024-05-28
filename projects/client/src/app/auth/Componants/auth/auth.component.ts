import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRegister } from '../../VM/iregister';
import { AuthService } from '../../Services/auth.service';
import { matchPassword } from '../../../../../../../CustomValiddation/MatchPassword.validation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  userRegisterForm: FormGroup;
  constructor(private fb: FormBuilder,private authService:AuthService, private route: Router) {
    this.userRegisterForm = fb.group({
      email: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: fb.control('', [Validators.required]),
      confirmPassword: fb.control('', [Validators.required]),
      name: fb.group({
        firstname: fb.control('',[Validators.required]),
        lastname: fb.control('',[Validators.required]),
      }),
      address: fb.group({
        city: fb.control(''),
        street: fb.control(''),
        number: fb.control(''),//hg
        zipcode: fb.control(''),
        geolocation: fb.group({ //gj
          lat: fb.control(''),
          long: fb.control(''),
        }),
      }),
      phone: fb.control('',[Validators.required]),
    }, { validators: matchPassword() });
  }
  get email() {
    return this.userRegisterForm.get('email');
  } 
   get username() {
    return this.userRegisterForm.get('username');
  }  
  get firstname() {
    return this.userRegisterForm.get('name.firstname');
  } 
   get lastname() {
    return this.userRegisterForm.get('name.lastname');
  }
    get phone() {
    return this.userRegisterForm.get('phone');
  }
  get password() {
    return this.userRegisterForm.get('password');
  }
  get confirmPassword() {
    return this.userRegisterForm.get('confirmPassword');
  }
  submit() {
    let userData: IRegister = this.userRegisterForm.value as IRegister;
    userData.address.number =5;
    userData.address.geolocation.lat="fkldh";
    userData.address.geolocation.long="fkldh";
    const observer = {
      next: (product:any) => {
        alert("User Added Sueessfully")
        this.route.navigateByUrl("/SignIn");
      },
      error: (err: Error) => { console.log(err.message) }
    };
    this.authService.AddNewUser(userData).subscribe(observer);
  }
}
