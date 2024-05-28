import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/Services/auth.service';
import { faRegistered, faSignIn, faSignOut, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit{
  faSignIn = faSignIn;
  faSignOut = faSignOut;
  faRegister = faUserPlus;
  
  isLogged:boolean=false;
  constructor(private authService:AuthService){

  }
  ngOnInit(): void {
    this.authService.getLoggedStatus().subscribe(status=>{
      this.isLogged =status;
      console.log(status);
    });
    //console.log(this.authService.isUserLoggedIn);

  }
  signOut()
  {
    localStorage.removeItem("token");
    this.isLogged =false;
  }
}
