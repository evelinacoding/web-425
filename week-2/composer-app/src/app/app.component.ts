//Author: Evelyn Zepeda
//Date: 3/31/24
//Title: app.component.ts
//Description: Exports the AppComponent class

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment = 'Composer App';
}
