//Author: Evelyn Zepeda
//Date: 4/7/24
//Title: sign-in.component.ts
//Description: SignInComponent related file

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  isLoggedIn = false;

  constructor(private router: Router) {

   }

  ngOnInit(): void {
  }

  signin() {
    this.isLoggedIn = true;

    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})

    //Alerts the user they are signed in
    alert('User Signed In')
  }
}
