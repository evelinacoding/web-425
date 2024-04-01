//Author: Evelyn Zepeda
//Date: 3/31/24
//Title: app.component.ts
//Description: Exports the AppComponent to the composer app and sets up the logged in boolean.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: Boolean = true;
  assignment = 'Exercise 2.3 - Data Binding';
}
