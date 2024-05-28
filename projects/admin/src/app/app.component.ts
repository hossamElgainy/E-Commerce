import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //loginRoute:string;
  title = 'Admin';
  signInPage:boolean =false;
  constructor(private router:Router){}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects || event.url;
        this.checkWordInUrl(currentUrl, 'SignIn');
      }
    });
  }

  checkWordInUrl(url: string, word: string): void {
    if (url.includes(word)) {
      this.signInPage =true;
    } else{
      this.signInPage =false;
    }
  }
}
