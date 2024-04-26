
//  Author: Evelyn Zepeda
//  Date: 4/21/24
//  Title: Exercise 5.2 Navigation and Layout
//  File: app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'in-n-out-booksp3';

  //Creating the assignment variable
  assignment: string;

  constructor() {
    this.assignment = "Assignment 5.4 - Dialogs";
  }
}

