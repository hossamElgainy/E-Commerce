import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/Services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class authGaurdGuard implements CanActivate {
   constructor(private authService: AuthService,private route:Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.authService.isUserLoggedIn)
      {
        return true;
      }else{
        //alert("You Must Login first.......");
        this.route.navigate(['/Admin/SignIn']);
        return false;
      }
  }
}