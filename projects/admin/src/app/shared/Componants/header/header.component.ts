import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/Services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  faSignIn = faSignIn;
  faSignOut = faSignOut;
  isLogged:boolean=false;
  constructor(private authService:AuthService){
  }
  ngOnInit(): void {
    this.authService.getLoggedStatus().subscribe(status=>{
      this.isLogged =status;
    });
  }
  signOut()
  {
    localStorage.removeItem("token");
    this.isLogged =false;    
  }
}
