import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})

export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = "Exercise 7.2 - Reactive Forms"
   }

  ngOnInit(): void {
  }

  //Function to sign out
  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in'])
  }

}
