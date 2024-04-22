
//  Author: Evelyn Zepeda
//  Date: 4/21/24
//  Title: Exercise 5.2 Navigation and Layout

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'in-n-out-bookssp1';

  //Creating the assignment variable
  assignment: string;

  constructor() {
    this.assignment = "Exercise 5.2 - Navigation and Layout"
  }
}

